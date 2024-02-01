"use client"
import { useSession } from "@/app/common/hooks/useSession"

const LoginPage = () => {
  const { authenticated } = useSession()
  return (
    <div>
      <p>
        This is just a random client page ! Remove `use client` directive from
        top and go on !
      </p>
      <p>Authenticated: {String(authenticated)}</p>
    </div>
  )
}

export default LoginPage
