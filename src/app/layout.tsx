import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://novasync.io"),
  title: "Nova Sync | Electric Precision for Elite Salons",
  description:
    "Manage and grow your salon business with Nova Sync through elite branding, booking automation, and growth systems built for modern salons.",
  keywords: [
    "salon software",
    "barbershop booking",
    "whatsapp automation",
    "salon marketing",
    "Nova Sync",
  ],
  openGraph: {
    title: "Nova Sync | Electric Precision for Elite Salons",
    description:
      "Elevate your salon brand with automated booking, WhatsApp reminders, and local growth systems.",
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
    title: "Nova Sync | Electric Precision for Elite Salons",
    description:
      "Elite salon growth, booking, and automation in a single high-end digital experience.",
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
        {children}
      </body>
    </html>
  );
}
