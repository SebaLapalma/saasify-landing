import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SaaSify",
  description: "Modern SaaS landing page built with Next.js and Tailwind CSS.",
  openGraph: {
    title: "SaaSify - Landing Page Template",
    description: "Una landing moderna, rápida y responsive para apps SaaS.",
    url: "https://saasify-landing.vercel.app/",
    siteName: "SaaSify",
    images: [
      {
        url: "/og-preview-jpg",
        width: 1200,
        height: 630,
        alt: "SaaSify preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSify - Landing Page Template",
    description: "Una landing moderna, rápida y responsive para apps SaaS.",
    images: ['/og-preview.jpg'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon-32x32.png" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
