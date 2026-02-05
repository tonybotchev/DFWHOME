import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { brand } from "@/lib/brand"

export function CTASection() {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-primary" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="cta-heading" className="font-serif text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Let's Talk About Your Goals
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
            No pressure, no obligation. Just a straightforward conversation about your situation and how I can help you move forward.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Talk to a Local Mortgage Advisor
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
