import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ContactModal } from "@/components/ContactModal";
import { Suspense } from "react";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const heading = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Custom Multi-Tenant E-Commerce Suite & Admin Dashboard",
  description: "Enterprise digital marketing, SEO, and web development services.",
  openGraph: {
    images: ["/undraw_web-developer_gxaa.svg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/undraw_web-developer_gxaa.svg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${heading.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col selection:bg-primary selection:text-primary-foreground relative" suppressHydrationWarning>
        <div className="absolute top-0 left-0 w-full h-[250px] lg:h-[280px] z-0 pointer-events-none animate-wave-in">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320" 
            className="absolute top-0 left-0 w-full h-full object-cover object-top opacity-90"
            preserveAspectRatio="none"
          >
            <path 
              className="fill-primary"
              d="M0,0 L1440,0 L1440,120 C1080,220 360,20 0,120 Z"
            ></path>
          </svg>
        </div>
        {children}
        <Suspense fallback={null}>
          <ContactModal />
        </Suspense>
      </body>
    </html>
  );
}
