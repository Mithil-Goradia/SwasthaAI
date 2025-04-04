"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import { herbProducts, wellnessKits } from "../data/products"

const HerbalStore = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filterProducts = () => {
    let filteredProducts = [...herbProducts, ...wellnessKits]

    if (activeCategory === "herbs") {
      filteredProducts = herbProducts
    } else if (activeCategory === "kits") {
      filteredProducts = wellnessKits
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    return filteredProducts
  }

  return (
    <div className="bg-[#f8f9fa] text-[#333333] font-[Poppins]">
      <Navbar />

      <div className="bg-[#e8f3ee] text-center py-16 px-5">
        <h1 className="text-4xl text-[#0e5c36] mb-4">Herbal Store</h1>
        <p className="text-[#666666] text-lg max-w-2xl mx-auto">
          Explore premium Ayurvedic herbs & wellness kits tailored to your needs.
        </p>
      </div>

      <div className="bg-[#e8f3ee] flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto my-8 rounded-xl overflow-hidden">
        <div className="p-8 flex-1">
          <h2 className="text-xl text-[#0e5c36] mb-2">Flash Sale ✨</h2>
          <h1 className="text-5xl font-bold text-[#0e5c36] my-2">25% OFF</h1>
          <p className="text-[#333]">On selected Ayurvedic wellness kits</p>
          <button className="mt-4 bg-[#0e5c36] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#4a8e6a] transition">
            Buy Now!
          </button>
        </div>
        <div className="flex-1 h-[250px] overflow-hidden">
          <img src="/wellnesskit.png" alt="Wellness Kit" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8 px-5 mb-8">
        <div className="w-full md:w-[250px] flex-shrink-0">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search herbs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-[#e0e0e0] rounded-md text-sm"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-[#0e5c36] text-lg mb-4">Categories</h3>
            <ul>
              {["all", "herbs", "kits"].map((cat) => (
                <li
                  key={cat}
                  className={`py-2 cursor-pointer transition hover:text-[#0e5c36] ${
                    activeCategory === cat ? "text-[#0e5c36] font-medium" : "text-[#333]"
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === "all"
                    ? "All Products"
                    : cat === "herbs"
                    ? "Herbs & Powders"
                    : "Wellness Kits"}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-[#0e5c36] text-lg mb-4">Filter by Dosha</h3>
            <ul>
              {["Vata", "Pitta", "Kapha"].map((dosha) => (
                <li key={dosha} className="py-2 cursor-pointer hover:text-[#0e5c36] transition">
                  {dosha}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-xl text-[#0e5c36] mb-5">Popular Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filterProducts().map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HerbalStore

