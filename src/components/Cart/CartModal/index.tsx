"use client";

import React, { useMemo } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { formatCurrencyNumber } from "@/utils/formatCurrency";
import { FaTrash } from "react-icons/fa";

interface CartModalProps {
  onClose: () => void;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function CartModal({ onClose }: CartModalProps) {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (item: CartItem, amount: number) => {
    const newQuantity = item.quantity + amount;
    if (newQuantity > 0) {
      updateCartItemQuantity(item.id, newQuantity);
    }
  };

  const totalPrice = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end z-50">
      <div className="w-full sm:w-1/3 bg-white p-6 shadow-lg rounded-l-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Seu Carrinho</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-lg">Seu carrinho está vazio =(</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div>
                    <h3 className="text-lg font-medium text-gray-700">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {formatCurrencyNumber(item.price)} x {item.quantity} =
                      {formatCurrencyNumber(item.price * item.quantity)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item, -1)}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-gray-700 font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item, 1)}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>Total</span>
                <span>{formatCurrencyNumber(totalPrice)}</span>
              </div>
              <Link href={"/checkout"}>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors font-medium">
                  Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
