import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { brand } from "@/lib/brand"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

/**
 * Site Metadata - Uses brand config for consistency
 * Update brand.ts to change these values across the entire site
 */
export const metadata: Metadata = {
  title: `${brand.company.name} | ${brand.company.tagline} in ${brand.serviceAreas.region}`,
  description: `${brand.company.name} helps first-time buyers, move-up buyers, and investors find the right mortgage in ${brand.serviceAreas.cities.join(", ")}, and surrounding ${brand.serviceAreas.region} areas. NMLS #${brand.advisor.nmls}.`,
  generator: 'v0.app',
  /**
   * FAVICON PLACEHOLDER
   * -------------------
   * Replace /favicon.ico with your logo mark
   * Recommended sizes:
   * - favicon.ico: 32x32px or 64x64px
   * - apple-touch-icon.png: 180x180px
   * 
   * To update: Upload favicon files to /public folder
   */
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
