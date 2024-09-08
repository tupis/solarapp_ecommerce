"use client";

import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartModal from "@/components/Cart/CartModal";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <FaShoppingCart className="text-xl cursor-pointer" onClick={toggleCart} />
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full px-2">
          {cartItems.length}
        </span>
      )}
      {isOpen && <CartModal onClose={toggleCart} />}
    </div>
  );
}
