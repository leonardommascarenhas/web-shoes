export type Product = {
    id: number
    title: string
    description: string
    image: string
    price: number
    rating: {
        count: number
        rate: number
    }
}
