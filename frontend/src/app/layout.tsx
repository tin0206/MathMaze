import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FetchData from "@/components/FetchData"

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "MathMaze",
  description: "A place to practice math skills",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.variable} antialiased flex flex-col xl:items-center`}
      >
        <FetchData />
        <div className="w-full flex flex-col xl:items-center bg-[rgba(247,247,248,1)]">
          <div className="max-w-[1800px] w-full">
            <Navbar />
            <div className="flex flex-col px-[20px] lg:px-[90px] xl:px-[132px]">
              {children}
            </div>
          </div>
        </div>
        <div className="max-w-[1800px] w-full bg-white">
          <Footer />
        </div>
      </body>
    </html>
  )
}
