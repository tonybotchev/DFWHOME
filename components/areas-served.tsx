import Link from "next/link"
import { MapPin } from "lucide-react"

const areas = [
  { name: "Celina, TX", highlight: true },
  { name: "Prosper, TX", highlight: false },
  { name: "Frisco, TX", highlight: false },
  { name: "McKinney, TX", highlight: false },
  { name: "Anna, TX", highlight: false },
  { name: "Melissa, TX", highlight: false },
  { name: "Aubrey, TX", highlight: false },
]

export function AreasServed() {
  return (
    <section id="areas" className="py-20 lg:py-28 bg-secondary" aria-labelledby="areas-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Local Focus
          </p>
          <h2 id="areas-heading" className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Mortgage Services in Celina, Prosper, Frisco & North DFW
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Based in Celina, Texas, I provide mortgage services to qualified borrowers throughout the rapidly growing North Dallas corridor. Local knowledge allows me to guide homebuyers with greater insight across Collin and Denton counties.
          </p>
        </div>

        {/* 
          COMPLIANCE NOTE: City names are informational geographic indicators only.
          - Not clickable (no links to city-specific pages)
          - Do not imply city-specific loan programs or offers
          - Used for SEO and user clarity about service area coverage
        */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4" role="list" aria-label="Geographic service area indicators">
          {areas.map((area) => (
            <div
              key={area.name}
              role="listitem"
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 ${
                area.highlight
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground border border-border"
              }`}
            >
              <MapPin className={`h-4 w-4 ${area.highlight ? "text-primary-foreground" : "text-accent"}`} aria-hidden="true" />
              <span className="font-medium">{area.name}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don't see your city? I serve many other North Texas communities including Allen, Plano, Little Elm, and more.{" "}
          <Link href="/contact" className="text-accent hover:text-accent/80 transition-colors">
            Reach out to learn more
          </Link>.
        </p>
      </div>
    </section>
  )
}
