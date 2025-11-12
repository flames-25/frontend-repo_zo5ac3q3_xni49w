export default function Projecten() {
  const images = [
    'https://oth.nl/wp-content/uploads/2025/04/PZH_C_19.jpg',
    'https://oth.nl/wp-content/uploads/2025/04/PZH_C_18.jpg',
    'https://oth.nl/wp-content/uploads/2025/06/Oudemanhuispoort-UvA.png',
    'https://oth.nl/wp-content/uploads/2025/09/Artis_14.jpg',
    'https://oth.nl/wp-content/uploads/2024/07/03_LWD_IMG_8373-website.jpg',
    'https://oth.nl/wp-content/uploads/2024/06/Randstad-Experience_03.jpg',
    'https://oth.nl/wp-content/uploads/2023/10/LWR2205_09.jpg',
    'https://oth.nl/wp-content/uploads/2023/03/living_01_V3.jpg',
    'https://oth.nl/wp-content/uploads/2020/05/JFM_rijswijk_15.jpg',
    'https://oth.nl/wp-content/uploads/2021/05/RVKZ_16.jpeg',
    'https://oth.nl/wp-content/uploads/2021/05/OT1802-PH-0733.jpeg',
  ]

  return (
    <main className="pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold">Projecten</h1>
          <p className="mt-3 text-black/60 max-w-2xl">Een selectie van werk in verschillende schaalniveaus – van interieur tot publiek domein.</p>
        </header>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden border border-black/10 bg-white">
              <img src={src} alt="Project" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
