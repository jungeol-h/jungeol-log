import { FC, ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

interface PostLayoutProps {
  post: {
    title: string;
    date: string;
    author: string;
  };
  children: ReactNode;
}

const PostLayout: FC<PostLayoutProps> = ({ post, children }) => {
  return (
    <Card className="max-w-3xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
        <div className="text-sm text-muted-foreground">
          {format(new Date(post.date), "MMMM d, yyyy")} | By {post.author}
        </div>
      </CardHeader>
      <CardContent className="prose dark:prose-invert max-w-none">
        {children}
      </CardContent>
    </Card>
  );
};

export default PostLayout;
