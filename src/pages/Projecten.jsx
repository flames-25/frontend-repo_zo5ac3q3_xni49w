import { Link } from 'react-router-dom'

export default function Projecten() {
  const projects = [
    {
      slug: 'provinciehuis-zh',
      title: 'Provinciehuis Zuid-Holland',
      image: 'https://oth.nl/wp-content/uploads/2025/04/PZH_C_19.jpg',
    },
    {
      slug: 'oudemanhuispoort-uva',
      title: 'Oudemanhuispoort UvA',
      image: 'https://oth.nl/wp-content/uploads/2025/06/Oudemanhuispoort-UvA.png',
    },
    {
      slug: 'artis-ontwikkelgebied',
      title: 'ARTIS Ontwikkelgebied',
      image: 'https://oth.nl/wp-content/uploads/2025/09/Artis_14.jpg',
    },
    {
      slug: 'leeuwarden-interieur',
      title: 'Leeuwarden – Interieur',
      image: 'https://oth.nl/wp-content/uploads/2024/07/03_LWD_IMG_8373-website.jpg',
    },
    {
      slug: 'randstad-experience',
      title: 'Randstad Experience',
      image: 'https://oth.nl/wp-content/uploads/2024/06/Randstad-Experience_03.jpg',
    },
    {
      slug: 'rijswijk-ontwerp',
      title: 'Rijswijk – Woning',
      image: 'https://oth.nl/wp-content/uploads/2020/05/JFM_rijswijk_15.jpg',
    },
    {
      slug: 'zorgcampus-rvkz',
      title: 'Zorgcampus RVKZ',
      image: 'https://oth.nl/wp-content/uploads/2021/05/RVKZ_16.jpeg',
    },
    {
      slug: 'living-concept',
      title: 'Living Concept',
      image: 'https://oth.nl/wp-content/uploads/2023/03/living_01_V3.jpg',
    },
    {
      slug: 'waterrecreatie-lwr',
      title: 'Waterrecreatie LWR',
      image: 'https://oth.nl/wp-content/uploads/2023/10/LWR2205_09.jpg',
    },
  ]

  return (
    <main className="pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold">Projecten</h1>
          <p className="mt-3 text-black/60 max-w-2xl">Een selectie van werk in verschillende schaalniveaus – van interieur tot publiek domein.</p>
        </header>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projecten/${p.slug}`}
              state={{ project: p }}
              className="break-inside-avoid block rounded-2xl overflow-hidden border border-black/10 bg-white hover:shadow-sm transition"
            >
              <img src={p.image} alt={p.title} className="w-full h-auto object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-medium">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
