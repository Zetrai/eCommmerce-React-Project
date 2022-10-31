import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  let found = false;
  let newCartItems = cartItems.map((item) => {
    if (productToAdd.id === item.id) {
      item.quantity++;
      found = true;
    }
    return item;
  });
  if (!found) {
    return [...newCartItems, { ...productToAdd, quantity: 1 }];
  } else {
    return newCartItems;
  }
};

const removeCartItem = (cartItems, productToRemove) => {
  let newCartItems = cartItems.filter((item) => {
    if (productToRemove.id === item.id) {
      if (item.quantity === 1) return false;
      item.quantity--;
    }
    return item;
  });
  return newCartItems;
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((item) => productToClear.id !== item.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCartItem: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const clearItemFromCart = (productToRemove) => {
    setCartItems(clearCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
