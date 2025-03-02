import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import ActiveSectionContextProvider from "@/context/active-section-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Emilio Cardillo-Schrader",
  description: "Personal portfolio and blog of Emilio Cardillo-Schrader",
  icons: {
    icon: '/emiLogo.png',
    apple: [
      { url: '/emiLogo.png' },
      { url: '/emiLogo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Emilio Cardillo-Schrader',
    description: 'Personal portfolio and blog of Emilio Cardillo-Schrader',
    url: 'https://emiliocardilloschrader.com',
    siteName: 'Emilio Cardillo-Schrader',
    images: [
      {
        url: '/emiLogo.png',
        width: 1200,
        height: 630,
        alt: 'Emilio Cardillo-Schrader - Portfolio and Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        <ActiveSectionContextProvider>
          {children}
        </ActiveSectionContextProvider>
        <Toaster />
      </body>
    </html>
  )
}

