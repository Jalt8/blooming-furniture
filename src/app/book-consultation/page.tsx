import { Metadata } from 'next';
import BookConsultationClient from './BookConsultationClient';

export const metadata: Metadata = {
  title: 'Book a Free Consultation',
  description: 'Book your free furniture restoration consultation with Blooming Furniture. Expert assessment for wood repair, refinishing & antique restoration on the West Coast. Call +27 79 375 2588.',
  openGraph: {
    title: 'Book a Free Furniture Restoration Consultation',
    description: 'Get expert advice on restoring your cherished furniture. Free 15-minute consultation with Blooming Furniture, West Coast South Africa.',
    url: 'https://bloomingfurniture.co.za/book-consultation',
    images: ['/blooming-furniture.png'],
    type: 'website',
    locale: 'en_ZA',
  },
  alternates: {
    canonical: 'https://bloomingfurniture.co.za/book-consultation',
  },
};

export default function BookConsultationPage() {
  return <BookConsultationClient />;
}
