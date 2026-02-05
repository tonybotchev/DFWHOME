"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { brand } from "@/lib/brand"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Tony" },
    { href: "/loans", label: "Loan Options" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* 
          LOGO PLACEHOLDER
          -----------------
          Replace brand.logo.header in /lib/brand.ts with your logo URL
          Logo should support Tony Botchev's name, not replace it
          Recommended: PNG or SVG, max height 36px to not overpower header
          Do not distort - maintain aspect ratio
        */}
        <Link href="/" className="flex items-center gap-3">
          {brand.logo.header ? (
            <>
              <Image
                src={brand.logo.header || "/placeholder.svg"}
                alt={`${brand.company.name} logo`}
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
                priority
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold text-foreground tracking-tight leading-tight">
                  {brand.advisor.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {brand.company.name}
                </span>
              </div>
            </>
          ) : (
            /* Placeholder: Text logo until image is provided */
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-foreground tracking-tight leading-tight">
                {brand.advisor.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {brand.company.name}
              </span>
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA - Clean, trust-first approach (no phone clutter) */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link href="/contact">Get Pre-Approved</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile-only phone CTA + main CTA */}
            <div className="pt-4 border-t border-border space-y-3">
              {/* Phone visible on mobile only - trust-first, not billboard */}
              <Link
                href={brand.contact.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-md border border-border text-base font-medium text-foreground hover:bg-secondary transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call {brand.contact.phone}</span>
              </Link>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/contact">Get Pre-Approved</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
