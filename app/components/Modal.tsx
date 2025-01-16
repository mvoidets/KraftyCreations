'use client';

import { useState, useEffect, CSSProperties } from 'react';
import CartItem from './CartItem';
import '../styles/CartPage.module.css';
import { useRouter } from 'next/navigation';


interface ModalProps {
  closeModal: () => void;
  checkout: () => void;
}

const Modal = ({ closeModal }: ModalProps) => {
  const router = useRouter(); // Initialize the useRouter hook
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  interface CartItemType {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    quantity: number;

  };


  // Function to fetch the cart from localStorage and update the state
  const fetchCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
    }
  };

  // Update cart from localStorage whenever the component mounts or localStorage is updated
  useEffect(() => {
    fetchCartFromLocalStorage();
  }, []);  

  useEffect(() => {
    // Fetch cart items from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setCartItems(updatedCart);  // Update the React state
    localStorage.setItem('cart', JSON.stringify(updatedCart));  // Update localStorage
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  // Calculate subtotal and total items in the cart
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const numberOfItems = cartItems.reduce((total, item) => total + item.quantity, 0);  // Sum of quantities

  //checkout page
  const handleCheckout = () => {
    closeModal();
    // Navigate to the checkout page
    router.push('/CheckoutPage'); // Make sure the checkout page is at /checkout
  };

  console.log('Local storage quantity', cartItems);
  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <button onClick={closeModal} style={styles.closeButton}>X</button>
        <h2>Your Cart </h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div style={styles.cartCard}>
            <div style={styles.cartItems}>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeItem={removeItem}
                  handleQuantityChange={handleQuantityChange} />
              ))}
            </div>
            <div style={styles.cartSummary}>
              <p>Total Items: {numberOfItems}</p>
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
            </div>
            <button onClick={handleCheckout} style={styles.checkoutButton}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
const styles: { [key: string]: CSSProperties } = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    maxWidth: '600px',
    width: '100%',
    borderRadius: '8px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column',

  },
  checkoutButton: {
    marginTop: '20px',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',

  },
};

export default Modal;
