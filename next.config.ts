// next.config.ts
import createMDX from '@next/mdx'

const withMDX = createMDX({

})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)
