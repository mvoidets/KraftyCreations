//import Sidebar from './components/Sidebar';
import styles from './styles/Home.module.css';
import React from 'react';


const Home = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.intro}>Welcome to my website! I am excited to share my handmade crafts with you.</h2>

      <p>
        Here at KraftyCreationsby3, I offer a variety of beautiful and unique pieces, including resin, acrylic, and vinyly die-cast work.
        we take pride in offering a unique collection of handcrafted creations designed to inspire and delight. Whether you are a collector, a gift giver, or simply someone who loves art, our resin, acrylic, and diecast pieces are made with care and attention to detail.

      </p>
      <h2 className={styles.title}><strong> Explore Our Collections:</strong></h2>
      <h2 className={styles.title}><strong>Resin Art:</strong></h2>
      <p>Our resin designs bring vibrant colors and stunning textures to life. From keychains to home decor, each piece is carefully crafted, ensuring every item is one of a kind.</p>
      <h2 className={styles.title}><strong>Acrylic Art:</strong></h2>
      <p>Bright, bold, and versatile. Our acrylic creations blend artistry and functionality, perfect for decorating your home, office, or gifting to someone special.</p>
      <h2 className={styles.title}> T-shirts, Mugs, Hats and more:</h2>
      <p> I offer custom t-shirts, mugs, and tumblers that you can personalize with your own photos, names, or designs. Whether for a special occasion or everyday use, our high-quality, customizable products make the perfect unique gift or personal item. Create something meaningful today and add your personal touch to your style!</p>
      <ul><h2 className={styles.title}>Why Shop With Us?</h2></ul>
      <li>Unique, Handmade Designs: Each piece is crafted by hand, ensuring that no two items are alike.</li>
      <li>Quality Craftsmanship: We use high-quality materials to create durable and beautiful works of art.</li>
      <li>Custom Orders: Looking for something special? We offer custom designs tailored to your preferences.</li>
      <h2 className={styles.title}>Browse Our Shop:</h2>
      <p>Explore our full collection of resin, acrylic, and diecast creations. Find the perfect piece that speaks to your style or makes the perfect gift for someone special.</p>
      <h2 className={styles.title}>Follow Us on Social Media:</h2>
      <a href="https://www.instagram.com/kraftycreationsby3/" target="_blank">
        Follow us on Instagram
      </a>
      <br></br>
      <a href="https://www.facebook.com/kraftycreationsby3" target="_blank">
        Follow us on Facebook
      </a>
      <h2 className={styles.title}>Get In Touch:</h2>
      <p>Have a question or need assistance? Drop us an
        <a href="mailto:kraftycreationsby3@gmail.com"> email
          </a>!</p>

      <p className={styles.quote}>
        “Art is not what you see, but what you make others see.” — Edgar Degas
      </p>

    </div>
  );
};

export default Home;
