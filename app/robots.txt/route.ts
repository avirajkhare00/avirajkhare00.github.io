import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400 // revalidate every 24 hours
export const runtime = 'edge'

export async function GET(): Promise<Response> {
  // Base URL from environment variable or default
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://avirajkhare00.github.io'

  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

# Host
Host: ${baseUrl}

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
