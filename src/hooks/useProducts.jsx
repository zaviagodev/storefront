import React, { createContext, useContext, useState } from 'react'
import { useFrappeGetDoc, useFrappeGetDocList } from 'frappe-react-sdk';

const ProductsContext = createContext([])

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [update, setUpdate] = useState(null)
    const [newP, setNewP] = useState(null)

    // fetch all products on mount
    useFrappeGetDocList('Website Item', {
        fields: ['name', 'thumbnail', "website_image", "item_code"],
    }, "products",
        {
            isOnline: () => products.length === 0,
            onSuccess: (data) => setProducts(data)
        });

    // refetch the product that needs to be updated
    useFrappeGetDoc(
        'Website Item',
        products[update]?.name,
        products[update]?.name === undefined ? null : products[update]?.name,
        {
            onSuccess: (product) => {
                setProducts((prev) => {
                    prev[update] = product
                    return [...prev]
                })
                setUpdate(null)
            },

        }
    )

    // fetch the new product
    useFrappeGetDoc(
        'Website Item',
        newP,
        newP === undefined ? null : newP,
        {
            onSuccess: (product) => {
                const merged = [...products]
                var idx = merged.findIndex((p) => p.name === newP)
                if (idx === -1) {
                    merged.push(product)
                    setProducts(merged)
                } else {
                    merged[idx] = product
                    setProducts(merged)
                }
                setNewP(null)
            },
        }
    )


    const get = (name) => {
        // if product is already in the list, return it & refetch it in the background
        const p = products.find((product, idx) => {
            setUpdate(idx)
            return product.name === name
        })
        // if product is not in the list, return null & fetch it in the background
        if (!p) {
            setNewP(name)
        }
        return p
    }

    return (
        <ProductsContext.Provider value={{ products, setProducts, get }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)
