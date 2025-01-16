
// "use client";
// import { useCart } from '../context/CartContext';
// import CartItem from '../components/CartItem'; // Import CartItem component
// import styles from '../styles/CartPage.module.css';

// const CartPage = () => {
//   const { cart, setCart } = useCart(); // Use the cart and setCart from context

//   // Calculate subtotal and number of items in cart
//   const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   const numberOfItems = cart.reduce((total, item) => total + item.quantity, 0);

//     // Remove item from cart
//     const removeItem = (id: number) => {
//       const updatedCart = cart.filter(cartItem => cartItem.id !== id);
//       setCart(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };
  
//   return (
//     <div className={styles.cartPage}>
//       <h1>Your Cart dear</h1>

//       {/* List of cart items */}
//       <div className={styles.cartItemsList}>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           cart.map((item) => (
//             <CartItem 
//             key={item.id} 
//             item={item} 
//             removeItem={removeItem}
//             handleQuantityChange={handleQuantityChange} 
//              />
//           ))
//         )}
//       </div>
      

//       {/* Cart Summary */}
//       <div className={styles.cartSummary}>
//         <p>Total Items: {numberOfItems}</p>
//         <p>Subtotal: ${subtotal.toFixed(2)}</p>
//         <button className={styles.checkoutButton}>Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
