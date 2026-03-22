#!/bin/bash
# Compress oversized images using macOS sips
# Resizes images to max 1600px wide and reduces JPEG quality
# Original files are backed up to .original extension

PORTFOLIO_DIR="$(dirname "$0")/../public/images/portfolio"
BLOG_DIR="$(dirname "$0")/../public/blog"
HERO_DIR="$(dirname "$0")/../public/images/hero"
MAX_WIDTH=1600
BACKUP=false  # Set to true to keep originals

echo "=== Blooming Furniture Image Compression ==="
echo ""

compress_image() {
  local file="$1"
  local original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
  local original_kb=$((original_size / 1024))

  # Skip if already small (under 400KB)
  if [ "$original_kb" -lt 400 ]; then
    return
  fi

  echo -n "  Compressing: $(basename "$file") (${original_kb}KB) -> "

  # Backup original if requested
  if [ "$BACKUP" = true ]; then
    cp "$file" "${file}.original"
  fi

  # Get current width
  local width=$(sips -g pixelWidth "$file" 2>/dev/null | tail -1 | awk '{print $2}')

  # Resize if wider than MAX_WIDTH
  if [ -n "$width" ] && [ "$width" -gt "$MAX_WIDTH" ]; then
    sips --resampleWidth "$MAX_WIDTH" "$file" >/dev/null 2>&1
  fi

  # Convert PNG to JPEG for photos (saves significant space)
  if [[ "$file" == *.png ]] && [ "$original_kb" -gt 500 ]; then
    local jpeg_file="${file%.png}.jpg"
    sips -s format jpeg -s formatOptions 80 "$file" --out "$jpeg_file" >/dev/null 2>&1
    if [ -f "$jpeg_file" ]; then
      local new_size=$(stat -f%z "$jpeg_file" 2>/dev/null || stat -c%s "$jpeg_file" 2>/dev/null)
      local new_kb=$((new_size / 1024))
      echo "${new_kb}KB (converted to JPEG, saved $((original_kb - new_kb))KB)"
      rm "$file"  # Remove original PNG
      return
    fi
  fi

  # For JPEG files, re-save at quality 80
  if [[ "$file" == *.jpg ]] || [[ "$file" == *.jpeg ]]; then
    sips -s formatOptions 80 "$file" >/dev/null 2>&1
  fi

  local new_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
  local new_kb=$((new_size / 1024))
  echo "${new_kb}KB (saved $((original_kb - new_kb))KB)"
}

# Process portfolio images
echo "Processing portfolio images..."
for file in "$PORTFOLIO_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
  [ -f "$file" ] && compress_image "$file"
done

# Process blog images
echo ""
echo "Processing blog images..."
for file in "$BLOG_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
  [ -f "$file" ] && compress_image "$file"
done

# Process hero images
echo ""
echo "Processing hero images..."
for file in "$HERO_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG}; do
  [ -f "$file" ] && compress_image "$file"
done

echo ""
echo "=== Compression complete ==="
echo ""
echo "Next steps for even better optimization:"
echo "  1. Install cwebp: brew install webp"
echo "  2. Run: for f in public/images/portfolio/*.{jpg,jpeg}; do cwebp -q 80 \"\$f\" -o \"\${f%.*}.webp\"; done"
echo "  3. Update image references to use .webp format"
