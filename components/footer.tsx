import Link from "next/link"
import Image from "next/image"
import { brand } from "@/lib/brand"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            {/* 
              LOGO PLACEHOLDER (Footer - Light Version)
              ------------------------------------------
              Replace brand.logo.footer in /lib/brand.ts with your logo URL
              Use light/white version for dark background
              Logo supports Tony Botchev's name - do not replace it
            */}
            {brand.logo.footer ? (
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src={brand.logo.footer || "/placeholder.svg"}
                  alt={`${brand.company.name} logo`}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-semibold tracking-tight leading-tight">
                    {brand.advisor.name}
                  </span>
                  <span className="text-xs text-primary-foreground/70">
                    {brand.company.name}
                  </span>
                </div>
              </Link>
            ) : (
              /* Placeholder: Text logo until image is provided */
              <Link href="/" className="block">
                <span className="font-serif text-lg font-semibold tracking-tight block">
                  {brand.advisor.name}
                </span>
                <span className="text-xs text-primary-foreground/70">
                  {brand.company.name}
                </span>
              </Link>
            )}
            <p className="mt-4 text-sm text-primary-foreground/80">
              {brand.company.tagline} in {brand.serviceAreas.primary}, {brand.serviceAreas.state} and {brand.serviceAreas.region}
            </p>
            {/* NMLS paired with Tony's name - COMPLIANCE REQUIREMENT */}
            <p className="mt-4 text-sm font-medium text-primary-foreground">
              {brand.advisor.name}, NMLS #{brand.advisor.nmls}
            </p>
          </div>

          {/* Pages Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Pages</h3>
            <nav aria-label="Footer navigation">
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About Tony
                  </Link>
                </li>
                <li>
                  <Link href="/loans" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Loan Options
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/#services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Who This Is For
                </Link>
              </li>
              <li>
                <Link href="/#areas" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Areas Served
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Request Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <address className="mt-4 space-y-3 not-italic">
              <p className="text-sm text-primary-foreground/80">
                {brand.advisor.name}
              </p>
              {/* Phone - Uses brand config for easy updates */}
              <p>
                <a 
                  href={brand.contact.phoneHref} 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {brand.contact.phone}
                </a>
              </p>
              {/* Email - Uses brand config for easy updates */}
              <p>
                <a 
                  href={brand.contact.emailHref} 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {brand.contact.email}
                </a>
              </p>
              <p className="text-sm text-primary-foreground/80">
                {brand.contact.address.full}
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* NMLS paired with Tony's name - COMPLIANCE REQUIREMENT */}
            <p className="text-xs text-primary-foreground/60">
              {brand.advisor.name}, NMLS #{brand.advisor.nmls} | {brand.advisor.license}
            </p>
            <p className="text-xs text-primary-foreground/60">
              {brand.legal.equalHousingText}
            </p>
          </div>
          <p className="mt-4 text-xs text-primary-foreground/60 leading-relaxed">
            {brand.legal.disclaimer} NMLS Consumer Access:{" "}
            <a 
              href={brand.legal.nmlsConsumerAccess} 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground/80"
            >
              www.nmlsconsumeraccess.org
            </a>
          </p>
          {/* Legal Links - Placeholders for Privacy Policy and Terms of Use */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} {brand.company.name}. All rights reserved.
            </p>
            <span className="text-xs text-primary-foreground/40">|</span>
            {/* PLACEHOLDER: Update href when Privacy Policy page is created */}
            <Link 
              href="/privacy" 
              className="text-xs text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-xs text-primary-foreground/40">|</span>
            {/* PLACEHOLDER: Update href when Terms of Use page is created */}
            <Link 
              href="/terms" 
              className="text-xs text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
