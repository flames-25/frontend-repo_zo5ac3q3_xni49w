export default function Nieuws() {
  const posts = [
    {
      title: 'Winnaar selectie – Provinciehuis Zuid-Holland',
      excerpt: 'Ons voorstel voor de renovatie van het Provinciehuis is geselecteerd. We kijken uit naar de volgende fase.',
      image: 'https://oth.nl/wp-content/uploads/2025/04/PZH_C_18.jpg',
      date: '12 september 2025',
    },
    {
      title: 'Publicatie – Oudemanhuispoort UvA',
      excerpt: 'Het project is opgenomen in een internationale publicatie over transformatie van onderwijsgebouwen.',
      image: 'https://oth.nl/wp-content/uploads/2025/06/Oudemanhuispoort-UvA.png',
      date: '30 juni 2025',
    },
    {
      title: 'Opening – Randstad Experience',
      excerpt: 'De nieuwe merkervaring voor Randstad is officieel geopend in Amsterdam.',
      image: 'https://oth.nl/wp-content/uploads/2024/06/Randstad-Experience_03.jpg',
      date: '3 juli 2024',
    },
  ]

  return (
    <main className="pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold">Nieuws</h1>
          <p className="mt-3 text-black/60 max-w-2xl">Updates uit het bureau: selecties, publicaties en mijlpalen.</p>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="rounded-2xl overflow-hidden border border-black/10 bg-white flex flex-col">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs text-black/50">{p.date}</div>
                <h3 className="mt-2 font-medium text-lg">{p.title}</h3>
                <p className="mt-2 text-black/70">{p.excerpt}</p>
                <a href="#" className="mt-4 text-sm text-black/70 hover:text-black">Lees meer →</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
