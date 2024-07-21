import { Metadata } from "next";
import PostLayout from "@/components/layout/PostLayout";
import { getPostBySlug } from "@/lib/sanity.client";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <PostLayout post={post}>
      {/* Post content will be rendered here */}
    </PostLayout>
  );
}
