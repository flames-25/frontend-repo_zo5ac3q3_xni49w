import { useLocation, useParams, Link } from 'react-router-dom'

// Fallback project data (used if page is loaded directly)
const fallbackProjects = [
  {
    slug: 'provinciehuis-zh',
    title: 'Provinciehuis Zuid-Holland',
    image: 'https://oth.nl/wp-content/uploads/2025/04/PZH_C_19.jpg',
    description:
      'Een zorgvuldige transformatie van een icoon waarbij licht, routing en materialiteit het dagelijks gebruik versterken.',
    meta: { locatie: 'Den Haag', jaar: '2024', typologie: 'Publiek / Renovatie' },
  },
  {
    slug: 'oudemanhuispoort-uva',
    title: 'Oudemanhuispoort UvA',
    image: 'https://oth.nl/wp-content/uploads/2025/06/Oudemanhuispoort-UvA.png',
    description:
      'Een nieuwe interpretatie van academische ruimte die verleden en toekomst zorgvuldig verbindt.',
    meta: { locatie: 'Amsterdam', jaar: '2025', typologie: 'Onderwijs' },
  },
  {
    slug: 'artis-ontwikkelgebied',
    title: 'ARTIS Ontwikkelgebied',
    image: 'https://oth.nl/wp-content/uploads/2025/09/Artis_14.jpg',
    description:
      'Architectuur en landschap vloeien samen in een ensemble van paviljoens en routes.',
    meta: { locatie: 'Amsterdam', jaar: '2025', typologie: 'Cultuur / Publiek domein' },
  },
  {
    slug: 'randstad-experience',
    title: 'Randstad Experience',
    image: 'https://oth.nl/wp-content/uploads/2024/06/Randstad-Experience_03.jpg',
    description:
      'Een workspace die merkidentiteit tastbaar maakt via materiaal, kleur en ritme.',
    meta: { locatie: 'Diemen', jaar: '2024', typologie: 'Interieur / Werk' },
  },
  {
    slug: 'leeuwarden-wonen',
    title: 'Wonen Leeuwarden',
    image: 'https://oth.nl/wp-content/uploads/2024/07/03_LWD_IMG_8373-website.jpg',
    description:
      'Slimme stapeling en zorgvuldige gevelopbouw zorgen voor een rustige woonkwaliteit.',
    meta: { locatie: 'Leeuwarden', jaar: '2024', typologie: 'Wonen' },
  },
  {
    slug: 'rijswijk-ontwerp',
    title: 'Rijswijk Ontwerp',
    image: 'https://oth.nl/wp-content/uploads/2020/05/JFM_rijswijk_15.jpg',
    description:
      'Heldere structuur, fijne materialisering en groen als drager van het plan.',
    meta: { locatie: 'Rijswijk', jaar: '2020', typologie: 'Stedelijk / Mixed-use' },
  },
  {
    slug: 'zorgcampus-rvkz',
    title: 'Zorgcampus RVKZ',
    image: 'https://oth.nl/wp-content/uploads/2021/05/RVKZ_16.jpeg',
    description:
      'Een warme, menselijke omgeving met aandacht voor oriëntatie en daglicht.',
    meta: { locatie: 'Rotterdam', jaar: '2021', typologie: 'Zorg' },
  },
  {
    slug: 'living-concept',
    title: 'Living Concept',
    image: 'https://oth.nl/wp-content/uploads/2023/03/living_01_V3.jpg',
    description:
      'Interieurconcept waarin maatwerk en tactiliteit centraal staan.',
    meta: { locatie: 'Amsterdam', jaar: '2023', typologie: 'Interieur' },
  },
  {
    slug: 'waterrecreatie-lwr',
    title: 'Waterrecreatie LWR',
    image: 'https://oth.nl/wp-content/uploads/2023/10/LWR2205_09.jpg',
    description:
      'Een lichte, open structuur die de relatie met het water maximaliseert.',
    meta: { locatie: 'Friesland', jaar: '2023', typologie: 'Recreatie' },
  },
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const location = useLocation()
  const stateProject = location.state && location.state.project

  const project = stateProject || fallbackProjects.find((p) => p.slug === slug)

  return (
    <main className="pt-24">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {!project ? (
          <div className="py-24 text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold">Project niet gevonden</h1>
            <p className="mt-3 text-black/60">Het opgevraagde project bestaat niet of is verplaatst.</p>
            <div className="mt-8">
              <Link to="/projecten" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 hover:bg-black/5 transition">Terug naar projecten</Link>
            </div>
          </div>
        ) : (
          <div className="py-8 sm:py-12">
            <div className="mb-8 sm:mb-12 flex items-start justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">{project.title}</h1>
                <p className="mt-3 text-black/60 max-w-2xl">{project.description}</p>
              </div>
              <div className="shrink-0 hidden sm:block">
                <Link to="/projecten" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 hover:bg-black/5 transition">Alle projecten</Link>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-black/10 p-6">
                <div className="text-black/60 text-sm">Locatie</div>
                <div className="font-medium">{project.meta?.locatie || '—'}</div>
              </div>
              <div className="rounded-2xl border border-black/10 p-6">
                <div className="text-black/60 text-sm">Jaar</div>
                <div className="font-medium">{project.meta?.jaar || '—'}</div>
              </div>
              <div className="rounded-2xl border border-black/10 p-6">
                <div className="text-black/60 text-sm">Typologie</div>
                <div className="font-medium">{project.meta?.typologie || '—'}</div>
              </div>
            </div>

            <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <img src={project.image} alt="Detail 1" className="rounded-2xl border border-black/10" />
                <img src={project.image} alt="Detail 2" className="rounded-2xl border border-black/10" />
              </div>
              <img src={project.image} alt="Overzicht" className="rounded-2xl border border-black/10" />
            </div>

            <div className="mt-12 sm:mt-16 flex items-center justify-between">
              <Link to="/projecten" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 hover:bg-black/5 transition">← Terug</Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 hover:bg-black/90 transition">Neem contact op</Link>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
