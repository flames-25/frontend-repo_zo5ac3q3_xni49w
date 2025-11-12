export default function ProjectGrid({ title = 'Projecten' }) {
  const projects = [
    {
      title: 'Provinciehuis Zuid-Holland',
      image: 'https://oth.nl/wp-content/uploads/2025/04/PZH_C_19.jpg',
      tags: ['renovatie', 'interieur'],
    },
    {
      title: 'Oudemanhuispoort UvA',
      image: 'https://oth.nl/wp-content/uploads/2025/06/Oudemanhuispoort-UvA.png',
      tags: ['educatie', 'transformatie'],
    },
    {
      title: 'ARTIS',
      image: 'https://oth.nl/wp-content/uploads/2025/09/Artis_14.jpg',
      tags: ['publiek', 'landschap'],
    },
    {
      title: 'Leeuwarden – Interieur',
      image: 'https://oth.nl/wp-content/uploads/2024/07/03_LWD_IMG_8373-website.jpg',
      tags: ['interieur'],
    },
    {
      title: 'Randstad Experience',
      image: 'https://oth.nl/wp-content/uploads/2024/06/Randstad-Experience_03.jpg',
      tags: ['werkplek', 'experience'],
    },
    {
      title: 'Rijswijk – Woning',
      image: 'https://oth.nl/wp-content/uploads/2020/05/JFM_rijswijk_15.jpg',
      tags: ['woning'],
    },
    {
      title: 'Kantoor Rotterdam',
      image: 'https://oth.nl/wp-content/uploads/2021/05/RVKZ_16.jpeg',
      tags: ['kantoor'],
    },
    {
      title: 'Pakhuis',
      image: 'https://oth.nl/wp-content/uploads/2021/05/OT1802-PH-0733.jpeg',
      tags: ['transformatie'],
    },
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">{title}</h2>
          <a href="/projecten" className="text-sm text-black/60 hover:text-black">Alle projecten →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((p, i) => (
            <a key={i} href="#" className="group block rounded-2xl overflow-hidden border border-black/10 bg-white">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-medium text-lg">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/5 text-black/70">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
