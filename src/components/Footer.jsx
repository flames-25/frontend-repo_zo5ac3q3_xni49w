export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-black tracking-tight text-2xl">OTH<span className="-ml-1">_</span></div>
            <p className="mt-3 text-black/60 max-w-sm">
              OTH_ ontwerpt omgevingen die helder, warm en toekomstbestendig zijn. We werken in teams van architecten, interieurarchitecten en onderzoekers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-1 text-black/70">
              <li>Amsterdam & Den Haag</li>
              <li><a className="hover:text-black" href="mailto:info@oth.nl">info@oth.nl</a></li>
              <li><a className="hover:text-black" href="tel:+31000000000">+31 (0) 00 000 00 00</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Volg</h4>
            <ul className="space-y-1 text-black/70">
              <li><a className="hover:text-black" href="#">Instagram</a></li>
              <li><a className="hover:text-black" href="#">LinkedIn</a></li>
              <li><a className="hover:text-black" href="#">Nieuwsbrief</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-black/50">© {new Date().getFullYear()} OTH_ – Alle rechten voorbehouden.</div>
      </div>
    </footer>
  )
}
