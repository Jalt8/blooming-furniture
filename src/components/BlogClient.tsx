'use client';

import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Featured and recent blog posts data
const featuredPosts = [
  {
    id: 'complete-guide-furniture-restoration-west-coast',
    title: 'The Complete Guide to Furniture Restoration on the West Coast',
    excerpt: 'Everything you need to know about restoring furniture in coastal South Africa. From weather effects to local wood types, this comprehensive guide covers it all.',
    category: 'Pillar Guide',
    readTime: '12 min read',
    publishDate: '2025-01-06',
    image: 'BloomingFurniture/coastal-restoration-guide',
    featured: true,
    tags: ['restoration', 'west coast', 'guide', 'coastal climate']
  },
  {
    id: 'antique-furniture-restoration-west-coast-heritage',
    title: 'Antique Furniture Restoration: Preserving West Coast Heritage',
    excerpt: 'Discover the rich heritage of West Coast furniture styles and learn how to properly restore antique pieces that tell the story of our region.',
    category: 'Heritage Guide',
    readTime: '10 min read',
    publishDate: '2025-01-06',
    image: 'BloomingFurniture/antique-heritage-guide',
    featured: true,
    tags: ['antique', 'heritage', 'restoration', 'history']
  },
  {
    id: 'leather-furniture-care-coastal-climates',
    title: 'Leather Furniture Care and Repair in Coastal Climates',
    excerpt: 'Protect your leather furniture from salt air and humidity. Expert tips for maintaining and repairing leather in West Coast conditions.',
    category: 'Care Guide',
    readTime: '8 min read',
    publishDate: '2025-01-06',
    image: 'BloomingFurniture/leather-care-guide',
    featured: true,
    tags: ['leather', 'coastal', 'care', 'maintenance']
  }
];

const recentPosts = [
  {
    id: 'sea-salt-furniture-damage-west-coast',
    title: 'How Sea Salt Damages Your Furniture: A West Coast Problem',
    excerpt: 'Understanding the unique challenges coastal living presents to your furniture and how to protect against salt air damage.',
    category: 'Problem Solving',
    readTime: '6 min read',
    publishDate: '2025-01-06',
    image: 'BloomingFurniture/salt-damage-guide',
    tags: ['salt damage', 'coastal', 'protection']
  },
  {
    id: 'furniture-restoration-langebaan-local-guide',
    title: 'Furniture Restoration in Langebaan: A Local\'s Guide',
    excerpt: 'Your complete guide to furniture restoration services in Langebaan, featuring local success stories and community insights.',
    category: 'Local Guide',
    readTime: '7 min read',
    publishDate: '2025-01-05',
    image: 'BloomingFurniture/langebaan-guide',
    tags: ['langebaan', 'local', 'community']
  },
  {
    id: 'signs-antique-furniture-needs-restoration',
    title: '5 Signs Your Antique Furniture Needs Professional Restoration',
    excerpt: 'Learn to identify when your precious antique pieces require expert attention to preserve their value and beauty.',
    category: 'Problem Solving',
    readTime: '5 min read',
    publishDate: '2025-01-04',
    image: 'BloomingFurniture/antique-signs-guide',
    tags: ['antique', 'assessment', 'restoration']
  }
];

const categories = [
  { name: 'Pillar Guides', count: 3, color: 'bg-forest-green' },
  { name: 'Local Area', count: 9, color: 'bg-golden-center' },
  { name: 'Problem Solving', count: 6, color: 'bg-dark-wood' },
  { name: 'Seasonal Care', count: 4, color: 'bg-forest-green' },
  { name: 'Service Deep Dives', count: 5, color: 'bg-golden-center' },
];

export default function BlogClient() {
  return (
    <div className="min-h-screen bg-daisy-cream pt-24 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-forest-green to-dark-wood text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Furniture Restoration Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Expert tips, local guides, and professional insights for West Coast furniture restoration
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {categories.slice(0, 3).map((category) => (
                <span
                  key={category.name}
                  className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm"
                >
                  {category.name} ({category.count})
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-dark-wood">Featured Guides</h2>
            <span className="text-forest-green font-medium">Pillar Content</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    width={400}
                    height={300}
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-golden-center text-dark-wood text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-forest-green mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-dark-wood mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-forest-green mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-daisy-cream text-forest-green text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-forest-green font-semibold hover:text-dark-wood transition-colors duration-300"
                  >
                    Read Full Guide
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Categories & Recent Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-dark-wood mb-6">Browse by Category</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-golden-center hover:bg-golden-center/10 transition-all duration-300"
                  >
                    <span className="font-medium text-dark-wood">{category.name}</span>
                    <span className="text-sm text-forest-green">({category.count})</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-forest-green text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-sm mb-4 opacity-90">
                Get the latest furniture restoration tips and West Coast guides delivered to your inbox.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full text-center bg-golden-center text-dark-wood py-2 px-4 rounded-lg font-semibold hover:bg-white transition-colors duration-300"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-dark-wood">Recent Posts</h2>
            </div>
            
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="relative h-48 md:h-full">
                        <Image
                          width={300}
                          height={200}
                          src={post.image}
                          alt={post.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-golden-center text-dark-wood text-sm font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center text-sm text-forest-green mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        <Clock className="h-4 w-4 ml-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-dark-wood mb-3">
                        {post.title}
                      </h3>
                      
                      <p className="text-forest-green mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-daisy-cream text-forest-green text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-forest-green font-semibold hover:text-dark-wood transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}