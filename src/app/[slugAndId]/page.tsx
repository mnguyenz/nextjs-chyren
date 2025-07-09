import { SingleArticle } from '@/components/sections/SingleArticle';
import { revalidateOptions } from '@/lib/common';
import { client } from '@/sanity/client';
import { SINGLE_ARTICLE_QUERY } from '@/sanity/queries/articles';
import { ArticleType } from '@/types/article';
import { notFound } from 'next/navigation';

export default async function Page(
  props: {
    params: Promise<{ slugAndId: string }>
  }
) {
  const params = await props.params;
  const id = params.slugAndId.split('--')[1];
  if (!id) return notFound();

  const article = await client.fetch<ArticleType>(
    SINGLE_ARTICLE_QUERY,
    { id },
    revalidateOptions
  );
  if (!article) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-8 space-y-6">
      <SingleArticle article={article} />
    </main>
  );
}