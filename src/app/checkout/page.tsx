"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const CheckoutPage = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Seu carrinho está vazio.
        </h1>
        <Link href="/" className="text-teal-500 hover:text-teal-700">
          Voltar para a loja
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Revisão do Pedido
      </h1>

      {/* Listagem dos Produtos no Carrinho */}
      <div className="grid grid-cols-1 gap-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center border-b pb-4 mb-4">
            {/* Imagem do Produto */}
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-lg mr-4"
            />

            {/* Informações do Produto */}
            <div className="flex-grow">
              <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 mt-1">
                Preço unitário: R${item.price.toFixed(2)}
              </p>
              <p className="text-gray-600 mt-1">
                Quantidade:
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateCartItemQuantity(item.id, parseInt(e.target.value))
                  }
                  className="ml-2 border rounded-lg p-1 w-16 text-center"
                />
              </p>
              <p className="text-teal-500 font-bold mt-2">
                Subtotal: R${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            {/* Botão para remover item */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              Remover
            </button>
          </div>
        ))}
      </div>

      {/* Resumo Final */}
      <div className="flex justify-between items-center border-t pt-4 mt-6">
        <h3 className="text-2xl font-bold text-gray-900">Total:</h3>
        <p className="text-3xl text-teal-500 font-bold">
          R${getTotalPrice().toFixed(2)}
        </p>
      </div>

      {/* Botão para Finalizar a Compra */}
      <button className="mt-8 w-full py-3 bg-teal-500 text-white font-medium rounded-lg shadow hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105">
        Finalizar Compra
      </button>

      {/* Link para continuar comprando */}
      <div className="mt-4">
        <Link href="/" className="text-teal-500 hover:text-teal-700">
          Continuar Comprando
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
