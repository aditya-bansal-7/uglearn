import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import  { Providers } from "./providers"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UGLearn - University Course Platform",
  description: "Find and purchase courses for your university",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  )
}

