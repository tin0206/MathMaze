import { useUser } from "@/store/useUser"

export function useLogout() {
  const { setUser } = useUser()

  const logout = async () => {
    const refreshToken = localStorage.getItem("refreshToken")
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    })

    if (result.status === 500) {
      console.error("Failed to logout")
      return
    }

    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    setUser(null)
  }

  return logout
}