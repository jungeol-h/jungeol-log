// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  // This will be replaced with actual data from Sanity later
  const posts = [
    { id: 1, title: "첫 번째 블로그 포스트", slug: "first-post" },
    { id: 2, title: "두 번째 블로그 포스트", slug: "second-post" },
    { id: 3, title: "세 번째 블로그 포스트", slug: "third-post" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">최근 포스트</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <Link
              href={`/posts/${post.slug}`}
              className="text-xl font-semibold hover:text-blue-600"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
