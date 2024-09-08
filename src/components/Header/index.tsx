"use client";

import React, { useState } from "react";
import CartIcon from "@/components/Icons/CartIcon";
import { FaSearch } from "react-icons/fa";
import { useSearchParams, useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [search, setSearch] = useState(searchQuery);

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">Solarapp</h1>

        <div className="flex items-center w-full sm:w-auto space-x-2 mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="Pesquise pelo produto"
            className="px-3 py-2 w-full sm:w-64 text-black rounded-md focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch
            className="cursor-pointer"
            onClick={() => router.push(`?search=${search}`)}
          />
        </div>

        <div className="flex justify-end w-full sm:w-auto cursor-pointer">
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
