import Link from "next/link";
import { getAllPosts } from "@/lib/sanity.client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">황준걸의 블로그</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug.current}>
            <CardHeader>
              <CardTitle>
                <Link
                  href={`/posts/${post.slug.current}`}
                  className="hover:text-blue-600"
                >
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {new Date(post.date).toLocaleDateString()} | By {post.author}
              </p>
              <p className="text-sm">{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
