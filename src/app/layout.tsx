import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BookEssence - Summarize Classic Literature',
  description: 'Transform complex classic books into simple, essence-preserving summaries. Learn faster without losing the beauty of literature.',
  keywords: ['book summary', 'classic literature', 'reading guide', 'simplify books'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
