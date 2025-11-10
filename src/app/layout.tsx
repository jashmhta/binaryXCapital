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
  weight: ["300", "400", "500", "600", "700"]
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Binary Capital - Bespoke Financial Strategies",
  description: "Binary Capital: Mumbai-based investment banking and financial advisory firm offering Finance Advisory, Project Advisory, Transaction Advisory, and Capital Markets solutions. Bespoke financial strategies for sustainable growth across India.",
  keywords: "investment banking Mumbai, financial advisory India, project finance, M&A advisory, transaction advisory, capital markets, structured finance, venture capital, corporate finance, Andheri West Mumbai, Binary Capital, infrastructure finance, debt capital markets, equity capital markets",
  authors: [{ name: "Binary Capital Advisors LLP" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "Binary Capital",
    title: "Binary Capital - Bespoke Financial Strategies | Investment Banking & Advisory",
    description: "Mumbai-based investment banking firm offering Finance Advisory, Project Advisory, Transaction Advisory, and Capital Markets solutions. 10+ years of excellence in structured finance and M&A advisory.",
    locale: "en_IN",
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
        <link rel="preload" href="/logo-4zsp2eCD.png" as="image" type="image/png" />
        <link rel="preload" href="/hero_finance_investment-oDlAhxWb.png" as="image" type="image/png" />
      </head>
      <body>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
        </ThemeProvider>
        
        {/* Analytics Script */}
        <Script
          src={process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT ? `${process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT}/umami` : ''}
          data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
