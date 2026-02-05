import Link from "next/link"

const loanTypes = [
  {
    title: "Conventional Loans",
    description: "Traditional financing with competitive rates. Ideal for North Texas buyers with good credit and stable income.",
  },
  {
    title: "FHA Loans",
    description: "Lower down payments and flexible credit requirements. Great for first-time homebuyers in Celina and surrounding areas.",
  },
  {
    title: "VA Loans",
    description: "Zero down payment for eligible veterans and active-duty military. No PMI required.",
  },
  {
    title: "Jumbo Loans",
    description: "Financing for luxury homes and high-value properties in Frisco, Prosper, and other premium North DFW neighborhoods.",
  },
  {
    title: "DSCR / Investor Loans",
    description: "Qualify based on property cash flow, not personal income. Built for North Texas real estate investors.",
  },
  {
    title: "Refinance Options",
    description: "Lower your rate, change your term, or access equity. Multiple options to fit your goals.",
  },
]

export function LoanOptions() {
  return (
    <section id="loans" className="py-20 lg:py-28 bg-card" aria-labelledby="loans-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Loan Programs
          </p>
          <h2 id="loans-heading" className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Mortgage Options for North Dallas Homebuyers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            We offer a full range of mortgage products to match your unique needs and goals, whether you're buying in Celina, McKinney, or anywhere in North Texas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loanTypes.map((loan, index) => (
            <article
              key={index}
              className="bg-background rounded-lg p-6 border border-border hover:border-accent/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground">
                {loan.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {loan.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            href="/contact" 
            className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            Not sure which loan is right for you? Let's discuss your options.
          </Link>
        </div>
      </div>
    </section>
  )
}
