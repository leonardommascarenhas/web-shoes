'use client'
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Card from './Card'
import { Product } from '../../../types'

interface SliderProps {
    category: string
}

export default function Slider({ category }: SliderProps) {
    const [listOfProducts, setListOfProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                `https://fakestoreapi.com/products/category/${category}?limit=3`
            )
            const products = await data.json()
            setListOfProducts(products)
            console.log(products)
        }
        fetchData()
    }, [category])

    return (
        <Swiper spaceBetween={50} slidesPerView={3}>
            {listOfProducts.map((product: Product) => (
                <SwiperSlide key={product.id}>
                    <Card
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        id={product.id}
                        alt={product.title}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
