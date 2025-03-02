import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import ActiveSectionContextProvider from "@/context/active-section-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Emilio Cardillo-Schrader - ML Researcher",
  description: "My personal portfolio website showcasing my skills and projects",
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

