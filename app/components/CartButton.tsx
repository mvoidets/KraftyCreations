'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Modal from './Modal'; 

const CartButton = () => {
  const [cartCount, setCartCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      setCartCount(cart.length);
    }
  }, []);

  const handleClick = () => {
    // Open modal on click
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false); // Close modal
  };

  const checkout = () => {
    router.push('/checkout'); // Redirect to checkout page
  };

  return (
    <>
      <button onClick={handleClick} style={styles.cartButton}>
        <span>🛒</span> Cart ({cartCount})
      </button>
      {modalOpen && (
        <Modal closeModal={closeModal} checkout={checkout} />
      )}
    </>
  );
};

import { CSSProperties } from 'react';

const styles: { cartButton: CSSProperties } = {
  cartButton: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '15px',
    fontSize: '18px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  }
};

export default CartButton;
