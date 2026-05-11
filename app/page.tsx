import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">

      {/* ── Header ── */}
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-[15px] font-semibold tracking-tight text-stone-800">
            SparkAppLab
          </span>
          <nav className="flex items-center gap-5 text-[13px] text-stone-400">
            <Link href="/privacy" className="hover:text-stone-600 transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-stone-600 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-stone-400 mb-4">
            Personal Dev Lab
          </p>
          <h1 className="text-[36px] sm:text-[44px] font-bold tracking-tight text-stone-900 leading-tight mb-6">
            SparkAppLab
          </h1>
          <p className="text-[16px] text-stone-500 leading-8 max-w-xl">
            小さく便利なWebツールを作る個人開発ラボです。<br />
            日常や仕事の中で「ちょっと便利」と感じられるツールを、少しずつ公開していきます。
          </p>
        </section>

        {/* ── Products ── */}
        <section className="max-w-3xl mx-auto px-6 pb-24">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-stone-400 mb-6">
            公開中のツール
          </p>

          {/* 地道日语 card */}
          <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-[20px] font-bold text-stone-900 tracking-tight mb-1">
                  地道日語
                </h2>
                <p className="text-[12px] font-medium text-stone-400 tracking-wide">
                  Japanese Expression AI Assistant
                </p>
              </div>
              <span className="flex-shrink-0 inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-semibold text-emerald-600 tracking-wide">
                公開中
              </span>
            </div>

            <p className="text-[14px] text-stone-500 leading-7 mb-2">
              可自定义语气风格的日语翻译・润色 AI 助手。
            </p>
            <p className="text-[14px] text-stone-500 leading-7 mb-6">
              商务・同事・朋友・関西腔・熱血マンガなど、用途に合わせて自然な日本語表現を生成できます。
            </p>

            <a
              href="https://jphelper.sparkapplab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-stone-900 hover:bg-stone-700 text-white px-5 py-2.5 text-[13px] font-medium transition-colors"
            >
              地道日語を開く
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-70">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-stone-200 bg-white">
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
