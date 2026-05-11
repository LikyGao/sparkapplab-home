import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact | SparkAppLab',
}

export default function ContactPage() {
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
          Contact
        </h1>
        <p className="text-[13px] text-stone-400 mb-12">お問い合わせ</p>

        <div className="bg-white border border-stone-200 rounded-2xl p-8">
          <p className="text-[14px] text-stone-500 leading-7 mb-6">
            SparkAppLab に関するお問い合わせは、以下のメールアドレスまでお願いいたします。
          </p>
          <a
            href="mailto:contact@sparkapplab.com"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-stone-800 hover:text-stone-600 transition-colors border-b border-stone-300 pb-0.5"
          >
            contact@sparkapplab.com
          </a>
          <p className="text-[13px] text-stone-400 leading-6 mt-8">
            ご返信にお時間をいただく場合があります。あらかじめご了承ください。
          </p>
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
