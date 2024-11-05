import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './cart.css';

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.title}</h3>
                                    <p>Price: ${item.price}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                    <button onClick={handleCheckout} className="checkout-button">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
