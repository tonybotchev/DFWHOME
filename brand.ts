/**
 * DFW Homes & Loans - Brand Configuration
 * ========================================
 * 
 * This file contains all brand-specific content that may need to be
 * updated when deploying to GoHighLevel or other platforms.
 * 
 * INSTRUCTIONS FOR GOHIGHLEVEL DEPLOYMENT:
 * - Replace placeholder values with final brand assets
 * - Logo files should be uploaded to your media library
 * - Phone and email should be updated with actual contact info
 * - All text content can be customized as needed
 */

export const brand = {
  // =============================================
  // COMPANY INFORMATION
  // =============================================
  company: {
    name: "DFW Homes & Loans",
    tagline: "Your Trusted Mortgage Advisor",
    description: "Mortgage services for North Dallas homebuyers",
  },

  // =============================================
  // ADVISOR INFORMATION
  // =============================================
  advisor: {
    name: "Tony Botchev",
    title: "Mortgage Loan Originator",
    nmls: "114198",
    license: "Texas Licensed Mortgage Loan Originator",
  },

  // =============================================
  // CONTACT INFORMATION
  // Replace these placeholders with actual contact details
  // =============================================
  contact: {
    /** Clickable phone - tel: link for mobile click-to-call */
    phone: "(945) 370-8656",
    phoneHref: "tel:9453708656",
    
    /** Clickable email - mailto: link */
    email: "tony@dfwhome.loans",
    emailHref: "mailto:tony@dfwhome.loans",
    
    /** Office location - plain text only, NOT clickable */
    address: {
      city: "Celina",
      state: "TX",
      zip: "75009",
      full: "Celina, TX 75009",
    },
  },

  // =============================================
  // LOGO ASSETS
  // Replace these placeholders with actual logo URLs
  // =============================================
  logo: {
    /** 
     * @placeholder Replace with actual logo URL
     * Recommended: SVG or PNG with transparent background
     * Dimensions: ~200x50px for header
     */
    header: null as string | null,
    
    /** 
     * @placeholder Replace with actual logo URL
     * Light version for dark backgrounds (footer, CTA sections)
     * Dimensions: ~200x50px
     */
    footer: null as string | null,
    
    /** 
     * @placeholder Replace with actual favicon URL
     * Dimensions: 32x32px or 64x64px
     */
    favicon: null as string | null,
  },

  // =============================================
  // SOCIAL MEDIA LINKS
  // Add social profiles when available
  // =============================================
  social: {
    /** @placeholder Add Facebook URL when available */
    facebook: null as string | null,
    /** @placeholder Add LinkedIn URL when available */
    linkedin: null as string | null,
    /** @placeholder Add Instagram URL when available */
    instagram: null as string | null,
  },

  // =============================================
  // LEGAL & COMPLIANCE
  // =============================================
  legal: {
    nmlsConsumerAccess: "https://www.nmlsconsumeraccess.org",
    equalHousingText: "Equal Housing Opportunity",
    disclaimer: `This is not a commitment to lend. Programs, rates, terms, and conditions are subject to change without notice. Not all products are available in all states. All loans subject to credit approval. Tony Botchev is a licensed mortgage loan originator in Texas serving Celina, Prosper, Frisco, McKinney, Anna, Melissa, Aubrey, and surrounding North Dallas communities.`,
  },

  // =============================================
  // SERVICE AREAS
  // =============================================
  serviceAreas: {
    primary: "Celina",
    region: "North Dallas",
    state: "Texas",
    cities: [
      "Celina",
      "Prosper", 
      "Frisco",
      "McKinney",
      "Anna",
      "Melissa",
      "Aubrey",
    ],
    counties: ["Collin", "Denton"],
  },
} as const

// Type export for use across the application
export type Brand = typeof brand
