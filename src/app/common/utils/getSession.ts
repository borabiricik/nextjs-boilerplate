"use server"
import { cookies } from "next/headers"

export const getSession = async () => {
  const cookiesStore = await cookies()
  const token = cookiesStore.get("token")?.value
  return token
}
