import { client } from "@/sanity/client";
import { HOMEPAGE_QUERY } from "@/sanity/queries/articles";
import { ArticleGrid } from "@/components/sections/ArticleGrid";
import { ArticleType } from "@/types/article";
import { revalidateOptions } from "@/lib/common";

export default async function Home() {
  const articles = await client.fetch<ArticleType[]>(HOMEPAGE_QUERY, {}, revalidateOptions);

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12">
      <section className="max-w-screen-xl mx-auto">
        <ArticleGrid articles={articles} />
      </section>
    </main>
  );
}
