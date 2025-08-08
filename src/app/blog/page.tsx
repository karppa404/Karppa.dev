import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Desc from './desc.mdx'
import Image from 'next/image'
interface BlogPost {
  slug: string
  title: string
  description?: string
  date?: string
  tags?: string[]
  content: string
  thumbnail?: string 
}

// Get all blog posts with metadata
function getBlogPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), 'src/app/content')

  try {
    const files = fs.readdirSync(contentDir)
    const mdxFiles = files.filter(file => file.endsWith('.mdx'))

    return mdxFiles.map(file => {
      const slug = file.replace('.mdx', '')
      const filePath = path.join(contentDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')

      const { data, content } = matter(fileContent)

      return {
        slug,
        title: data.title || slug.charAt(0).toUpperCase() + slug.slice(1),
        description: data.description || 'Click to read more...',
        date: data.date || null,
        tags: data.tags || [],
        thumbnail: data.thumbnail || null, // ✅ new
        content
      }
    }).sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return a.title.localeCompare(b.title)
    })
  } catch (error) {
    console.error('Error reading content directory:', error)
    return []
  }
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <>

      <div className="w-full">
        <Desc />
      </div>
      <div className="w-full max-w-7xl mx-auto p-2">

        {posts.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-muted-foreground text-lg">No blog posts found.</p>
            <p className="text-sm text-muted-foreground mt-2">
              Add some .mdx files to your content directory to get started.
            </p>
          </div>
        ) : (
          <div className="">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link
                  href={`/blog/p/${post.slug}`}
                  className="block p-6 rounded-lg transition-all duration-200 "
                >
                  <div className="flex flex-col space-y-3">
                    {/* ✅ Show thumbnail if available */}
                    {post.thumbnail && (
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        width={600}
                        height={400}
                        className=""
                      />
                    )}
                    <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    {post.date && (
                      <time className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    )}

                    <p className="text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-2">
                      <span className="text-primary font-medium group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  )
}