import { getSession } from "./common/utils/getSession"

export default async function Home() {
  const token = await getSession()
  console.log({ token })
  return <div>asdasd</div>
}
