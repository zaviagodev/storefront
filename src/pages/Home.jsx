import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useProducts } from '../hooks/useProducts'
import { useFrappeAuth } from 'frappe-react-sdk';

const Home = () => {
    const { updateCurrentUser } = useFrappeAuth();
    const { products } = useProducts()

    useEffect(() => {
        updateCurrentUser()
    }, [updateCurrentUser])

    return (
        <>
            <header>
                <h1 className="my-4">All Products</h1>
            </header>
            <main>
                <div
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"

                >
                    {(products ?? []).map((product) => (
                        <ProductCard
                            key={product.item_code}
                            title={product.name}
                            productId={product.name}
                            price={99}
                            thumbnail={product.thumbnail ? `https://umer2002.aca.fc.zaviago.com${product.thumbnail}` : "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png"} />

                    ))}
                </div>
            </main>
        </>
    )
}

export default Home