import Sidebar from "@/components/instructor/Sidebar"
import React from "react"

export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex md:flex-row flex-col">
        <Sidebar />
        <div className="flex-1 bg-gray-50 p-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
