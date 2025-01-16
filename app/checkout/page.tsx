// // /pages/checkout.tsx
// 'use client';

// import { useCart } from '../context/CartContext';
// import styles from '../styles/CartPage.module.css';
// import Image from 'next/image';

// const CheckoutPage = () => {
//   const { cart } = useCart(); // Use the cart from context

//   // Calculate subtotal and number of items in cart
//   const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   const numberOfItems = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <div className={styles.checkoutPage}>
//       <h1>Checkout gggg</h1>

//       {/* List of cart items */}
//       <div className={styles.cartItemsList}>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           cart.map((item) => (
//             <div key={item.id} className={styles.cartItem}>
//               {/* <Image src={item.image} alt={item.name} className={styles.cartItemImage} /> */}
//               <div className={styles.cartItemDetails}>
//                 <p>{item.name}</p>
//                 <p>${item.price}</p>
//                 <p>Quantity: {item.quantity}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Cart Summary */}
//       <div className={styles.cartSummary}>
//         <p>Total Items: {numberOfItems}</p>
//         <p>Subtotal: ${subtotal.toFixed(2)}</p>
//         <button className={styles.submitOrderButton}>Place Order</button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
