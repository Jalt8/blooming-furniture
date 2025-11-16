#!/bin/bash

# Blooming Furniture - Image Download Script
# Run this script to download free stock images for the website

echo "🎨 Downloading images for Blooming Furniture website..."
echo ""

# Create directories if they don't exist
mkdir -p public/images/hero
mkdir -p public/images/services
mkdir -p public/images/locations
mkdir -p public/images/portfolio

# Free Unsplash URLs (these are example URLs - you'll need to get actual download links)
# To get real download URLs:
# 1. Go to unsplash.com
# 2. Search for the image
# 3. Right-click on "Download" button and copy link
# 4. Replace the URLs below

echo "📥 Downloading hero images..."
# curl -L "https://unsplash.com/photos/[IMAGE_ID]/download?force=true" -o public/images/hero/hero-workshop.jpg

echo "📥 Downloading service images..."
# curl -L "https://unsplash.com/photos/[IMAGE_ID]/download?force=true" -o public/images/services/custom-furniture-hero.jpg
# curl -L "https://unsplash.com/photos/[IMAGE_ID]/download?force=true" -o public/images/services/antique-restoration-hero.jpg

echo ""
echo "⚠️  INSTRUCTIONS:"
echo ""
echo "This script template needs actual image URLs. Here's how to complete it:"
echo ""
echo "1. Go to https://unsplash.com"
echo "2. Search for: 'furniture restoration' or 'antique furniture'"
echo "3. Click on an image you like"
echo "4. Right-click the 'Download' button"
echo "5. Select 'Copy Link Address'"
echo "6. Edit this script and replace [IMAGE_ID] with the copied URL"
echo "7. Run this script again"
echo ""
echo "OR - Easier method:"
echo "1. Go to https://unsplash.com"
echo "2. Download images manually (click Download button)"
echo "3. Rename files according to IMAGE-GUIDE.md"
echo "4. Place in correct folders"
echo ""

# Placeholder - uncomment and add real URLs after getting them from Unsplash
# Example of what the commands should look like:
# curl -L "https://images.unsplash.com/photo-1234567890/download" -o public/images/hero/hero-workshop.jpg

echo "✨ Script ready for customization!"
