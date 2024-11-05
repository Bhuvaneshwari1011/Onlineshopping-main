import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext'; 
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart(); 

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product); 
        console.log("Added to cart:", product);
    };

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <div className="button-group">
                        <button onClick={() => handleAddToCart(product)} className="add-to-cart">
                            Add to Cart
                        </button>
                        <Link to={`/product/${product.id}`} className="view-details">
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
