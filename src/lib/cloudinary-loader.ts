interface CloudinaryLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function cloudinaryLoader({ src, width, quality }: CloudinaryLoaderProps): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dofdwsngd';
  const q = quality || 'auto';
  const baseUrl = 'https://bloomingfurniture.co.za';

  // If src is already a full Cloudinary URL, return as-is with transforms
  if (src.includes('res.cloudinary.com')) {
    return src;
  }

  // Use Cloudinary's fetch mode to auto-fetch from our domain
  const params = `w_${width},q_${q},f_auto,c_limit`;
  const fetchUrl = `${baseUrl}${src}`;

  return `https://res.cloudinary.com/${cloudName}/image/fetch/${params}/${fetchUrl}`;
}
