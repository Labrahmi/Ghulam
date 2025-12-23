import type { Metadata } from "next";
import "./globals.css";
import { Syne } from 'next/font/google'
import { appConfig } from "@/config/app.config";

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

/**
 * Root layout metadata
 * Customize in app.config.ts
 */
export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
};

/**
 * Root layout component
 * Provides global styles and font configuration
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={syne.variable}>
      <body
        className={`antialiased bg-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
