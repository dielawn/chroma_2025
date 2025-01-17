from PIL import Image
import os
from pathlib import Path

def convert_to_webp(input_dir, output_dir, quality=80):
    """
    Convert images in input_dir to WebP format and save them in output_dir.
    
    Args:
        input_dir (str): Directory containing source images
        output_dir (str): Directory where WebP images will be saved
        quality (int): WebP quality (0-100), default 80
    """
    # Create output directory if it doesn't exist
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    
    # Supported input formats
    valid_formats = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff'}
    
    for filename in os.listdir(input_dir):
        # Get file extension and check if it's supported
        file_ext = Path(filename).suffix.lower()
        if file_ext in valid_formats:
            try:
                # Open and convert image
                input_path = os.path.join(input_dir, filename)
                with Image.open(input_path) as img:
                    # Create output filename (replace original extension with .webp)
                    output_filename = Path(filename).stem + '.webp'
                    output_path = os.path.join(output_dir, output_filename)
                    
                    # Convert and save as WebP
                    img.save(output_path, 'WEBP', quality=quality)
                print(f"Converted: {filename} -> {output_filename}")
            except Exception as e:
                print(f"Error converting {filename}: {str(e)}")

# Example usage
if __name__ == "__main__":
    input_directory = "/home/dielawn/code/chroma_2025/raw_assets"
    output_directory = "/home/dielawn/code/chroma_2025/src/assets"
    convert_to_webp(input_directory, output_directory)