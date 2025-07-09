import { client } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/queries/articles";
import { Article } from "@/components/sections/Article";
import { ArticleType } from "@/types/article";

const options = { next: { revalidate: 30 } };

const HomePage = async () => {
  const posts = await client.fetch<ArticleType[]>(POSTS_QUERY, {}, options);

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12">
      <section className="max-w-screen-xl mx-auto">
        <Article articles={posts} />
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <HomePage />
  );
}
