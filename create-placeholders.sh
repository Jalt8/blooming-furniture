#!/bin/bash

# Create placeholder images using ImageMagick (if installed)
# These will be replaced with real images later

cd "public/images"

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick not installed. Installing placeholders as SVG instead..."

    # Create SVG placeholders
    cat > hero/hero-workshop.svg << 'EOF'
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1920" height="1080" fill="#F5F0E8"/>
  <text x="50%" y="50%" font-family="Arial" font-size="48" fill="#2C5F2D" text-anchor="middle" dominant-baseline="middle">
    Hero Workshop Image
    1920x1080
  </text>
</svg>
EOF

    cat > services/custom-furniture-hero.svg << 'EOF'
<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="800" fill="#F5F0E8"/>
  <text x="50%" y="50%" font-family="Arial" font-size="36" fill="#2C5F2D" text-anchor="middle" dominant-baseline="middle">
    Custom Furniture
    1200x800
  </text>
</svg>
EOF

    echo "✅ SVG placeholders created!"
    echo "Replace these with real images from Unsplash or Pexels"
else
    # Create with ImageMagick
    convert -size 1920x1080 xc:#F5F0E8 -pointsize 60 -fill "#2C5F2D" -gravity center \
        -annotate +0+0 "Hero Workshop\n1920x1080" hero/hero-workshop.jpg

    convert -size 1200x800 xc:#F5F0E8 -pointsize 48 -fill "#2C5F2D" -gravity center \
        -annotate +0+0 "Custom Furniture\n1200x800" services/custom-furniture-hero.jpg

    echo "✅ Placeholder images created with ImageMagick!"
fi

echo ""
echo "📝 Next steps:"
echo "1. Visit https://unsplash.com or https://www.vecteezy.com"
echo "2. Download real furniture images"
echo "3. Replace these placeholders"
