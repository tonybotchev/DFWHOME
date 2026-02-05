"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin } from "lucide-react"
import { brand } from "@/lib/brand"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    loanType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              Get Started
            </p>
            <h2 id="contact-heading" className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Contact Your Celina Mortgage Advisor
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Fill out the form and I'll reach out within 24 hours to discuss your mortgage options. No pressure, just helpful guidance for North Dallas homebuyers.
            </p>

            {/* Contact Information - Uses brand config for easy updates */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a
                    href={brand.contact.phoneHref}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {brand.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href={brand.contact.emailHref}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {brand.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Office</p>
                  <p className="text-muted-foreground">
                    {brand.contact.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(469) 555-1234"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanType">What are you looking for?</Label>
                <select
                  id="loanType"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.loanType}
                  onChange={(e) =>
                    setFormData({ ...formData, loanType: e.target.value })
                  }
                  required
                >
                  <option value="">Select an option</option>
                  <option value="purchase-first">First Home Purchase</option>
                  <option value="purchase-move-up">Move-Up Purchase</option>
                  <option value="refinance">Refinance</option>
                  <option value="investment">Investment Property</option>
                  <option value="realtor">Realtor Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <textarea
                  id="message"
                  rows={4}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Tell us about your situation or any questions you have..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                Request Consultation
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to be contacted about mortgage products. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
