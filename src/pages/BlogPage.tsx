import React, { useState } from 'react';
import { PageId } from '../types';
import { BLOG_POSTS } from '../data/agencyData';
import { Search, ArrowUpRight, BookOpen, Clock } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onSelectArticle: (articleId: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Product Design', 'Brand Strategy', 'Web Engineering', 'UX Research'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const handleArticleClick = (id: string) => {
    onSelectArticle(id);
    onNavigate('blog-post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* 1. HEADER SECTION */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <span className="w-2 h-2 rounded-xs bg-amber-400 rotate-45 inline-block"></span>
            <span>Studio Dispatch & Journal</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10213D] leading-[1.1]">
            Notes on design craft, thoughtful systems, and building for the web.
          </h1>

          <p className="text-base sm:text-lg text-[#3F5068] leading-relaxed">
            Uncompromising technical breakdowns, design systems research, and strategic analyses from our senior partners. No ghostwriters, no fluff.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-10 pt-8 border-t border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Interactive Category Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-neutral-800 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-[#10213D] font-semibold shadow-sm'
                    : 'text-[#586B84] hover:text-[#10213D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#586B84] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-neutral-800 rounded-lg text-xs text-[#10213D] placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SPOTLIGHT */}
      {selectedCategory === 'All' && searchQuery.trim() === '' && featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            onClick={() => handleArticleClick(featuredPost.id)}
            className="group cursor-pointer bg-white/40 border border-neutral-800 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-neutral-700 transition-all p-6 sm:p-8"
          >
            <div className="lg:col-span-7 space-y-4">
              {/* Unboxed clean metadata */}
              <div className="flex items-center gap-2 text-xs text-[#586B84]">
                <span className="text-amber-400 font-semibold">{featuredPost.category}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredPost.date}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-[#586B84]" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#10213D] tracking-tight group-hover:text-amber-400 transition-colors">
                {featuredPost.title}
              </h2>

              <p className="text-sm text-[#3F5068] leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E5ECF5] border border-neutral-700 flex items-center justify-center text-xs font-bold text-amber-400">
                    {featuredPost.author.avatar}
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-[#10213D]">{featuredPost.author.name}</div>
                    <div className="text-[#586B84]">{featuredPost.author.role}</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Read Full Essay</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-neutral-800 bg-[#F1F5FA] h-64 sm:h-80 relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </section>
      )}

      {/* 3. ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800 text-xs text-[#586B84]">
          <span>
            Showing <strong className="text-[#10213D] font-mono">{filteredPosts.length}</strong> publication{filteredPosts.length !== 1 ? 's' : ''}
          </span>
          <span className="font-mono text-[#586B84]">Peer Reviewed & Published</span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center space-y-3">
            <BookOpen className="w-10 h-10 text-[#6C7D94] mx-auto" />
            <h3 className="text-lg font-bold text-[#10213D]">No articles found</h3>
            <p className="text-xs text-[#586B84]">
              No published essays matched "{searchQuery}" in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs text-amber-400 bg-white border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handleArticleClick(post.id)}
                className="group cursor-pointer bg-white/40 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-[#F1F5FA]">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6 space-y-3">
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-[11px] text-[#586B84]">
                      <span className="text-amber-400 font-semibold">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#10213D] group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#3F5068] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#E5ECF5] border border-neutral-700 flex items-center justify-center text-[10px] font-bold text-[#3F5068]">
                      {post.author.avatar}
                    </div>
                    <span className="text-[#586B84]">{post.author.name}</span>
                  </div>

                  <span className="text-amber-400 font-semibold text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Read Essay
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
