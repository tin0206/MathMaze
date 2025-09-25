"use client"

import { useUser } from "@/store/useUser"
import { useEffect } from "react"

export default function FetchData() {
    const { setUser } = useUser()

    useEffect(() => {
        const loadUser = async () => {
            let accessToken = localStorage.getItem("accessToken")
            const refreshToken = localStorage.getItem("refreshToken")

            if (!accessToken || !refreshToken) {
                return
            }

            const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            })
            if (result.status === 200) {
                const data = await result.json()
                setUser({
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    role: data.role
                })
            }
            else if (result.status === 401) {
                const refreshResult = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ 
                        refreshToken: refreshToken
                    })
                })
                if (refreshResult.status === 200) {
                    const refreshData = await refreshResult.json()
                    localStorage.setItem("accessToken", refreshData.accessToken)
                    localStorage.setItem("refreshToken", refreshData.refreshToken)
                    accessToken = refreshData.accessToken
                    const retryResult = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
                        method: "GET",
                        headers: {
                            "Authorization": `Bearer ${accessToken}`
                        }
                    })
                    if (retryResult.status === 200) {
                        const data = await retryResult.json()
                        setUser({
                            id: data.id,
                            name: data.name,
                            email: data.email,
                            role: data.role
                        })
                    }
                }
                else if (refreshResult.status === 403) {
                    localStorage.removeItem("accessToken")
                    localStorage.removeItem("refreshToken")
                }
            }
            else if (result.status === 500) {
                console.error("Server error while fetching user data")
            }
        }
        loadUser()
    }, [])


    return (
        <div>
        
        </div>
    )
}
