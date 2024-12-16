// src/contexts/ModalContext.tsx
import React, { createContext, useContext, useState } from 'react'
import { Product } from '../../../types'

interface ModalContextProps {
    product: Product | null
    isOpen: boolean
    openModal: (product: Product) => void
    closeModal: () => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [product, setProduct] = useState<Product | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    const openModal = (product: Product) => {
        setProduct(product)
        setIsOpen(true)
    }

    const closeModal = () => {
        setProduct(null)
        setIsOpen(false)
    }

    return (
        <ModalContext.Provider value={{ product, isOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) throw new Error('useModal must be used within a ModalProvider')
    return context
}
