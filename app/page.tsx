import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const isMothersDay = month === 5; // Anneler Günü dönemine özel içerik

  const specialContent = isMothersDay
    ? {
        title: "Anneler Günü İçin Özel Sağlık Poliçesi",
        subtitle: "Sevdiklerinize hediye check-up'lı, sadeliğiyle fark yaratan bir sağlık sigortası.",
        cta: "Teklif Al"
      }
    : {
        title: "Geleceğinizi Koruyun",
        subtitle: "rem. ile sigorta artık daha anlaşılır, daha hızlı ve daha güvenilir.",
        cta: "Atlas'ı Tanıyın"
      };

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/kling_20260427_作品_cinematic__5413_0.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,85,255,0.35),_transparent_40%),linear-gradient(180deg,_rgba(0,0,0,0.65),_rgba(0,0,0,0.9))]" />

      <div className="relative z-10 flex min-h-screen flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center px-6 py-16 lg:px-20">
          <p className="text-sm uppercase tracking-[0.4em] text-sky-300 mb-5">Maskotumuzla tanışın</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
            Merhaba, ben <span className="text-sky-400">Atlas.</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-slate-300 mb-10">
            Biraz sıradışı, biraz bilge, tamamen senin yanında. Sigorta karmaşık olmak zorunda değil; Atlas, en doğru çözüme yol gösterir.
          </p>
          <Link
            href="/atlas"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
          >
            Atlas'ı Daha Yakından Tanı
          </Link>
        </div>

        <div className="relative w-full md:w-1/2 flex items-center justify-center px-6 pb-14 md:pb-0">
          <Link href="/atlas" className="group relative inline-flex items-center justify-center">
            <div className="absolute inset-0 rounded-[2rem] bg-sky-500/10 blur-3xl transition duration-500 group-hover:scale-105" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_-40px_rgba(56,189,248,0.75)] backdrop-blur-xl">
              <Image
                src="/atlas.svg"
                alt="Atlas Mascot"
                width={360}
                height={420}
                priority
                className="relative h-auto w-full min-w-[220px] animate-bounce-slow"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
