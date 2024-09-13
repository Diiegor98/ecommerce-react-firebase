import { createContext, useEffect } from "react";
import { useState } from "react";

const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart);

  const handleAddToCart = (product, count) => {
    const addedItem = { ...product, count };
    const newCart = [...cart];
    const itsInACart = newCart.find((item) => item.id === addedItem.id);

    if (itsInACart) {
      itsInACart.count += count;
    } else {
      newCart.push(addedItem);
    }

    setCart(newCart);
  };

  const cartCount = () => {
    return cart.reduce((acc, prod) => acc + prod.count, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  return (
    <CartContext.Provider
      value={{ handleAddToCart, cartCount, cart, totalPrice, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
