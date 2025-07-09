'use client';

import { ArticleType } from "@/types/article";
import Link from "next/link";
import Image from 'next/image';

interface ArticleGridProps {
  articles: ArticleType[];
  className?: string;
}

function truncateText(text: string, maxWords: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
}

export function ArticleGrid({ articles, className }: Readonly<ArticleGridProps>) {
  if (!articles?.length) {
    return null;
  }

   return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {articles.map((article) => (
        <div key={article.slug} className="space-y-2">
          <h2 className="text-xl font-semibold hover:underline">
            <Link href={`/${article.slug}--${article._id}`}>
              <div className="relative w-full aspect-[5/4] rounded shadow-md overflow-hidden">
              <Image
                src={article.thumbnailUrl}
                alt={article.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            </Link>
            <Link href={`/${article.slug}--${article._id}`}>
              {article.title}
            </Link>
          </h2>
          <p className="text-gray-700">
            {truncateText(article.content, 30)}
          </p>
        </div>
      ))}
    </div>
  );
}