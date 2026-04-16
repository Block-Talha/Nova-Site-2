import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://www.novasyncservices.online";
const siteName = "Nova Sync Services";
const defaultTitle =
  "Nova Sync Services | Electric Precision for Elite Salons";
const defaultDescription =
  "Manage and grow your salon business with Nova Sync Services through elite branding, booking automation, and growth systems built for modern salons.";
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
};

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
  keywords: [
    "salon software",
    "clinic management marketing",
    "doctor appointment automation",
    "barbershop booking",
    "clinic booking system",
    "whatsapp automation",
    "salon marketing",
    "doctor marketing pakistan",
    "clinic marketing pakistan",
    "google business profile",
    "local seo for salons",
    "local seo for clinics",
    "salon marketing pakistan",
    "barbershop marketing pakistan",
    "medical practice marketing pakistan",
    "barber shop software pakistan",
    "booking system pakistan salons",
    "booking system pakistan clinics",
    "whatsapp reminders salon pakistan",
    "whatsapp reminders clinic pakistan",
    "google ads for salons pakistan",
    "google ads for clinics pakistan",
    "instagram marketing for salons pakistan",
    "instagram marketing for clinics pakistan",
    "beauty salon website pakistan",
    "doctor clinic website pakistan",
    "barbershop website pakistan",
    "hair salon growth agency pakistan",
    "clinic growth agency pakistan",
    "grooming business marketing pakistan",
    "healthcare marketing agency pakistan",
    "karachi salon marketing",
    "karachi clinic marketing",
    "lahore salon marketing",
    "lahore clinic marketing",
    "islamabad salon marketing",
    "islamabad clinic marketing",
    "beauty parlor marketing pakistan",
    "salon seo pakistan",
    "clinic seo pakistan",
    "barbershop seo pakistan",
    "digital marketing agency for salons",
    "digital marketing agency for clinics",
    "salon lead generation pakistan",
    "doctor lead generation pakistan",
    "clinic lead generation pakistan",
    "nova sync services pakistan",
    "Nova Sync Services",
  ],
  alternates: {
    canonical: "/",
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
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nova Sync salon marketing landing page",
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
        {children}
      </body>
    </html>
  );
}
