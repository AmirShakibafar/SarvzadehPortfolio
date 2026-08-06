import os
import json
import subprocess
from pathlib import Path


OUTPUT = "frontend-analysis.txt"

IGNORE_DIRS = {
    "node_modules",
    ".next",
    ".git",
    "dist",
    "build",
    "coverage",
    ".cache",
    ".turbo",
    "out",
}


CONFIG_FILES = [
    "next.config.js",
    "next.config.mjs",
    "next.config.ts",
    "vite.config.js",
    "vite.config.ts",
    "tailwind.config.js",
    "tailwind.config.ts",
    "tsconfig.json",
    "jsconfig.json",
    "eslint.config.js",
    ".eslintrc",
    ".prettierrc",
]


SOURCE_DIRS = [
    "src",
    "app",
    "pages",
    "components",
    "hooks",
    "lib",
    "utils",
    "styles",
]


def write_section(file, title):
    file.write("\n\n")
    file.write("=" * 60 + "\n")
    file.write(title + "\n")
    file.write("=" * 60 + "\n")


def should_ignore(path):
    return any(part in IGNORE_DIRS for part in path.parts)


def print_tree(root, file, max_depth=5):
    root = Path(root)

    def walk(path, prefix="", depth=0):
        if depth > max_depth:
            return

        if should_ignore(path):
            return

        items = sorted(
            [
                p for p in path.iterdir()
                if not should_ignore(p)
            ],
            key=lambda x: (x.is_file(), x.name.lower())
        )

        for index, item in enumerate(items):
            connector = "└── " if index == len(items)-1 else "├── "

            file.write(prefix + connector + item.name + "\n")

            if item.is_dir():
                extension = "    " if index == len(items)-1 else "│   "
                walk(
                    item,
                    prefix + extension,
                    depth + 1
                )

    walk(root)


def add_file_content(file, filename):
    path = Path(filename)

    if path.exists():
        file.write(f"\n--- {filename} ---\n")

        try:
            file.write(path.read_text(encoding="utf-8"))
        except Exception:
            file.write("[Could not read file]")


def find_source_files():
    result = []

    for folder in SOURCE_DIRS:
        path = Path(folder)

        if path.exists():
            for file in path.rglob("*"):
                if (
                    file.is_file()
                    and file.suffix in [".tsx", ".jsx", ".ts", ".js"]
                    and not should_ignore(file)
                ):
                    result.append(file)

    return result


def analyze_exports(file):
    output = []

    try:
        content = file.read_text(
            encoding="utf-8",
            errors="ignore"
        )

        for line in content.splitlines():
            line = line.strip()

            if (
                line.startswith("export default")
                or line.startswith("export function")
                or line.startswith("export const")
                or line.startswith("function ")
            ):
                output.append(line)

    except Exception:
        pass

    return output


def get_dependencies():
    package = Path("package.json")

    if not package.exists():
        return None

    try:
        data = json.loads(
            package.read_text(encoding="utf-8")
        )

        return {
            "dependencies": data.get("dependencies", {}),
            "devDependencies": data.get("devDependencies", {})
        }

    except Exception:
        return None


def run_npm_list():
    try:
        result = subprocess.run(
            ["npm", "list", "--depth=0"],
            capture_output=True,
            text=True,
            timeout=20
        )

        return result.stdout + result.stderr

    except Exception:
        return "npm not available"


def main():

    with open(
        OUTPUT,
        "w",
        encoding="utf-8"
    ) as f:

        write_section(
            f,
            "PROJECT STRUCTURE"
        )

        print_tree(
            ".",
            f,
            max_depth=5
        )


        write_section(
            f,
            "PACKAGE.JSON"
        )

        package = Path("package.json")

        if package.exists():
            f.write(
                package.read_text(
                    encoding="utf-8"
                )
            )


        write_section(
            f,
            "CONFIGURATION FILES"
        )

        for config in CONFIG_FILES:
            add_file_content(
                f,
                config
            )


        write_section(
            f,
            "SOURCE FILE INVENTORY"
        )

        source_files = find_source_files()

        for file in source_files:
            f.write(
                str(file) + "\n"
            )


        write_section(
            f,
            "COMPONENT EXPORT SUMMARY"
        )

        for file in source_files:

            exports = analyze_exports(file)

            if exports:
                f.write(
                    f"\n--- {file} ---\n"
                )

                for item in exports:
                    f.write(
                        item + "\n"
                    )


        write_section(
            f,
            "DEPENDENCIES"
        )

        deps = get_dependencies()

        if deps:
            f.write(
                json.dumps(
                    deps,
                    indent=2
                )
            )


        write_section(
            f,
            "NPM PACKAGE TREE"
        )

        f.write(
            run_npm_list()
        )


    print(
        f"Done! Created {OUTPUT}"
    )


if __name__ == "__main__":
    main()