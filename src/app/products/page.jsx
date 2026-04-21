import ProductCard from "@/components/ProductCard";
import React from "react";

const getProducts = async () => {
    const res = await fetch("http://localhost:5000/products", {
        next: { revalidate: 10 },
    });
    return res.json();
};

const ProductsPage = async () => {
    const data = await getProducts();
    return (
        <div className="container mx-auto bg-cyan-800 h-screen text-white text-center">
            <h2 className="text-4xl py-10">Products: {data.length}</h2>
            <div className="grid grid-cols-3 gap-6">
                {data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
