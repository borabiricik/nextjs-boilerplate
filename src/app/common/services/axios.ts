import axios from "axios"
import { getCookie } from "cookies-next"
import { cookies } from "next/headers"
const token = getCookie("token", { httpOnly: true, secure: true })
if (typeof window !== "undefined") console.log("client side")
else console.log("server side")

export const instance = axios.create({
  baseURL: "REPLACE",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
})

instance.interceptors.response.use(
  (response) => {
    if (
      response.config.method?.toLowerCase() === "put" &&
      response.config.method?.toLowerCase() === "post"
    )
      return response
    const { data } = response
    return data
  },
  (error) => {
    console.log(error.response.data)
    return Promise.reject(error)
  }
)

instance.interceptors.request.use((config) => {
  const cookiesStore = cookies()
  const token = cookiesStore.get("token")?.value
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance
