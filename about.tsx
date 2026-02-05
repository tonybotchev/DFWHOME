import Link from "next/link"
import { MapPin, UserCheck, Zap, Heart, ArrowRight } from "lucide-react"
import { brand } from "@/lib/brand"

const reasons = [
  {
    icon: MapPin,
    title: `Local ${brand.serviceAreas.primary} Presence`,
    description: `I live and work in ${brand.serviceAreas.primary}, ${brand.serviceAreas.state}. I know these ${brand.serviceAreas.region} neighborhoods, understand the market dynamics, and am invested in our community.`,
  },
  {
    icon: UserCheck,
    title: "Hands-On Guidance",
    description: "You work directly with me from start to finish. No hand-offs to assistants, no getting lost in a corporate system.",
  },
  {
    icon: Zap,
    title: "Speed & Transparency",
    description: "Clear timelines, proactive updates, and fast responses. You'll always know where you stand in the process.",
  },
  {
    icon: Heart,
    title: "Long-Term Relationship",
    description: "I'm here for your next home, your refinance, your kids' first homes. This isn't a transaction—it's a partnership.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Why Work With {brand.advisor.name.split(" ")[0]}
          </p>
          <h2 id="about-heading" className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            {brand.company.tagline} in {brand.serviceAreas.primary}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            With over 15 years of experience, I've helped hundreds of {brand.serviceAreas.region} families achieve their homeownership dreams in {brand.serviceAreas.cities.slice(0, 4).join(", ")}, and beyond.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {reasons.map((reason, index) => (
            <article key={index} className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <reason.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground">
            {brand.advisor.name}, NMLS #{brand.advisor.nmls}
            <span className="text-muted-foreground">|</span>
            {brand.advisor.license}
          </p>
          <Link 
            href="/about" 
            className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            Learn more about {brand.advisor.name.split(" ")[0]}
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
