import { MetadataRoute } from 'next'

export const runtime = 'edge'

export async function GET(): Promise<Response> {
  // Get the last modified date of your content
  const lastModified = new Date().toISOString()

  // Base URL from environment variable or default
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://avirajkhare00.github.io'

  // Define your routes
  const routes = [
    '',
    '/blog',
    '/projects',
    '/about',
    // Add more routes as needed
  ]

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          (route) => `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${lastModified}</lastmod>
        </url>
      `
        )
        .join('')}
    </urlset>`

  // Return the sitemap XML with proper headers
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
