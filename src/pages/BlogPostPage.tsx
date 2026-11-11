import React, { useState } from 'react';
import { PageId, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/agencyData';
import { ArrowLeft, Clock, Share2, Check, ArrowUpRight } from 'lucide-react';

interface BlogPostPageProps {
  articleId: string;
  onNavigate: (page: PageId) => void;
  onSelectArticle: (id: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  articleId,
  onNavigate,
  onSelectArticle,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const article: BlogPost =
    BLOG_POSTS.find((p) => p.id === articleId) || BLOG_POSTS[0];

  const relatedArticles = BLOG_POSTS.filter((p) => p.id !== article.id).slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-24 space-y-12">
      {/* Top Breadcrumb & Share row */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4 text-xs">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-1.5 text-[#586B84] hover:text-[#10213D] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Essays</span>
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 text-[#586B84] hover:text-amber-400 transition-colors"
        >
          {copiedLink ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400">Link Copied</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </>
          )}
        </button>
      </div>

      {/* Header & Meta */}
      <header className="space-y-6">
        <div className="flex items-center gap-2 text-xs text-[#586B84]">
          <span className="text-amber-400 font-semibold">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.date}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5 text-[#586B84]" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#10213D] leading-[1.12] text-balance">
          {article.title}
        </h1>

        <div className="flex items-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-full bg-[#E5ECF5] border border-neutral-700 flex items-center justify-center font-bold text-amber-400 text-sm">
            {article.author.avatar}
          </div>
          <div className="text-xs">
            <div className="font-semibold text-[#10213D]">{article.author.name}</div>
            <div className="text-[#586B84]">{article.author.role}</div>
          </div>
        </div>
      </header>

      {/* Hero Photography Banner */}
      <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-[#F1F5FA] max-h-[460px] relative">
        <img
          src={article.image}
          alt={article.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Prose Content */}
      <div className="space-y-8 text-[#3F5068] leading-relaxed text-base">
        <p className="text-lg text-[#28384F] font-normal leading-relaxed border-b border-neutral-800/80 pb-6">
          {article.content.introduction}
        </p>

        {article.content.sections.map((sec, sIdx) => (
          <section key={sIdx} className="space-y-4 pt-2">
            <h2 className="text-2xl font-bold text-[#10213D] tracking-tight">
              {sec.heading}
            </h2>

            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-[#3F5068]">
                {p}
              </p>
            ))}

            {sec.quote && (
              <blockquote className="my-6 p-6 rounded-xl bg-white border border-neutral-800 text-[#10213D] italic text-base leading-relaxed">
                "{sec.quote}"
              </blockquote>
            )}
          </section>
        ))}

        {/* Actionable Key Takeaways Box */}
        {article.content.takeaways && article.content.takeaways.length > 0 && (
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white/60 border border-amber-400/30 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Key takeaways
            </div>
            <ul className="space-y-3 text-sm text-[#28384F]">
              {article.content.takeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Author Box */}
      <div className="border-t border-b border-neutral-800 py-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#E5ECF5] border border-neutral-700 flex items-center justify-center font-bold text-amber-400 text-base">
            {article.author.avatar}
          </div>
          <div className="text-xs">
            <div className="text-[#586B84] uppercase tracking-wider text-[10px] font-mono">
              Written By
            </div>
            <div className="text-base font-bold text-[#10213D]">{article.author.name}</div>
            <div className="text-[#586B84]">{article.author.role} at Logo Web Studio</div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="px-4 py-2 bg-white hover:bg-[#E5ECF5] border border-neutral-700 text-[#28384F] text-xs font-semibold rounded-lg transition-colors"
        >
          Discuss With Author
        </button>
      </div>

      {/* Related Articles */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#10213D]">Recommended Readings</h3>
          <button
            onClick={() => onNavigate('blog')}
            className="text-xs text-amber-400 hover:text-amber-300 font-semibold"
          >
            Explore All Essays →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedArticles.map((rel) => (
            <div
              key={rel.id}
              onClick={() => {
                onSelectArticle(rel.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer bg-white/40 border border-neutral-800 rounded-2xl p-5 hover:border-neutral-700 transition-all space-y-3"
            >
              <div className="flex items-center gap-2 text-[11px] text-[#586B84]">
                <span className="text-amber-400 font-semibold">{rel.category}</span>
                <span aria-hidden="true">·</span>
                <span>{rel.readTime}</span>
              </div>
              <h4 className="text-base font-bold text-[#10213D] group-hover:text-amber-400 transition-colors line-clamp-2">
                {rel.title}
              </h4>
              <p className="text-xs text-[#586B84] line-clamp-2">
                {rel.excerpt}
              </p>
              <div className="inline-flex items-center gap-1 text-xs text-amber-400 font-semibold pt-1">
                <span>Read Article</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
