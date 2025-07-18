import React from 'react';
import { Metadata } from 'next';
import AboutClient from './client';

export const metadata: Metadata = {
  title: 'About Us - Expert Furniture Restoration Craftsmen',
  description: 'Learn about Blooming Furniture\'s expert craftsmen and our 10+ years of furniture restoration experience. Eco-friendly practices serving West Coast South Africa communities.',
  keywords: 'about blooming furniture, furniture restoration craftsmen, West Coast furniture restoration, eco-friendly furniture restoration, expert furniture repair',
  openGraph: {
    title: 'About Blooming Furniture - Expert Restoration Craftsmen',
    description: 'Expert furniture restoration craftsmen with 10+ years experience serving West Coast South Africa.',
    images: ['/blooming-furniture.png'],
    type: 'website'
  }
};

export default function AboutPage() {
  return <AboutClient />;
}