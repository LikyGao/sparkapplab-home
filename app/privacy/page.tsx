import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | SparkAppLab',
}

const sections = [
  {
    title: '本サイトについて',
    body: `SparkAppLab（sparkapplab.com）は、個人が運営する Web ツール公開サイトです。本プライバシーポリシーは、当サイトおよびサブドメイン上で公開するサービスにおける情報の取り扱いについて説明します。`,
  },
  {
    title: 'アクセス解析・広告について',
    body: `当サイトでは、アクセス状況の把握のため Google Analytics 等のアクセス解析ツールを利用する場合があります。また、第三者配信の広告サービス（Google AdSense 等）を利用する場合があります。広告配信事業者は、ユーザーの興味に応じた広告を表示するために Cookie を使用することがあります。収集される情報は匿名であり、個人を特定するものではありません。`,
  },
  {
    title: 'Cookie について',
    body: `当サイトおよびサービスは、利便性向上・広告配信・アクセス解析のために Cookie を使用する場合があります。ブラウザの設定から Cookie を無効にすることができますが、一部機能が利用できなくなる場合があります。`,
  },
  {
    title: '外部リンクについて',
    body: `当サイトには外部サービスへのリンクが含まれる場合があります。リンク先のプライバシーポリシーについては、各サービスの規定をご確認ください。当サイトはリンク先の内容について責任を負いません。`,
  },
  {
    title: 'お問い合わせ',
    body: `プライバシーに関するお問い合わせは contact@sparkapplab.com までご連絡ください。`,
  },
  {
    title: '改定について',
    body: `本ポリシーは必要に応じて予告なく改定することがあります。最新の内容はこのページでご確認ください。`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">

      {/* ── Header ── */}
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold tracking-tight text-stone-800 hover:text-stone-600 transition-colors">
            SparkAppLab
          </Link>
          <nav className="flex items-center gap-5 text-[13px] text-stone-400">
            <Link href="/privacy" className="hover:text-stone-600 transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-stone-600 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-14 w-full">
        <Link href="/" className="inline-flex items-center gap-1 text-[12px] text-stone-400 hover:text-stone-600 transition-colors mb-10">
          ← SparkAppLab
        </Link>

        <h1 className="text-[28px] font-bold text-stone-900 tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-[13px] text-stone-400 mb-12">
          最終更新日：{new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-[15px] font-semibold text-stone-800 mb-3">
                {s.title}
              </h2>
              <p className="text-[14px] text-stone-500 leading-7">
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-stone-200 bg-white mt-12">
        <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[12px] text-stone-400">
            © {new Date().getFullYear()} SparkAppLab
          </span>
          <nav className="flex items-center gap-5 text-[12px] text-stone-400">
            <Link href="/privacy" className="hover:text-stone-600 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-stone-600 transition-colors">Contact</Link>
          </nav>
        </div>
      </footer>

    </div>
  )
}
