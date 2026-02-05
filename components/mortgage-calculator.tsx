"use client"

import { useState, useMemo } from "react"
import { Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { brand } from "@/lib/brand"

/**
 * Mortgage Calculator
 * Educational tool - not a loan offer
 * Client-side only, no external dependencies
 */

type DownPaymentMode = "dollar" | "percent"

const LOAN_TERMS = [
  { value: "30", label: "30 years" },
  { value: "20", label: "20 years" },
  { value: "15", label: "15 years" },
  { value: "10", label: "10 years" },
]

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

function formatCurrencyWithCents(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

function parseNumericInput(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, "")
  const parsed = parseFloat(cleaned)
  return isNaN(parsed) ? 0 : parsed
}

export function MortgageCalculator() {
  // Input state with defaults
  const [homePrice, setHomePrice] = useState(450000)
  const [downPaymentAmount, setDownPaymentAmount] = useState(90000)
  const [downPaymentMode, setDownPaymentMode] = useState<DownPaymentMode>("dollar")
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState("30")
  const [propertyTaxes, setPropertyTaxes] = useState(7200)
  const [homeInsurance, setHomeInsurance] = useState(1800)
  const [hoa, setHoa] = useState(0)
  const [pmi, setPmi] = useState(0)

  // Calculated values
  const calculations = useMemo(() => {
    // Validate inputs
    const validHomePrice = Math.max(0, homePrice)
    const validRate = Math.min(Math.max(0, interestRate), 25)
    const validTerm = parseInt(loanTerm)
    const validTaxes = Math.max(0, propertyTaxes)
    const validInsurance = Math.max(0, homeInsurance)
    const validHoa = Math.max(0, hoa)
    const validPmi = Math.max(0, pmi)

    // Down payment calculation
    let downPaymentDollar = downPaymentAmount
    let downPaymentPercent = 0

    if (downPaymentMode === "percent") {
      downPaymentPercent = Math.min(Math.max(0, downPaymentAmount), 100)
      downPaymentDollar = (validHomePrice * downPaymentPercent) / 100
    } else {
      downPaymentDollar = Math.min(Math.max(0, downPaymentAmount), validHomePrice)
      downPaymentPercent = validHomePrice > 0 ? (downPaymentDollar / validHomePrice) * 100 : 0
    }

    // Loan amount
    const loanAmount = validHomePrice - downPaymentDollar

    // Monthly interest rate
    const monthlyRate = validRate / 100 / 12
    const numberOfPayments = validTerm * 12

    // Monthly Principal & Interest (standard amortization formula)
    let monthlyPI = 0
    if (loanAmount > 0 && monthlyRate > 0) {
      monthlyPI =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    } else if (loanAmount > 0 && monthlyRate === 0) {
      monthlyPI = loanAmount / numberOfPayments
    }

    // Monthly escrow items
    const monthlyTaxes = validTaxes / 12
    const monthlyInsurance = validInsurance / 12

    // Total monthly payment
    const totalMonthly = monthlyPI + monthlyTaxes + monthlyInsurance + validHoa + validPmi

    // Total interest over life of loan
    const totalInterest = monthlyPI * numberOfPayments - loanAmount

    return {
      loanAmount,
      downPaymentDollar,
      downPaymentPercent,
      monthlyPI,
      monthlyTaxes,
      monthlyInsurance,
      monthlyHoa: validHoa,
      monthlyPmi: validPmi,
      totalMonthly,
      totalInterest: Math.max(0, totalInterest),
    }
  }, [homePrice, downPaymentAmount, downPaymentMode, interestRate, loanTerm, propertyTaxes, homeInsurance, hoa, pmi])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // Fallback: navigate to contact page
      window.location.href = "/contact"
    }
  }

  return (
    <section id="calculator" className="py-24 lg:py-28 bg-secondary/50" aria-labelledby="calculator-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="h-6 w-6 text-accent" aria-hidden="true" />
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Mortgage Calculator
            </p>
          </div>
          <h2 id="calculator-heading" className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Estimate Your Monthly Payment
          </h2>
          <p className="mt-4 text-muted-foreground">
            This is an educational tool, not a loan offer.
          </p>
        </div>

        {/* Calculator Card */}
        <Card className="mx-auto max-w-5xl">
          <CardContent className="p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Column: Inputs */}
              <div className="space-y-5">
                {/* Home Price */}
                <div className="space-y-2">
                  <Label htmlFor="home-price">Home Price ($)</Label>
                  <Input
                    id="home-price"
                    type="text"
                    inputMode="numeric"
                    value={homePrice.toLocaleString()}
                    onChange={(e) => setHomePrice(parseNumericInput(e.target.value))}
                    className="bg-background"
                  />
                </div>

                {/* Down Payment */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="down-payment">Down Payment</Label>
                    <div className="flex rounded-md border border-border overflow-hidden">
                      <button
                        type="button"
                        onClick={() => {
                          if (downPaymentMode === "percent") {
                            // Convert percent to dollar
                            setDownPaymentAmount(calculations.downPaymentDollar)
                          }
                          setDownPaymentMode("dollar")
                        }}
                        className={`px-3 py-1 text-xs font-medium transition-colors ${
                          downPaymentMode === "dollar"
                            ? "bg-primary text-primary-foreground"
                            : "bg-background text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        $
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (downPaymentMode === "dollar") {
                            // Convert dollar to percent
                            setDownPaymentAmount(calculations.downPaymentPercent)
                          }
                          setDownPaymentMode("percent")
                        }}
                        className={`px-3 py-1 text-xs font-medium transition-colors ${
                          downPaymentMode === "percent"
                            ? "bg-primary text-primary-foreground"
                            : "bg-background text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        %
                      </button>
                    </div>
                  </div>
                  <Input
                    id="down-payment"
                    type="text"
                    inputMode="numeric"
                    value={downPaymentMode === "dollar" ? downPaymentAmount.toLocaleString() : downPaymentAmount.toFixed(1)}
                    onChange={(e) => setDownPaymentAmount(parseNumericInput(e.target.value))}
                    className="bg-background"
                  />
                </div>

                {/* Interest Rate */}
                <div className="space-y-2">
                  <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                  <Input
                    id="interest-rate"
                    type="text"
                    inputMode="decimal"
                    value={interestRate}
                    onChange={(e) => {
                      const val = parseNumericInput(e.target.value)
                      setInterestRate(Math.min(Math.max(0, val), 25))
                    }}
                    className="bg-background"
                  />
                </div>

                {/* Loan Term */}
                <div className="space-y-2">
                  <Label htmlFor="loan-term">Loan Term</Label>
                  <Select value={loanTerm} onValueChange={setLoanTerm}>
                    <SelectTrigger id="loan-term" className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {LOAN_TERMS.map((term) => (
                        <SelectItem key={term.value} value={term.value}>
                          {term.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Property Taxes */}
                <div className="space-y-2">
                  <Label htmlFor="property-taxes">Property Taxes ($ per year)</Label>
                  <Input
                    id="property-taxes"
                    type="text"
                    inputMode="numeric"
                    value={propertyTaxes.toLocaleString()}
                    onChange={(e) => setPropertyTaxes(parseNumericInput(e.target.value))}
                    className="bg-background"
                  />
                </div>

                {/* Home Insurance */}
                <div className="space-y-2">
                  <Label htmlFor="home-insurance">Home Insurance ($ per year)</Label>
                  <Input
                    id="home-insurance"
                    type="text"
                    inputMode="numeric"
                    value={homeInsurance.toLocaleString()}
                    onChange={(e) => setHomeInsurance(parseNumericInput(e.target.value))}
                    className="bg-background"
                  />
                </div>

                {/* HOA */}
                <div className="space-y-2">
                  <Label htmlFor="hoa">HOA ($ per month)</Label>
                  <Input
                    id="hoa"
                    type="text"
                    inputMode="numeric"
                    value={hoa.toLocaleString()}
                    onChange={(e) => setHoa(parseNumericInput(e.target.value))}
                    className="bg-background"
                  />
                </div>

                {/* PMI */}
                <div className="space-y-2">
                  <Label htmlFor="pmi">PMI ($ per month)</Label>
                  <Input
                    id="pmi"
                    type="text"
                    inputMode="numeric"
                    value={pmi.toLocaleString()}
                    onChange={(e) => setPmi(parseNumericInput(e.target.value))}
                    className="bg-background"
                  />
                  <p className="text-xs text-muted-foreground">
                    PMI may apply with lower down payments.
                  </p>
                </div>
              </div>

              {/* Right Column: Results */}
              <div className="lg:border-l lg:border-border lg:pl-8">
                <div className="bg-secondary rounded-lg p-6">
                  {/* Total Monthly Payment - Large Display */}
                  <div className="text-center mb-6 pb-6 border-b border-border">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      Estimated Monthly Payment
                    </p>
                    <p className="font-serif text-4xl sm:text-5xl font-semibold text-foreground">
                      {formatCurrencyWithCents(calculations.totalMonthly)}
                    </p>
                  </div>

                  {/* Payment Breakdown */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Payment Breakdown
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Principal & Interest</span>
                        <span className="font-medium text-foreground">{formatCurrencyWithCents(calculations.monthlyPI)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Property Taxes</span>
                        <span className="font-medium text-foreground">{formatCurrencyWithCents(calculations.monthlyTaxes)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Home Insurance</span>
                        <span className="font-medium text-foreground">{formatCurrencyWithCents(calculations.monthlyInsurance)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">HOA</span>
                        <span className="font-medium text-foreground">{formatCurrencyWithCents(calculations.monthlyHoa)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">PMI</span>
                        <span className="font-medium text-foreground">{formatCurrencyWithCents(calculations.monthlyPmi)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Loan Details */}
                  <div className="space-y-3 mb-6 pt-4 border-t border-border">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Loan Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Loan Amount</span>
                        <span className="font-medium text-foreground">{formatCurrency(calculations.loanAmount)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Down Payment</span>
                        <span className="font-medium text-foreground">
                          {formatCurrency(calculations.downPaymentDollar)} ({calculations.downPaymentPercent.toFixed(1)}%)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Interest Paid</span>
                        <span className="font-medium text-foreground">{formatCurrency(calculations.totalInterest)}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    size="lg"
                  >
                    Get a Free Payment Review
                  </Button>
                </div>

                {/* Disclaimer */}
                <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                  Estimates only. This is not a commitment to lend. Rates, taxes, insurance, PMI, HOA, and payment amounts may vary. All loans subject to credit approval and program guidelines.
                </p>

                {/* NMLS */}
                <p className="mt-3 text-xs text-muted-foreground">
                  {brand.advisor.name}, NMLS #{brand.advisor.nmls}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
