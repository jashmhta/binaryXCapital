import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  title: "Binary Capital - Bespoke Financial Strategies | Investment Banking India",
  description: "Binary Capital: Mumbai-based investment banking and financial advisory firm offering Finance Advisory, Project Advisory, and Capital Markets solutions. Bespoke financial strategies for sustainable growth across India.",
  keywords: "investment banking Mumbai, financial advisory India, project finance, M&A advisory, capital markets, structured finance, corporate finance, Andheri Mumbai, Binary Capital, infrastructure finance, debt capital markets, equity capital markets",
  authors: [{ name: "Binary Capital" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "Binary Capital",
    title: "Binary Capital - Bespoke Financial Strategies | Investment Banking & Advisory",
    description: "Mumbai-based investment banking firm offering Finance Advisory, Project Advisory, and Capital Markets solutions. 10+ years of excellence in structured finance and financial advisory.",
    locale: "en_IN",
    images: [
      {
        url: "/logo-4zsp2eCD.png",
        width: 1200,
        height: 630,
        alt: "Binary Capital"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Binary Capital - Bespoke Financial Strategies",
    description: "Investment banking and financial advisory services across India. Headquartered in Mumbai.",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.117817;72.826299",
    "ICBM": "19.117817, 72.826299",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/logo-4zsp2eCD.png" />
        <link rel="apple-touch-icon" href="/logo-4zsp2eCD.png" />
        <meta name="theme-color" content="#1e3a8a" />

        {/* Preload Critical Assets */}
        <link rel="preload" href="/binary_capital_logo.gif" as="image" type="image/gif" />
        <link rel="preload" href="/logo-4zsp2eCD.png" as="image" type="image/png" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="antialiased">
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
        </ThemeProvider>

        {/* Analytics Script */}
        {process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT && (
          <Script
            src={`${process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT}/umami`}
            data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
