import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-6 mt-8 first:mt-0">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-semibold mb-4 mt-8">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mb-3 mt-6">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-semibold mb-2 mt-4">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic">{children}</em>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-6 list-decimal">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="mb-1">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 my-4 italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-accent px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  a: ({ children, href }) => (
    <a href={href} className="text-primary hover:underline">
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="table-wrapper">
      <table className="w-full border-collapse mb-6 text-sm border border-border">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="p-3 text-left bg-muted font-semibold text-muted-foreground uppercase text-xs tracking-wider border-b-2 border-border">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="p-3 text-left border-b border-border">
      {children}
    </td>
  ),
  thead: ({ children }) => (
    <thead>{children}</thead>
  ),
  tbody: ({ children }) => (
    <tbody className="[&_tr:hover]:bg-muted/50 [&_tr:last-child_td]:border-b-0">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr>{children}</tr>
  ),
  hr: () => <hr className="border-border my-8" />,
}

export function useMDXComponents(): MDXComponents {
  return components
}