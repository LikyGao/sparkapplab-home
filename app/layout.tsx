import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SparkAppLab',
  description: '小さく便利なWebツールを作る個人開発ラボです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-white text-stone-800 antialiased">
        {children}
      </body>
    </html>
  )
}
