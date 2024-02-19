import React, { useState } from 'react';
import './App.css'; 
import NavBar from './NavBar';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css'; 

  
function App() {
  let [cartItems, setCartItems] = useState([]);

  const addToCart = (productName) => {
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { name: productName, quantity: 1 }]);
    }
  };

  const removeFromCart = (productName) => {
    const updatedCart = cartItems.map(item =>
      item.name === productName ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    );

    const filteredCart = updatedCart.filter(item => item.quantity > 0);

    setCartItems(filteredCart);
  };

  const isItemInCart = (productName) => {
    return cartItems.some(item => item.name === productName);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <div>
      {/* Navigation */}  
     <NavBar totalQuantity={totalQuantity}/>
      {/* Header */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>

      {/* Section */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* Product Cards */}
            {/* Repeat the following block for each product */}
            {products.map((product, index,isItemInCart) => (
               <ProductCard product={product} index={index} cartItems={cartItems} setCartItems={setCartItems}  key={index}/>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
        </div>
      </footer>
    </div>
  );
}

// Product data
const products = [
  {
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$40.00 - $80.00',
  },
  {
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$18.00',
    sale: true,
    reviews: true,
  },
  {
    name: 'Sale Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$25.00',
    sale: true,
  },
  {
    name: 'Popular Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$40.00',
    reviews: true,
  },
  {
    name: 'Sale Items',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$25.00',
    sale: true,
  },
  {
    name: 'Fancy Products',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$120.00 - $280.00',
  },
  {
    name: 'Special Items',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$18.00',
    sale: true,
    reviews: true,
  },
  {
    name: 'Popular Items',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    discountedPrice: '$40.00',
    reviews: true,
  },
];

export default App;