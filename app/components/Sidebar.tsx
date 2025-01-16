
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css'; // Import the CSS module

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h3>Menu</h3>
      <ul>
        <li><Link href="/" className={styles.link}>Home</Link></li>
        <li><Link href="/products/resin" className={styles.link}>Resin Crafts</Link></li>
        <li><Link href="/products/acrylic" className={styles.link}>Acyrlic Paintings</Link></li>
        <li><Link href="/products/vinyl" className={styles.link}>T-shirt, Mugs & More</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
