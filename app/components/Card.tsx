import { useCart } from '../context/CartContext';
import styles from '../styles/Card.module.css';
import Image from 'next/image'

interface Product {
  id:number;
  name: string;
  description: string;
  image: string;
  price: number;  
  quantity: number;
}

interface CardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

export default function Card({ product }: CardProps) {
  
  const { addToCart } = useCart(); // Get addToCart from context

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      image: product.image,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
    };
    addToCart(productToAdd); // Use addToCart from context
  };
  return (
    <div>
      <div className={styles.card} >
        <Image 
        className={styles.cardImage} 
        src={product.image} 
        alt={product.name} 
        width={200}
        height={200}/>
        <div className={styles.cardContent}>
          <h3>{product.name}</h3>
          {/* <p>{product.description}</p>
          <p><strong>Tags:</strong> {product.tags.join(', ')}</p> */}
          <p><strong>Price: </strong>${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
