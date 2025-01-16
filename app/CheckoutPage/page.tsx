'use client';

import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Product } from '../data/Products';
import Image from 'next/image';
import styles from '../styles/CartPage.module.css';

const CheckoutPage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  // Fetch cart data from localStorage and calculate totals
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart: Product[] = JSON.parse(savedCart);
      setCart(parsedCart);

      // Calculate numberOfItems and subtotal
      const totalItems = parsedCart.reduce((total, item) => total + item.quantity, 0);
      const totalSubtotal = parsedCart.reduce((total, item) => total + item.price * item.quantity, 0);

      setNumberOfItems(totalItems);
      setSubtotal(totalSubtotal);
    }
  }, []);
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleCheckout = async () => {
    const stripe = await loadStripe('your-publishable-key-here');

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
      if (error) {
        console.error(error);
      }
    } else {
      console.error('Stripe failed to load.');
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <Image 
                src={item.image} 
                alt={item.name} 
                className={styles.cartItemImage}  
                width={300}
                height={200} />
                {item.name} - ${item.price} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <div>
            <p>Total Items: {numberOfItems}</p>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
          </div>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
