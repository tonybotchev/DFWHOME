import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MortgageCalculator } from "@/components/mortgage-calculator"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

/**
 * LocalBusiness / FinancialService Schema JSON-LD
 * Includes sameAs links for GBP and social profiles
 * PLACEHOLDER: Update sameAs URLs when profiles are confirmed
 */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "DFW Homes & Loans",
  "description": "Tony Botchev is your trusted mortgage advisor in Celina, TX, serving homebuyers throughout North DFW including Prosper, Frisco, McKinney, and surrounding communities.",
  "url": "https://dfwhome.loans",
  "telephone": "+19453708656",
  "email": "tony@dfwhome.loans",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Celina",
    "addressRegion": "TX",
    "postalCode": "75009",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Celina", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Prosper", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Frisco", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "McKinney", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Anna", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Melissa", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Aubrey", "containedInPlace": { "@type": "State", "name": "Texas" } }
  ],
  "employee": {
    "@type": "Person",
    "name": "Tony Botchev",
    "jobTitle": "Mortgage Advisor",
    "identifier": {
      "@type": "PropertyValue",
      "name": "NMLS",
      "value": "114198"
    },
    /**
     * PLACEHOLDER: Add social/professional profile URLs here
     * Example: "https://www.linkedin.com/in/tonybotchev"
     */
    "sameAs": []
  },
  /**
   * sameAs Links - PLACEHOLDER URLs
   * Replace with actual profile URLs:
   * - Google Business Profile URL
   * - LinkedIn company page
   * - Facebook business page
   * - Other verified profiles
   */
  "sameAs": [
    // "https://www.google.com/maps/place/DFW+Homes+%26+Loans/...", // GBP URL placeholder
    // "https://www.linkedin.com/company/dfwhomesandloans",
    // "https://www.facebook.com/dfwhomesandloans"
  ]
}

/**
 * FAQPage Schema JSON-LD
 * Questions and answers match exactly with visible on-page FAQ content
 * Compliance-safe: No promises, approvals, or rate quotes
 */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a mortgage advisor do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A mortgage advisor helps you understand your loan options, estimate affordability, and choose a strategy that fits your goals. I guide you from planning through closing, coordinating with your real estate agent and title company. All loans are subject to qualification and lender guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between pre-qualification and pre-approval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pre-qualification is an early estimate based on basic information you share. Pre-approval is a stronger step that typically includes document review and a credit check, giving sellers more confidence. Requirements vary by loan program and lender."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be pre-approved before looking at homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can browse anytime, but getting pre-approved early helps you shop with confidence and move faster when you find the right home. It also helps you set a realistic budget and strengthens your offer in competitive markets."
      }
    },
    {
      "@type": "Question",
      "name": "How much can I qualify for when buying a home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your income, debts, credit, down payment, and the loan program. I'll help you review your numbers and build a comfortable monthly payment target—not just the maximum you may qualify for."
      }
    },
    {
      "@type": "Question",
      "name": "What credit score is needed to buy a home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimum score requirements vary by program and lender, and other factors can sometimes offset a lower score. If you're not where you want to be yet, we can map out practical steps to improve your profile over time."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the mortgage process usually take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timelines vary, but many purchases close in a few weeks once you're under contract and documentation is complete. The biggest factors are responsiveness, appraisal timing, and underwriting conditions. I'll keep you updated at each step."
      }
    },
    {
      "@type": "Question",
      "name": "Can I buy a home if I'm self-employed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes—self-employed buyers often qualify, but documentation can be different. Lenders typically look at income history, tax returns, and business records. I'll help you understand what's needed and how to prepare."
      }
    },
    {
      "@type": "Question",
      "name": "Are there loan options for first-time homebuyers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are often programs with flexible down payment or credit guidelines, depending on your situation. I'll walk you through available options and help you compare payment scenarios and upfront costs."
      }
    },
    {
      "@type": "Question",
      "name": "When does refinancing make sense?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Refinancing can help if it reduces your overall cost, changes your term, consolidates debt, or meets a financial goal—depending on rates, fees, and how long you plan to keep the home. I'll run a break-even review so you can decide confidently."
      }
    },
    {
      "@type": "Question",
      "name": "Do you only work with buyers in Celina, Texas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I'm based in Celina and serve many North Dallas communities. If you're nearby—or relocating to the area—I can help you plan and finance with a clear, step-by-step approach."
      }
    }
  ]
}

export default function Home() {
  return (
    <>
      {/* LocalBusiness/FinancialService Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      {/* FAQPage Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="scroll-smooth">
        {/* 1. Hero with headline, subheadline, CTAs */}
        <Hero />
        {/* 2. Mortgage Calculator - First interactive element, value-driven engagement */}
        <MortgageCalculator />
        {/* 3. FAQ - Educational, compliance-safe */}
        <FAQ />
        {/* 4. Contact / Consultation CTA */}
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
