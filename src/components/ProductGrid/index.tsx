"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProdutCard";
import { formatCurrencyString } from "@/utils/formatCurrency";
import getDiscountedPrice from "@/utils/getDiscountPrice";
import { productsHomePage } from "@/app/mocks/product";

const PRODUCTS_PER_PAGE = 8;

export default function ProductGrid() {
  const [visibleProducts, setVisibleProducts] = useState(
    productsHomePage.slice(0, PRODUCTS_PER_PAGE)
  );
  const [filteredProducts, setFilteredProducts] = useState(productsHomePage);
  const [page, setPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("");

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        loadMoreProducts();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef.current, isLoading]);

  const loadMoreProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      const nextPage = page + 1;
      const newProducts = filteredProducts.slice(
        0,
        nextPage * PRODUCTS_PER_PAGE
      );
      setVisibleProducts(newProducts);
      setPage(nextPage);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    let filtered = productsHomePage.filter(
      (product) =>
        (selectedType ? product.type === selectedType : true) &&
        getDiscountedPrice(product.price, product.discount) * 100 >=
          priceRange[0] &&
        getDiscountedPrice(product.price, product.discount) * 100 <=
          priceRange[1] &&
        (selectedBrand ? product.brand === selectedBrand : true)
    );

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder === "price-asc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "best-sellers") {
      filtered = filtered.sort((a, b) => b.sold - a.sold);
    } else if (sortOrder === "power-asc") {
      filtered = filtered.sort((a, b) => a.power - b.power);
    } else if (sortOrder === "power-desc") {
      filtered = filtered.sort((a, b) => b.power - a.power);
    }

    setFilteredProducts(filtered);
    setVisibleProducts(filtered.slice(0, PRODUCTS_PER_PAGE));
    setPage(1);
  }, [selectedType, priceRange, selectedBrand, sortOrder, searchQuery]);

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Filtros */}
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Filtros</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
          {/* Filtro por tipo */}
          <div className="flex flex-col">
            <label className="block text-gray-700 font-medium mb-2">
              Tipo de Produto
            </label>
            <select
              className="border p-2 rounded-lg shadow-inner bg-white hover:bg-gray-50 transition duration-300 ease-in-out w-full"
              value={selectedType || ""}
              onChange={(e) => setSelectedType(e.target.value || null)}
            >
              <option value="">Todos os tipos</option>
              <option value="Inversores">Inversores</option>
              <option value="Módulos">Módulos</option>
              <option value="Estruturas">Estruturas</option>
              <option value="Elétricos">Elétricos</option>
            </select>
          </div>

          {/* Filtro por faixa de preço */}
          <div className="flex flex-col">
            <label className="block text-gray-700 font-medium mb-2">
              Faixa de preço (R$)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                className="border p-2 rounded-lg shadow-inner bg-white hover:bg-gray-50 transition duration-300 ease-in-out w-full"
                placeholder="Min"
                value={formatCurrencyString(priceRange[0].toString())}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const numericValue = inputValue.replace(/\D/g, "");
                  setPriceRange([parseFloat(numericValue), priceRange[1]]);
                }}
                min="0"
              />

              <input
                type="text"
                className="border p-2 rounded-lg shadow-inner bg-white hover:bg-gray-50 transition duration-300 ease-in-out w-full"
                placeholder="Max"
                value={formatCurrencyString(priceRange[1].toString())}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const numericValue = inputValue.replace(/\D/g, "");
                  setPriceRange([priceRange[0], parseFloat(numericValue)]);
                }}
                max={priceRange[1]}
              />
            </div>
          </div>

          {/* Filtro por marca */}
          <div className="flex flex-col">
            <label className="block text-gray-700 font-medium mb-2">
              Marca
            </label>
            <select
              className="border p-2 rounded-lg shadow-inner bg-white hover:bg-gray-50 transition duration-300 ease-in-out w-full"
              value={selectedBrand || ""}
              onChange={(e) => setSelectedBrand(e.target.value || null)}
            >
              <option value="">Todas as marcas</option>
              <option value="Marca A">Marca A</option>
              <option value="Marca B">Marca B</option>
              <option value="Marca C">Marca C</option>
            </select>
          </div>

          {/* Ordenação */}
          <div className="flex flex-col">
            <label className="block text-gray-700 font-medium mb-2">
              Ordenar por
            </label>
            <select
              className="border p-2 rounded-lg shadow-inner bg-white hover:bg-gray-50 transition duration-300 ease-in-out w-full"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
              <option value="best-sellers">Mais vendidos</option>
              <option value="power-asc">Menos potência</option>
              <option value="power-desc">Mais potência</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Lazy loading */}
      {visibleProducts.length < filteredProducts.length && (
        <div ref={loaderRef} className="mt-8 flex justify-center">
          {isLoading ? (
            <span className="text-gray-500">Carregando mais produtos...</span>
          ) : (
            <span className="text-gray-500">
              Deslize para carregar mais produtos...
            </span>
          )}
        </div>
      )}
    </div>
  );
}
