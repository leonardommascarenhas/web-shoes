import Image from 'next/image'

interface CardProps {
    title: string
    image: string
    price: number
    id: number
    alt: string
}

const Card = ({ title, image, price, alt }: CardProps) => {
    return (
        <div>
            <Image src={image} alt={alt} width={300} height={300} />
            <h3>{title}</h3>
            <p>${price}</p>
        </div>
    )
}

export default Card
