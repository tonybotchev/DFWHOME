"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { brand } from "@/lib/brand"

/**
 * FAQ Content - Compliance-safe, educational
 * All answers use "may," "typically," "depends," "options may be available"
 * No rate quotes, no guarantees, no "approved" language
 */
const faqs = [
  {
    question: "What does a mortgage advisor do?",
    answer:
      "A mortgage advisor helps you understand your loan options, estimate affordability, and choose a strategy that fits your goals. I guide you from planning through closing, coordinating with your real estate agent and title company. All loans are subject to qualification and lender guidelines.",
  },
  {
    question: "What's the difference between pre-qualification and pre-approval?",
    answer:
      "Pre-qualification is an early estimate based on basic information you share. Pre-approval is a stronger step that typically includes document review and a credit check, giving sellers more confidence. Requirements vary by loan program and lender.",
  },
  {
    question: "Do I need to be pre-approved before looking at homes?",
    answer:
      "You can browse anytime, but getting pre-approved early helps you shop with confidence and move faster when you find the right home. It also helps you set a realistic budget and strengthens your offer in competitive markets.",
  },
  {
    question: "How much can I qualify for when buying a home?",
    answer:
      "It depends on your income, debts, credit, down payment, and the loan program. I'll help you review your numbers and build a comfortable monthly payment target—not just the maximum you may qualify for.",
  },
  {
    question: "What credit score is needed to buy a home?",
    answer:
      "Minimum score requirements vary by program and lender, and other factors can sometimes offset a lower score. If you're not where you want to be yet, we can map out practical steps to improve your profile over time.",
  },
  {
    question: "How long does the mortgage process usually take?",
    answer:
      "Timelines vary, but many purchases close in a few weeks once you're under contract and documentation is complete. The biggest factors are responsiveness, appraisal timing, and underwriting conditions. I'll keep you updated at each step.",
  },
  {
    question: "Can I buy a home if I'm self-employed?",
    answer:
      "Yes—self-employed buyers often qualify, but documentation can be different. Lenders typically look at income history, tax returns, and business records. I'll help you understand what's needed and how to prepare.",
  },
  {
    question: "Are there loan options for first-time homebuyers?",
    answer:
      "There are often programs with flexible down payment or credit guidelines, depending on your situation. I'll walk you through available options and help you compare payment scenarios and upfront costs.",
  },
  {
    question: "When does refinancing make sense?",
    answer:
      "Refinancing can help if it reduces your overall cost, changes your term, consolidates debt, or meets a financial goal—depending on rates, fees, and how long you plan to keep the home. I'll run a break-even review so you can decide confidently.",
  },
  {
    question: "Do you only work with buyers in Celina, Texas?",
    answer:
      "I'm based in Celina and serve many North Dallas communities. If you're nearby—or relocating to the area—I can help you plan and finance with a clear, step-by-step approach.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-card" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Mortgage FAQ — Answers from {brand.advisor.name} (NMLS #{brand.advisor.nmls})
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Clear, straightforward answers to common questions. All loans subject to qualification.
          </p>
        </div>

        {/* 2 columns on desktop, 1 column on mobile */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left column - first 5 questions */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(0, 5).map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right column - last 5 questions */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.slice(5, 10).map((faq, index) => (
              <AccordionItem key={index + 5} value={`item-${index + 5}`} className="border-border">
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Compliance note */}
        <p className="mt-12 text-center text-xs text-muted-foreground">
          {brand.advisor.name}, NMLS #{brand.advisor.nmls} | Information provided is for educational purposes and does not constitute a loan commitment.
        </p>
      </div>
    </section>
  )
}
