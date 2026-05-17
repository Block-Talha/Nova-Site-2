import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://www.novasyncservices.online";
const siteName = "Nova Sync Services";
const defaultTitle =
  "Nova Sync Services | Digital Marketing Agency Pakistan";
const defaultDescription =
  "Nova Sync Services helps gyms, clinics, wedding venues, restaurants, coaching institutes, real estate developers, salons, and service brands grow across Pakistan.";
const googleAnalyticsId = "G-91GYL6RMV0";

// Google Search Console setup:
// 1) Add your token in .env as GOOGLE_SITE_VERIFICATION=your_token
// 2) Keep this fallback only until env is configured.
const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION ?? "";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/android-chrome-512x512.png`,
  description: defaultDescription,
  email: "novasyncs.services@gmail.com",
  // Add your social profile links below (LinkedIn/Instagram/Facebook/etc.)
  // Example: "https://www.linkedin.com/company/your-company"
  sameAs: [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+92-328-3696394",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["en"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  inLanguage: ["en-PK", "en"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AdvertisingAgency",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/android-chrome-512x512.png`,
  image: `${siteUrl}/og-image.png`,
  description: defaultDescription,
  email: "novasyncs.services@gmail.com",
  telephone: "+92-328-3696394",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  areaServed: [
    { "@type": "City", name: "Karachi" },
    { "@type": "City", name: "Lahore" },
    { "@type": "City", name: "Islamabad" },
    { "@type": "Country", name: "Pakistan" },
  ],
  serviceType: [
    "Digital Marketing",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Website Design",
    "WhatsApp Automation",
    "Lead Generation",
    "Branding",
  ],
};

const keywords: string[] = [
  "nova sync services",
  "nova sync services pakistan",
  "digital marketing agency pakistan",
  "digital marketing services pakistan",
  "karachi digital marketing agency",
  "lahore digital marketing agency",
  "islamabad digital marketing agency",
  "growth marketing agency pakistan",
  "lead generation agency pakistan",
  "seo agency pakistan",
  "website design company pakistan",
  "branding agency pakistan",
  "social media marketing pakistan",
  "google ads agency pakistan",
  "meta ads agency pakistan",
  "whatsapp marketing pakistan",
  "whatsapp automation pakistan",
  "gym marketing pakistan",
  "fitness center marketing pakistan",
  "clinic digital marketing pakistan",
  "doctor marketing pakistan",
  "private clinic marketing karachi",
  "wedding venue marketing pakistan",
  "banquet hall marketing pakistan",
  "restaurant marketing pakistan",
  "restaurant digital marketing karachi",
  "cafe marketing pakistan",
  "coaching institute marketing pakistan",
  "education marketing pakistan",
  "real estate marketing pakistan",
  "property lead generation pakistan",
  "real estate digital marketing karachi",
  "salon marketing pakistan",
  "barbershop marketing pakistan",
  "google business profile setup pakistan",
  "landing page design pakistan",
  "website maintenance pakistan",
  "crm integration pakistan",
  "email marketing pakistan",
];

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Nova Sync Services",
  },
  description: defaultDescription,
  applicationName: siteName,
  category: "business",
  creator: siteName,
  publisher: siteName,
  keywords,
  referrer: "origin-when-cross-origin",
  authors: [{ name: siteName, url: siteUrl }],
  alternates: {
    canonical: "/",
    languages: {
      "en-PK": "/",
      en: "/",
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  verification: {
    google: googleSiteVerification,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nova Sync Services digital marketing agency for gyms, clinics, restaurants, wedding venues, real estate, and salons in Pakistan.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakartaSans.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen bg-background font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <div
          className="pointer-events-none fixed inset-0 z-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/4 top-0 h-[800px] w-[800px] -translate-y-1/2 rounded-full bg-primary-fixed/5 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] translate-y-1/2 rounded-full bg-primary-fixed/5 blur-[100px] mix-blend-screen" />
        </div>
        {children}
      </body>
    </html>
  );
}
