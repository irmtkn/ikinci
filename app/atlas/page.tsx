import Link from "next/link";

export default function AtlasPage() {
  return (
    <main className="min-h-screen bg-[#060b1d] text-white px-6 py-12 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sky-300 hover:text-white mb-8"
        >
          ← Ana sayfaya geri dön
        </Link>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_-40px_rgba(56,189,248,0.35)] backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300 mb-4">Atlas'ın Hikayesi</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Atlas, rem. Sigorta'nın yeni yüzü</h1>
          <p className="text-slate-300 leading-8 text-lg md:text-xl">
            Atlas, sigortayı basit, güvenilir ve insan odaklı hale getirmek için buradayız. Her adımında yanında olmak için tasarlandı.
          </p>
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-slate-950/20">
            <div className="mb-4 text-sky-300 text-sm font-semibold uppercase tracking-[0.3em]">
              01
            </div>
            <h2 className="text-2xl font-semibold mb-3">💧 Nereden geldi bu damla?</h2>
            <p className="text-slate-300 leading-8">
              Atlas, bir sabah Karadeniz'in üzerinde yüzen küçük bir buluttan düştü. Düşerken hiç paniklemedi. Çünkü düşmenin de bir sonu olduğunu, yere değince bir şeyler başlayacağını biliyordu. Zaten sigorta da tam olarak bu değil mi?
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-slate-950/20">
            <div className="mb-4 text-sky-300 text-sm font-semibold uppercase tracking-[0.3em]">
              02
            </div>
            <h2 className="text-2xl font-semibold mb-3">📋 Nasıl sigorta uzmanı oldu?</h2>
            <p className="text-slate-300 leading-8 mb-4">
              Yıllar boyunca insanların "keşke sigortam olsaydı" dediğini duydu. Arabanın camı çatlıyor, sel bodrum katı basıyor, uçak gidiyor ama bagaj gelmiyor. Atlas bu saçmalıklara bir son vermek için kolları sıvadı. Tamam, kolları yok ama ellerini sıvadı.
            </p>
            <blockquote className="rounded-2xl border-l-4 border-sky-400 bg-white/5 p-5 text-slate-200">
              "Sigorta karmaşık olmak zorunda değil. Ben varken zaten değil."<br />
              — Atlas, rem. Sigorta
            </blockquote>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-slate-950/20">
            <div className="mb-4 text-sky-300 text-sm font-semibold uppercase tracking-[0.3em]">
              03
            </div>
            <h2 className="text-2xl font-semibold mb-3">🎯 Ne yapar tam olarak?</h2>
            <p className="text-slate-300 leading-8">
              Atlas, sana en doğru soruyu sorar. Hangi sigorta, ne kadar, ne zaman — bunları dakikalar içinde netleştirir. Korkutucu sözleşmeler yerine sade bir dil, uzun bekleme süreleri yerine anlık cevaplar. Çünkü hayat zaten yeterince karmaşık.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-slate-950/20">
            <div className="mb-4 text-sky-300 text-sm font-semibold uppercase tracking-[0.3em]">
              04
            </div>
            <h2 className="text-2xl font-semibold mb-3">🌊 Neden damla?</h2>
            <p className="text-slate-300 leading-8">
              Çünkü su, en sert kayanın bile içinden geçer. Yolunu bulur, uyum sağlar, asla vazgeçmez. Atlas da böyle — hangi sigorta ihtiyacın olursa olsun, en doğru çözümü bulana kadar durmaz. Biraz ıslatabilir ama niyeti iyidir.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
