import { createClient } from "next-sanity";
import { cache } from "react";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-02-20",
  useCdn: process.env.NODE_ENV === "production",
});

export const getPostBySlug = cache(async (slug: string) => {
  console.log(`Fetching post with slug: ${slug}`);
  try {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
      title,
      slug,
      content,
      author,
      date,
      excerpt,
      mainImage
    }`,
      { slug }
    );
    console.log("Fetched post:", post);
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
});

export const getAllPosts = cache(async () => {
  console.log("Fetching all posts");
  try {
    const posts = await client.fetch(`*[_type == "post"] | order(date desc){
      title,
      slug,
      excerpt,
      date,
      author
    }`);
    console.log("Fetched posts:", posts);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
});
