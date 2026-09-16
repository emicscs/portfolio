import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ActiveSectionContextProvider from "@/context/active-section-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Emilio Cardillo-Schrader",
  description: "Emilio Cardillo-Schrader's personal website",
  icons: {
    icon: "/emiLogo.ico",
    apple: [
      { url: "/emiLogo.webp" },
      { url: "/emiLogo.webp", sizes: "180x180", type: "image/webp" },
    ],
  },
  openGraph: {
    title: "Emilio Cardillo-Schrader",
    description: "Personal portfolio of Emilio Cardillo-Schrader",
    url: "https://emiliocardilloschrader.com",
    siteName: "Emilio Cardillo-Schrader",
    images: [
      {
        url: "/emiLogo.webp",
        width: 1200,
        height: 630,
        alt: "Emilio Cardillo-Schrader - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emilio Cardillo-Schrader",
    description: "Personal portfolio of Emilio Cardillo-Schrader",
    images: [
      {
        url: "/emiLogo.webp",
        width: 1200,
        height: 630,
        alt: "Emilio Cardillo-Schrader - Portfolio",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
