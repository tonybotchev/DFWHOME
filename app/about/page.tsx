import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  MessageCircle, 
  MapPin, 
  Users, 
  Clock, 
  Shield,
  ArrowRight,
  Phone
} from "lucide-react"
import { brand } from "@/lib/brand"

export const metadata = {
  title: `About ${brand.advisor.name} | ${brand.company.name}`,
  description: `Meet ${brand.advisor.name}, ${brand.company.tagline.toLowerCase()} in ${brand.serviceAreas.primary}, ${brand.serviceAreas.state}. Since 2006, helping ${brand.serviceAreas.region} families achieve homeownership with clarity, education, and personalized service. NMLS #${brand.advisor.nmls}.`,
}

const values = [
  {
    icon: GraduationCap,
    title: "Education First",
    description: "I believe informed borrowers make better decisions. Every conversation starts with understanding your goals and explaining your options in plain language.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "No jargon, no surprises. I keep you updated at every step and am always available to answer your questions—whether it's your first call or your fiftieth.",
  },
  {
    icon: Clock,
    title: "Responsive Service",
    description: "Time matters in real estate. I pride myself on fast responses, proactive updates, and staying ahead of potential issues before they become problems.",
  },
  {
    icon: Shield,
    title: "Honest Guidance",
    description: "My job is to find the right loan for your situation, not to push a product. Sometimes that means recommending you wait, save more, or explore other options.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                  About {brand.advisor.name}
                </p>
                <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
                  {brand.company.tagline}
                </h1>
                {/* NMLS prominently displayed with Tony's name - COMPLIANCE REQUIREMENT */}
                <p className="mt-3 text-base font-medium text-foreground">
                  {brand.advisor.name}, NMLS #{brand.advisor.nmls}
                </p>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  For nearly two decades, I've helped families across North Dallas navigate 
                  the mortgage process with confidence. My mission is simple: make home 
                  financing clear, accessible, and stress-free.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Whether you're buying your first home, upgrading to accommodate a growing 
                  family, or building an investment portfolio, I'm here to guide you every 
                  step of the way.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="text-sm text-muted-foreground">
                    {brand.advisor.license}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-muted overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center p-8">
                      <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Professional Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                Experience & Approach
              </p>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                Putting Clients First Since 2006
              </h2>
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I entered the mortgage industry in 2006, right before one of the most 
                  challenging periods in real estate history. Those early years taught me 
                  invaluable lessons about integrity, transparency, and the importance of 
                  doing right by clients—even when it's not the easy path.
                </p>
                <p>
                  Over the years, I've worked with hundreds of families: first-time buyers 
                  nervous about the process, seasoned investors expanding their portfolios, 
                  and everyone in between. Each situation is unique, and I take the time to 
                  understand your specific goals before recommending any solution.
                </p>
                <p>
                  My approach is straightforward. I listen first, educate second, and only 
                  then do we discuss options. There's no pressure, no rushing to close. 
                  The right loan at the right time matters more than any commission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                How I Work
              </p>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                What You Can Expect
              </h2>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-10">
              {values.map((value, index) => (
                <div key={index} className="flex gap-5 bg-background rounded-xl p-6 border border-border">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Roots Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                {/* Placeholder for local area image - Replace in GoHighLevel */}
                <div className="aspect-[4/3] rounded-2xl bg-secondary overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-accent opacity-70" aria-hidden="true" />
                    <p className="text-sm text-muted-foreground">{brand.serviceAreas.primary}, {brand.serviceAreas.state}</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                  Local Roots
                </p>
                <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                  Proud to Call {brand.serviceAreas.primary} Home
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I live and work in Celina, Texas—right in the heart of one of the fastest-growing 
                    regions in the country. I've watched this community transform and thrive, and I'm 
                    deeply invested in its continued success.
                  </p>
                  <p>
                    Being local means I understand the nuances of our market: which neighborhoods are 
                    up-and-coming, what school districts families prioritize, and how new developments 
                    are shaping the area. This knowledge translates into better guidance for my clients.
                  </p>
                  <p>
                    When you work with me, you're not just getting a mortgage advisor—you're getting 
                    a neighbor who genuinely cares about helping you find the right home in a community 
                    I love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Long-Term Relationships Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                Beyond the Closing Table
              </p>
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
                A Partnership for the Long Haul
              </h2>
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-left sm:text-center">
                <p>
                  For me, closing day isn't the end of our relationship—it's just the beginning. Many 
                  of my clients have worked with me on multiple transactions over the years: their first 
                  home, an upgrade when the family grew, investment properties, and refinances when rates 
                  were favorable.
                </p>
                <p>
                  I stay in touch because I genuinely care about your long-term financial success. Whether 
                  you have a quick question about your mortgage, want to discuss refinancing options, or 
                  are ready to buy again, I'm always just a phone call away.
                </p>
                <p>
                  This isn't just my business—it's my passion. Helping families build wealth through 
                  homeownership is deeply rewarding, and I'm grateful for the trust my clients place in me.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
                Ready to Start the Conversation?
              </h2>
              <p className="mt-4 text-lg opacity-90 text-pretty">
                Whether you're ready to apply or just have questions, I'd love to hear from you. 
                Let's discuss your goals and explore how I can help.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Primary CTA - Texas Red */}
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
                >
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                {/* Secondary CTA - White outline on dark background */}
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto bg-transparent"
                >
                  <Link href={brand.contact.phoneHref}>
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                    Call {brand.contact.phone}
                  </Link>
                </Button>
              </div>
              <p className="mt-8 text-sm opacity-75">
                {brand.advisor.name}, NMLS #{brand.advisor.nmls} | {brand.advisor.license}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
