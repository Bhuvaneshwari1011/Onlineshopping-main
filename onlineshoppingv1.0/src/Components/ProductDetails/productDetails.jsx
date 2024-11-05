import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const productDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    const handleAddToCart = () => {
        console.log("Added to cart:", product);
    };

    const handleBuyNow = () => {
        console.log("Proceeding to checkout for:", product);
    };

    return (
        product && (
            <div className="product-detail">
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
                <button onClick={handleBuyNow}>Buy Now</button>
            </div>
        )
    );
};

export default productDetails;
