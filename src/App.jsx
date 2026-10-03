import { useState } from "react";
import "./App.css";
import keyboardImage from "./assets/keyboard.jpg";
import mouseImage from "./assets/mouse.jpg";
import hubImage from "./assets/usb-hub.jpg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Mechanical Keyboard",
      price: 79.99,
      image: keyboardImage,
      description: "A comfortable mechanical keyboard for work and gaming.",
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: 49.99,
      image: mouseImage,
      description: "A fast and precise mouse designed for gaming.",
    },
    {
      id: 3,
      name: "USB-C Hub",
      price: 39.99,
      image: hubImage,
      description: "Connect multiple devices with this compact USB-C hub.",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Added to cart:", product);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const cartTotal = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <div className="app">
      <Header storeName="MatiasTech" cartCount={cart.length} />

      <Hero
        title="Welcome to MatiasTech"
        subtitle="Find the latest technology and accessories for your setup."
        callToActionText="Shop Now"
      />

      <main className="products">
        <h2>Featured Products</h2>

        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <section className="cart-section">
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <>
              <div className="cart-list">
                {cart.map((product, index) => (
                  <CartItem
                    key={`${product.id}-${index}`}
                    product={product}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>

              <div className="cart-total">
                <h3>Total: ${cartTotal.toFixed(2)}</h3>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer
        storeName="MatiasTech"
        email="contact@matiastech.com"
        phone="(323) 202-3122"
      />
    </div>
  );
}

export default App;