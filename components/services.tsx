import Link from "next/link"
import { Home, TrendingUp, RefreshCcw, Building2, ArrowRight } from "lucide-react"

const audiences = [
  {
    icon: Home,
    title: "First-Time Homebuyers",
    pain: "Feeling overwhelmed by the mortgage process?",
    solution: "I break it down step by step, explain your options clearly, and help you explore programs often available to first-time buyers.",
    cta: "Learn How to Get Started",
    href: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Move-Up Buyers",
    pain: "Ready for more space but unsure how to time the move?",
    solution: "I help you evaluate your current equity position and coordinate your purchase so you can move forward with confidence.",
    cta: "Explore Your Options",
    href: "/contact",
  },
  {
    icon: RefreshCcw,
    title: "Homeowners Refinancing",
    pain: "Wondering if refinancing may make sense for you?",
    solution: "I review your situation and help you understand your potential options — based on your goals and subject to qualification.",
    cta: "See If Refinancing May Fit",
    href: "/contact",
  },
  {
    icon: Building2,
    title: "Real Estate Investors",
    pain: "Looking for financing options for investment properties?",
    solution: "I can help you explore investor-focused loan programs, including DSCR options, based on your goals and qualifications.",
    cta: "Explore Investor Options",
    href: "/contact",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-card" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Who I Help
          </p>
          <h2 id="services-heading" className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Mortgage Guidance for Every Stage
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Whether you're buying your first home or building an investment portfolio, I provide the clarity and support you need.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {audiences.map((audience, index) => (
            <article
              key={index}
              className="group relative bg-background rounded-lg p-8 border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary mb-5">
                <audience.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {audience.title}
              </h3>
              {/* Pain point */}
              <p className="mt-3 text-foreground font-medium">
                {audience.pain}
              </p>
              {/* Solution */}
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {audience.solution}
              </p>
              {/* Soft CTA */}
              <Link
                href={audience.href}
                className="mt-5 inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                {audience.cta}
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
