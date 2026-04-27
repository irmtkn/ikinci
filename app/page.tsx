import Image from "next/image";

export default function Home() {
  // Basit özel gün kontrolü - gerçekte daha sofistike olabilir
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const isMothersDay = (month === 5 && day >= 1 && day <= 31); // Basitleştirilmiş

  const specialContent = isMothersDay ? {
    title: "Anneler Günü İçin Özel Sağlık Poliçesi",
    subtitle: "Sevdiklerinizi koruyun, hediye check-up'lı sağlık sigortası ile.",
    cta: "Şimdi Teklif Al"
  } : {
    title: "Geleceğinizi Koruyun",
    subtitle: "Güvenilir sigorta çözümleriyle yanınızdayız.",
    cta: "İletişime Geçin"
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Placeholder video */}
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {specialContent.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {specialContent.subtitle}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors">
            {specialContent.cta}
          </button>
        </div>

        {/* Right Side - Scrolling Atlas */}
        <div className="w-1/3 relative">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <Image
              src="/atlas.svg"
              alt="Atlas Mascot"
              width={300}
              height={300}
              className="animate-bounce"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
