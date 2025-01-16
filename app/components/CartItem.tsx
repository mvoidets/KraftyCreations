"use client"
import React, { useState } from 'react'; // Import useState
//import { useCart } from '../context/CartContext';

import styles from '../styles/CheckoutPage.module.css';
import Image from 'next/image'

interface CartItemProps {
  item: {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
  };
  removeItem: (id: number) => void;
  handleQuantityChange: (id: number, newQuantity: number) => void;
}

 
const CartItem = ({ item, removeItem, handleQuantityChange  }: CartItemProps) => {
const { id, name, image, price, quantity: initialQuantity } = item;

const [quantity, setQuantity] = useState(initialQuantity);
 
  const handleRemove = () => {
    removeItem(id);  // Use removeItem from Modal
  };

const handleQuantityChangeLocal = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);  // Update local state of quantity
    handleQuantityChange(id, newQuantity);  // Call the function passed from Modal to update global cart and localStorage
  };
  return (
    <div className={styles.cartItem}>
      <Image 
       src={image} 
       alt={name} 
       className={styles.cartItemImage}
       width={300}
       height={200}
        />
      <div className={styles.cartItemDetails}>
        <p>{name}</p>
        <p>${price}</p>
      </div>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={handleQuantityChangeLocal} 
        className={styles.quantityInput}
       />
      <button onClick={handleRemove} className={styles.deleteButton}>
        Remove
      </button>
    </div>
  );
};


export default CartItem;
