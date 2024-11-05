import React from 'react';
import { useLocation } from 'react-router-dom';

const Orders = () => {
    const location = useLocation();
    const { orderId, paymentId, status, products } = location.state || {}; // Get order details from location state

    return (
        <div>
            <h2>Order Confirmation</h2>
            {orderId ? (
                <div>
                    <p><strong>Order ID:</strong> {orderId}</p>
                    <p><strong>Payment ID:</strong> {paymentId}</p>
                    <p><strong>Status:</strong> {status}</p>

                    <h3>Purchased Products:</h3>
                    {products && products.length > 0 ? (
                        <ul>
                            {products.map((product) => (
                                <li key={product.id}>
                                    <p><strong>{product.title}</strong> - ${product.price.toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No products found in this order.</p>
                    )}
                </div>
            ) : (
                <p>No order details available.</p>
            )}
        </div>
    );
};

export default Orders;
