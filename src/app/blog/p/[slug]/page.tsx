import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  // Read the MDX file and parse frontmatter
  const filePath = path.join(process.cwd(), 'src/app/content', `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(fileContent)
  
  return (
    <article className="w-full max-w-4xl mx-auto p-6">
      {/* Optional: Display metadata in a nice header */}
      <header className="mb-8 pb-6 border-b border-border">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        {data.description && (
          <p className="text-xl text-muted-foreground mb-4">{data.description}</p>
        )}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {data.date && (
            <time>{new Date(data.date).toLocaleDateString()}</time>
          )}
          {data.readingTime && <span>{data.readingTime}</span>}
          {data.author && <span>by {data.author}</span>}
        </div>
        {data.tags && data.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {data.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      {/* Render the MDX content without frontmatter */}
      <div className="mdx-content">
        <MDXRemote source={content} />
      </div>
    </article>
  )
}

export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/app/content')
  
  try {
    const files = fs.readdirSync(contentDir)
    const mdxFiles = files.filter(file => file.endsWith('.mdx'))
    
    return mdxFiles.map(file => ({
      slug: file.replace('.mdx', '')
    }))
  } catch (error) {
    console.error('Error reading content directory:', error)
    return []
  }
}

export const dynamicParams = false