import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, MessageSquare, Settings } from "lucide-react"
import { brand } from "@/lib/brand"

const trustItems = [
  { icon: MapPin, text: `Local ${brand.serviceAreas.primary} Mortgage Advisor` },
  { icon: MessageSquare, text: "Clear Communication" },
  { icon: Clock, text: "Fast, Reliable Closings" },
  { icon: Settings, text: "Personalized Loan Strategies" },
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Primary H1 with Tony Botchev name and brand positioning */}
          <h1 id="hero-heading" className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            {brand.advisor.name} — {brand.company.tagline} in {brand.serviceAreas.primary} & {brand.serviceAreas.region}
          </h1>
          {/* NMLS prominently displayed with Tony's name - COMPLIANCE REQUIREMENT */}
          <p className="mt-4 text-base font-medium text-foreground">
            {brand.advisor.name}, NMLS #{brand.advisor.nmls}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
            Buying a home is one of the biggest decisions you'll make. I'm here to simplify the mortgage process, answer your questions honestly, and help you move forward with confidence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA - Texas Red */}
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/contact">
                Start My Pre-Approval
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            {/* Secondary CTA - Outline with Navy border */}
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent" asChild>
              <Link href="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-16 lg:mt-20 border-t border-border pt-10" role="list" aria-label="Why choose us">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <div key={index} role="listitem" className="flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
