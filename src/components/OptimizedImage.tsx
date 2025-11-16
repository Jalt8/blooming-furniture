import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

/**
 * Optimized Image Component
 *
 * Wraps Next.js Image component with consistent optimization settings
 * for the Blooming Furniture website
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  objectFit = 'cover'
}: OptimizedImageProps) {

  // If width/height provided, use fixed dimensions
  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
        style={{ objectFit }}
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABmQAAA//9k="
      />
    );
  }

  // Otherwise use fill layout for responsive images
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        style={{ objectFit }}
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
