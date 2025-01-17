
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Sidebar.module.css'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
    {/* Hamburger icon */}
    <button className={styles.hamburger} onClick={toggleMenu}>
      &#9776; 
    </button>
    
    <h3 className={styles.heading}>Menu</h3>
    <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <li><Link href="/" className={styles.link}>Home</Link></li>
        <li><Link href="/products/resin" className={styles.link}>Resin Crafts</Link></li>
        <li><Link href="/products/acrylic" className={styles.link}>Acyrlic Paintings</Link></li>
        <li><Link href="/products/vinyl" className={styles.link}>T-shirt, Mugs & More</Link></li>
      </ul>
     
    </aside>
  );
};

export default Sidebar;
