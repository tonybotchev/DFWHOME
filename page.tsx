import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { brand } from "@/lib/brand"

export const metadata = {
  title: `Loan Options | ${brand.company.name}`,
  description: `Explore mortgage options including Conventional, FHA, VA, Jumbo, and DSCR loans. ${brand.advisor.name} helps ${brand.serviceAreas.region} homebuyers find the right financing. NMLS #${brand.advisor.nmls}.`,
}

const loanPrograms = [
  {
    id: "conventional",
    title: "Conventional Loans",
    subtitle: "Traditional financing with competitive rates",
    description: "Conventional loans are the most common type of mortgage, offering flexibility and competitive rates for qualified borrowers.",
    idealFor: "Buyers with good credit (typically 620+), stable income, and at least 3-5% down payment.",
    features: [
      "Competitive interest rates",
      "Flexible down payment options (as low as 3%)",
      "No upfront mortgage insurance premium",
      "PMI can be removed at 20% equity",
      "Available for primary, secondary, and investment properties",
    ],
  },
  {
    id: "fha",
    title: "FHA Loans",
    subtitle: "Lower barriers for first-time buyers",
    description: "FHA loans are backed by the Federal Housing Administration, making homeownership accessible with lower down payments and more flexible credit requirements.",
    idealFor: "First-time homebuyers, buyers with lower credit scores, or those with limited down payment savings.",
    features: [
      "Down payments as low as 3.5%",
      "Credit scores as low as 580 accepted",
      "More flexible debt-to-income ratios",
      "Gift funds allowed for down payment",
      "Competitive interest rates",
    ],
  },
  {
    id: "va",
    title: "VA Loans",
    subtitle: "Zero down for those who served",
    description: "VA loans provide exceptional benefits for eligible veterans, active-duty service members, and surviving spouses, including no down payment and no PMI.",
    idealFor: "Veterans, active-duty military, National Guard/Reserve members, and eligible surviving spouses.",
    features: [
      "No down payment required",
      "No private mortgage insurance (PMI)",
      "Competitive interest rates",
      "Limited closing costs",
      "No prepayment penalties",
    ],
  },
  {
    id: "jumbo",
    title: "Jumbo Loans",
    subtitle: "Financing for luxury properties",
    description: "Jumbo loans exceed conventional loan limits, providing financing for high-value homes in premium neighborhoods across North DFW.",
    idealFor: "Buyers purchasing luxury homes or properties exceeding conventional loan limits in Frisco, Prosper, and other premium areas.",
    features: [
      "Loan amounts exceeding conforming limits",
      "Competitive rates for qualified borrowers",
      "Various term options available",
      "Available for primary and secondary homes",
      "Interest-only options may be available",
    ],
  },
  {
    id: "dscr",
    title: "DSCR / Investor Loans",
    subtitle: "Built for real estate investors",
    description: "DSCR (Debt Service Coverage Ratio) loans qualify you based on the property's rental income potential, not your personal income. Perfect for building your investment portfolio.",
    idealFor: "Real estate investors, self-employed borrowers, and those with complex income situations.",
    features: [
      "Qualify based on property cash flow",
      "No personal income documentation required",
      "Multiple properties allowed",
      "LLCs and entities accepted",
      "Ideal for rental property investors",
    ],
  },
  {
    id: "refinance",
    title: "Refinance Options",
    subtitle: "Optimize your current mortgage",
    description: "Whether you want to lower your rate, shorten your term, or tap into your home's equity, we have refinance solutions to meet your goals.",
    idealFor: "Homeowners looking to reduce payments, pay off their mortgage faster, or access home equity.",
    features: [
      "Rate-and-term refinance to lower payments",
      "Cash-out refinance to access equity",
      "Streamline refinance for FHA/VA loans",
      "Term reduction to pay off faster",
      "Debt consolidation options",
    ],
  },
]

export default function LoansPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                Loan Programs
              </p>
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
                Mortgage Options for Every Situation
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                From first-time homebuyers to seasoned investors, we offer a comprehensive range of loan programs tailored to your unique needs in {brand.serviceAreas.primary}, {brand.serviceAreas.cities[1]}, {brand.serviceAreas.cities[2]}, and throughout {brand.serviceAreas.region}.
              </p>
            </div>
          </div>
        </section>

        {/* Loan Programs */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-16 lg:space-y-24">
              {loanPrograms.map((program, index) => (
                <article 
                  key={program.id} 
                  id={program.id}
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-start ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {program.title}
                    </h2>
                    <p className="mt-1 text-accent font-medium">
                      {program.subtitle}
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                    <div className="mt-6 p-4 rounded-lg bg-secondary">
                      <p className="text-sm font-medium text-foreground">Ideal For:</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {program.idealFor}
                      </p>
                    </div>
                  </div>
                  <div className={`bg-card rounded-lg border border-border p-6 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}>
                    <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Not Sure Which Loan Is Right for You?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
                Every situation is unique. Let's discuss your goals, timeline, and financial situation to find the perfect mortgage solution for you.
              </p>
              <div className="mt-10">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link href="/contact">
                    Schedule a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-primary-foreground/60">
                {brand.advisor.name}, NMLS #{brand.advisor.nmls}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
