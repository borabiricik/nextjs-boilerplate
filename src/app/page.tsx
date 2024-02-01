import { getSession } from "./common/utils/getSession"

export default async function Home() {
  const token = await getSession()
  return <div>asdasd</div>
}
