export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[0.95]">
              Ontwerpt ruimten die langer meegaan dan trends.
            </h1>
            <p className="mt-6 text-lg text-black/70 max-w-prose">
              OTH_ is een architectenbureau uit Nederland. We combineren
              vakmanschap met onderzoek en technologie om gebouwen en interieurs te
              ontwerpen die stil, helder en duurzaam zijn.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/projecten" className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-black/90 transition-colors">
                Bekijk projecten
              </a>
              <a href="/bureau" className="px-5 py-2.5 rounded-full border border-black/15 hover:border-black/30">
                Over ons
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                'https://oth.nl/wp-content/uploads/2025/04/PZH_C_19.jpg',
                'https://oth.nl/wp-content/uploads/2025/04/PZH_C_18.jpg',
                'https://oth.nl/wp-content/uploads/2025/06/Oudemanhuispoort-UvA.png',
                'https://oth.nl/wp-content/uploads/2025/09/Artis_14.jpg',
                'https://oth.nl/wp-content/uploads/2024/07/03_LWD_IMG_8373-website.jpg',
                'https://oth.nl/wp-content/uploads/2024/06/Randstad-Experience_03.jpg',
                'https://oth.nl/wp-content/uploads/2023/10/LWR2205_09.jpg',
                'https://oth.nl/wp-content/uploads/2023/03/living_01_V3.jpg',
                'https://oth.nl/wp-content/uploads/2020/05/JFM_rijswijk_15.jpg',
              ].map((src, i) => (
                <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={src}
                    alt="Project visual"
                    className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700"
                    loading={i > 2 ? 'lazy' : 'eager'}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
