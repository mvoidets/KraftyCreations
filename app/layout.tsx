"use client"

import { ReactNode, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import './styles/global.css';
import CartButton from './components/CartButton';
import { CartProvider } from './context/CartContext';

// Global layout for the entire site (includes sidebar, header, etc.)
export default function RootLayout({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true once component is mounted client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', height: '100vh' }}>
          {/* Render CartButton only after the component has mounted (client-side) */}
          <CartProvider>
          {isClient && <CartButton />}
          
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main
            style={{
              padding: '20px',
              position: 'relative', // Ensures content sits above background image
              zIndex: 1,
              background: 'url(/images/background2.jpg) center center / cover no-repeat', // Set the background image
              height: '100%',
              flex:1,
            }}
          >
            {children}
           
          </main>
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
