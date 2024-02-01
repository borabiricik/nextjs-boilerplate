// cypress/mocks/next/image.tsx
import type { ImageProps } from "next/image"

/**
 * Converts the next/image static image URL to a regular path.
 *
 * Example:
 *
 * /_next/static/media/404.ea2b1f50.png -> /assets/images/404.png
 */
const convertURL = (url: string) => {
  return url
    .replace(/\/_next\/static\/media\//, "/assets/images/") // Use actual images location
    .replace(/(?<=\.)(.+)(?=png|jp?eg|tiff?|png|webp|bmp|gif)/, "")
}

const Image = (props: ImageProps) => {
  const { src, ...rest } = props
  // Regular path to image resource
  if (typeof src === "string") {
    return <img {...rest} src={src} alt="image element" />
  }

  //@ts-ignore
  return <img {...rest} src={convertURL(src)} alt="image element" />
}

export default Image
