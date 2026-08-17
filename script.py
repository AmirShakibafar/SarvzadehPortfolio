import subprocess
from pathlib import Path
from PIL import Image

def convert_images_to_webp(directory: str, quality: int = 80):
    target_dir = Path(directory)
    valid_extensions = {'.jpg', '.jpeg', '.webp', ".webp", ".gif", ".tiff", ".bmp"}

    for file_path in target_dir.rglob('*'):
        if file_path.suffix.lower() in valid_extensions:
            webp_path = file_path.with_suffix('.webp')

            # Convert image to WebP
            with Image.open(file_path) as img:
                img.save(webp_path, 'WEBP', quality=quality)

            # Standardize target image properties via XMP fields
            subprocess.run([
                'exiftool',
                '-tagsfromfile', str(file_path),
                '-xmp:all<all',
                '-overwrite_original',
                str(webp_path)
            ], check=True, stdout=subprocess.DEVNULL)

            print(f"Processed: {file_path.name} -> {webp_path.name}")

if __name__ == "__main__":
    # Target the public images directory of the Next.js project
    convert_images_to_webp('./public/images')