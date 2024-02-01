import Image from "next/image"

const Button = () => {
  return (
    <div>
      <Image
        src={"https://placehold.co/400"}
        alt="dummy image"
        width={400}
        height={400}
      />
    </div>
  )
}

export default Button
