import React from "react";

const ProductCard = ({ product }) => {
    const { name, category, price, description } = product;
    return (
        <div className="card bg-gray-600 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="text-left">
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <p className="badge badge-outline">{category}</p>
                </div>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
