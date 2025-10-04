import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FetchData from "@/components/FetchData"
import { GoogleOAuthProvider } from "@react-oauth/google"
import PopUpNoti from "@/components/PopUpNoti"
import Sidebar from "@/components/instructor/Sidebar"
import ProgressBar from "@/components/course/create/ProgressBar"
import Container from "@/components/Container"
import BottomBar from "@/components/course/create/BottomBar"

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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.variable} antialiased flex flex-col xl:items-center`}
      >
        <FetchData />
        <ProgressBar />
        <div className="w-full flex flex-col md:flex-row">
          <Sidebar />
          <Container>
            <div className="max-w-[1800px] w-full">
              <Navbar />
              <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
                <div>
                  {children}
                </div>
              </GoogleOAuthProvider>
              <PopUpNoti />
            </div>
          </Container>
        </div>
        <BottomBar />
        <Footer />
      </body>
    </html>
  )
}
