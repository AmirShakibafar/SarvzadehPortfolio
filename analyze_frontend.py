import os

ALLOWED_EXTENSIONS = ('.js', '.jsx', '.ts', '.tsx')
OUTPUT_FILE = 'animation_context.md'
SEARCH_TERM = 'framer-motion'
IGNORE_DIRS = set(['node_modules', '.next', '.git', 'dist', 'build'])

def extract_framer_context():
    matched_files = 0
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as out_file:
        for root, dirs, files in os.walk('.'):
            # Prune ignored directories
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
            
            for file in files:
                if not file.endswith(ALLOWED_EXTENSIONS):
                    continue
                    
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    if SEARCH_TERM in content:
                        out_file.write(f"### {filepath}\n")
                        out_file.write(f"```{filepath.split('.')[-1]}\n")
                        out_file.write(content)
                        out_file.write("\n```\n\n")
                        matched_files += 1
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
                    
    print(f"Extracted {matched_files} files to {OUTPUT_FILE}")

if __name__ == "__main__":
    extract_framer_context()