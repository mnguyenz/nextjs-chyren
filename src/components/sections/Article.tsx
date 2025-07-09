'use client';

import { ArticleType } from "@/types/article";
import Link from "next/link";
import Image from 'next/image';

interface ArticleProps {
  articles: ArticleType[];
  className?: string;
}

function truncateText(text: string, maxWords: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
}

export function Article({ articles, className }: Readonly<ArticleProps>) {
  if (!articles?.length) {
    return null;
  }

   return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {articles.map((article) => (
        <div key={article.slug} className="space-y-2">
          <h2 className="text-xl font-semibold hover:underline">
            <Link href={`/articles/${article.slug}`}>
              <div className="relative w-full h-56 rounded shadow-md overflow-hidden">
              <Image
                src={article.thumbnailUrl}
                alt={article.title}
                width={600}
                height={400}
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            </Link>
            <Link href={`/articles/${article.slug}`}>
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