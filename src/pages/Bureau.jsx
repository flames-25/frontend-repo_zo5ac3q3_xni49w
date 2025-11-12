export default function Bureau() {
  return (
    <main className="pt-24">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-semibold">Bureau</h1>
        <div className="mt-6 prose prose-neutral max-w-none">
          <p>
            OTH_ is een onafhankelijk architectenbureau. We werken aan gebouwen, interieurs en publieke ruimten met een sterke focus op duurzaamheid en comfort. Onze ontwerpfilosofie is helder: maak ruimtes die vanzelfsprekend voelen en lang meegaan.
          </p>
          <p>
            Het bureau is georganiseerd in compacte teams met korte lijnen. We combineren ontwerp met materiaalonderzoek, energiestudies en digitale fabricage. Samen met opdrachtgevers en adviseurs zoeken we naar precieze oplossingen die zowel poëtisch als pragmatisch zijn.
          </p>
          <h3>Team & Cultuur</h3>
          <p>
            We investeren in kennisdeling en talentontwikkeling. Ons team bestaat uit architecten, interieurarchitecten en onderzoekers met verschillende achtergronden. We geloven in een open studio-cultuur waar schets, model en prototype elkaar versterken.
          </p>
        </div>
      </section>

      <section className="mt-16 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {['Menselijk','Duurzaam','Precisie'].map((k) => (
              <div key={k} className="p-6 rounded-2xl border border-black/10 bg-white">
                <h4 className="font-semibold text-lg">{k}</h4>
                <p className="mt-2 text-black/70">We benaderen elk project met aandacht voor context, materiaal en comfort. Elk detail draagt bij aan het geheel.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
