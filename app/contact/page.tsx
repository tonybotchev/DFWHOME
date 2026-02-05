"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Clock, MessageCircle } from "lucide-react"
import { brand } from "@/lib/brand"

/**
 * GOHIGHLEVEL MIGRATION NOTE:
 * Page title: "Contact {brand.advisor.name} | {brand.serviceAreas.primary} {brand.serviceAreas.state} Mortgage Advisor | {brand.company.name}"
 * Meta description: "Request a free mortgage consultation with {brand.advisor.name} in {brand.serviceAreas.primary}, {brand.serviceAreas.state}. Serving first-time buyers, refinancers, and investors in Prosper, Frisco, McKinney, and {brand.serviceAreas.region}. NMLS #{brand.advisor.nmls}."
 */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Let's Talk Through Your Options
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-xl mx-auto">
                A consultation is simply a conversation — no pressure, no obligation. We'll review your situation, I'll explain your options in plain language, and you'll leave with clarity on your next steps.
              </p>
            </div>

            {/* What to Expect */}
            <div className="bg-secondary/50 rounded-lg p-6 mb-10">
              <h2 className="font-medium text-foreground mb-3">
                What happens during a consultation:
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">1.</span>
                  <span>We'll review your current situation and discuss your homeownership goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">2.</span>
                  <span>I'll explain your loan options in plain language, no jargon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">3.</span>
                  <span>You'll leave with a clear understanding of your next steps</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            {!isSubmitted ? (
              <div className="bg-card rounded-lg p-8 border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(469) 555-1234"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goal">What are you looking to do?</Label>
                    <select
                      id="goal"
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={formData.goal}
                      onChange={(e) =>
                        setFormData({ ...formData, goal: e.target.value })
                      }
                      required
                    >
                      <option value="">Select your goal</option>
                      <option value="first-home">Buy my first home</option>
                      <option value="move-up">Move to a bigger home</option>
                      <option value="refinance">Refinance my current mortgage</option>
                      <option value="investment">Purchase an investment property</option>
                      <option value="pre-approval">Get pre-approved</option>
                      <option value="questions">Just have questions</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full h-12 text-base bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                    Request a Free Consultation
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    I'll respond within 24 hours. Your information is never shared.
                  </p>
                </form>
              </div>
            ) : (
              <div className="bg-card rounded-lg p-8 border border-border text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Thank You!
                </h2>
                <p className="text-muted-foreground mb-6">
                  I've received your request and will be in touch within 24 hours to schedule your consultation.
                </p>
                <Button variant="outline" asChild>
                  <a href="/">Return to Home</a>
                </Button>
              </div>
            )}

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Shield className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground">Your info stays private</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Clock className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-end">
                <MessageCircle className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground">No obligation to proceed</span>
              </div>
            </div>

            {/* NMLS Badge */}
            <p className="mt-10 text-center text-xs text-muted-foreground">
              {brand.advisor.name}, NMLS #{brand.advisor.nmls}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
