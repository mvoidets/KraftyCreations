'use client';

import { useState, useEffect } from 'react';
import { resinProducts } from '../../data/Products'; // Import resin products
import Search from '../../components/Search'; // Import the search component
import Card from '../../components/Card'; // Import the Card component
import SkeletonLoader from '../../components/Skeletons'; // Import Skeleton loader component
//import Breadcrumbs from '../../components/Breadcrumbs';

export default function ResinPage() {
  const [filteredProducts, setFilteredProducts] = useState(resinProducts); // Initially set to all resin products
  const [query, setQuery] = useState(''); // Search query state
  const [loading, setLoading] = useState(true); // Loading state
  const [cart, setCart] = useState<Product[]>([]);

  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // Load cart from localStorage on page load
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);


  const handleSearch = (query: string) => {
    setQuery(query);
    const lowerCaseQuery = query.toLowerCase();
    const filtered = resinProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery) ||
        product.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)) // Search by tags
    );
    setFilteredProducts(filtered); // Update filtered products
  };
  const addToCart = (product: Product) => {
    const productToAdd ={
      id: product.id,
      name: product.name,
      image: product.image,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
    }
    const updatedCart = [...cart, productToAdd];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1>Resin Products</h1>
      <Search products={resinProducts} query={query} onSearch={handleSearch} /> {/* Search Component */}
      {loading ? (
        <SkeletonLoader /> // Show skeleton loader when loading
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredProducts.length === 0 ? (
            <p>No products found</p>
          ) : (
            filteredProducts.map((product:Product) => (
              <Card key={product.id} product={product} addToCart={addToCart} />
            ))
          )}
        </div>
      )}
    </div>
  );
}
