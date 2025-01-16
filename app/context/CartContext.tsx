"use client";
import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
//import '../styles/CartButton.module.css';

// // Define cart item type
// interface CartItem {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
//   quantity: number;
// }
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number; // Quantity of the product in cart
}
// Define context types
interface CartContextType {
  cart: Product[];
  setCart: (cart: Product[]) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provide the context to the app
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    const itemExists = cart.find(item => item.id === product.id);

    if (itemExists) {
      // If item exists, increment quantity
      const updatedCart = cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      // If item doesn't exist, add it with quantity 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) return; // Prevent quantity from going below 1

    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    // <CartContext.Provider value={{ cart, setCart }}>
     <CartContext.Provider value={{ cart, addToCart, setCart,removeFromCart, updateQuantity }}> 
      {children}
    </CartContext.Provider>
  );
};


// Custom hook to use the CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
