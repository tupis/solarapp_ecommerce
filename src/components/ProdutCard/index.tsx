"use client";

import { useCart } from "@/context/CartContext";
import { formatCurrencyNumber } from "@/utils/formatCurrency";
import getDiscountedPrice from "@/utils/getDiscountPrice";
import Link from "next/link";

interface Props {
  product: {
    id: number;
    name: string;
    price: number;
    discount: number;
    image: string;
    type?: string;
  };
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div
      key={product.id}
      className="relative border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
    >
      {product.discount > 0 && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold rounded-full px-3 py-1">
          {product.discount}% OFF
        </span>
      )}
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300 rounded-t-xl cursor-pointer"
        />
      </Link>
      <div className="p-6">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-800 cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <div className="mt-2 text-gray-600 flex items-center justify-between">
          <span className="text-lg font-semibold text-teal-500">
            {formatCurrencyNumber(
              getDiscountedPrice(product.price, product.discount)
            )}
          </span>
          {product.discount > 0 && (
            <span className="text-sm line-through text-gray-400">
              {formatCurrencyNumber(product.price)}
            </span>
          )}
        </div>
        {/* Exibindo o tipo de produto */}
        {product.type && (
          <div className="mt-2 text-sm text-gray-500">Tipo: {product.type}</div>
        )}
        <button
          onClick={() =>
            addToCart({
              id: product.id,
              image: product.image,
              name: product.name,
              price: getDiscountedPrice(product.price, product.discount),
              quantity: 1,
            })
          }
          className="mt-4 w-full py-2 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600 transition-colors duration-300"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
