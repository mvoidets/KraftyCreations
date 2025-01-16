'use client';

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  image: string;
  price: number;
}

interface SearchProps {
  products: Product[];
  query: string;
  onSearch: (query: string) => void;
}

export default function Search({  onSearch }: SearchProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setQuery(query);
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for products"
        style={{ marginBottom: '20px', padding: '10px', width: '25%' }}
      />
  
    </div>
  );
}
