'use client';

import { ArticleType } from "@/types/article";
import Image from 'next/image';

interface ArticleProps {
  article: ArticleType;
  className?: string;
}

export function SingleArticle({ article, className }: Readonly<ArticleProps>) {
  if (!article) {
    return null;
  }

  return (
    <article className={`space-y-6 ${className}`}>
      {article.thumbnailUrl && (
        <div className="w-full rounded shadow-md overflow-hidden">
          <Image
            src={article.thumbnailUrl}
            alt={article.title}
            width={800}
            height={0}
            className="w-full h-auto"
          />
        </div>
      )}

      <h1 className="text-3xl font-bold">{article.title}</h1>

      <div className="text-gray-800 leading-relaxed whitespace-pre-line">
        {article.content}
      </div>
    </article>
  );
}