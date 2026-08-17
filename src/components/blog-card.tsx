import { ChevronRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Article } from "@/lib/substack"

type BlogCardProps = {
  article: Article
}

export function BlogCard({ article }: BlogCardProps) {
  const date = new Date(article.publishedAt).toISOString().slice(0, 10)

  return (
    <Card className="blog-card" size="sm">
      <CardHeader className="blog-card-header">
        <time dateTime={article.publishedAt}>{date}</time>
        <CardTitle title={article.title}>{article.title}</CardTitle>
        <CardDescription>{article.description}</CardDescription>
      </CardHeader>
      <CardFooter className="blog-card-footer">
        <a
          aria-label={`Read ${article.title}`}
          className={cn(
            buttonVariants({ size: "icon-xs", variant: "outline" }),
            "blog-card-action"
          )}
          href={article.link}
          rel="noreferrer"
          target="_blank"
        >
          <ChevronRight aria-hidden="true" />
        </a>
      </CardFooter>
    </Card>
  )
}
