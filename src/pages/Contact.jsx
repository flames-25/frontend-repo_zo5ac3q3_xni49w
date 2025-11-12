export default function Contact() {
  return (
    <main className="pt-24">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-semibold">Contact</h1>
        <p className="mt-4 text-black/70 max-w-prose">Neem contact op met OTH_ voor nieuwe projecten, pers en samenwerkingen.</p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-black/10" placeholder="Naam" />
            <input className="px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-black/10" placeholder="E-mail" type="email" />
          </div>
          <input className="px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-black/10" placeholder="Onderwerp" />
          <textarea rows="6" className="px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-black/10" placeholder="Bericht" />
          <button className="justify-self-start px-5 py-2.5 rounded-full bg-black text-white hover:bg-black/90 transition-colors">Verstuur</button>
        </form>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-black/10 bg-white">
            <h4 className="font-semibold">Amsterdam</h4>
            <p className="text-black/70">Kantooradres, 1000 AA</p>
          </div>
          <div className="p-6 rounded-2xl border border-black/10 bg-white">
            <h4 className="font-semibold">Den Haag</h4>
            <p className="text-black/70">Kantooradres, 2500 AA</p>
          </div>
        </div>
      </section>
    </main>
  )
}
