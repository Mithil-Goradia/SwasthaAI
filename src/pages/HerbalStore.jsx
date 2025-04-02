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
    <div className="herbal-store">
      <Navbar />

      <div className="store-banner">
        <h1>Herbal Store</h1>
        <p>Explore premium Ayurvedic herbs & wellness kits tailored to your needs.</p>
      </div>

      <div className="flash-sale-banner">
        <div className="flash-sale-content">
          <h2>Flash Sale ✨</h2>
          <h1 className="discount">25% OFF</h1>
          <p>On selected Ayurvedic wellness kits</p>
          <button className="buy-now-btn">Buy Now!</button>
        </div>
        <div className="flash-sale-image">
          <img src="/images/wellness-kit.jpg" alt="Wellness Kit" />
        </div>
      </div>

      <div className="store-container">
        <div className="store-sidebar">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search herbs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-filter">
            <h3>Categories</h3>
            <ul>
              <li className={activeCategory === "all" ? "active" : ""} onClick={() => setActiveCategory("all")}>
                All Products
              </li>
              <li className={activeCategory === "herbs" ? "active" : ""} onClick={() => setActiveCategory("herbs")}>
                Herbs & Powders
              </li>
              <li className={activeCategory === "kits" ? "active" : ""} onClick={() => setActiveCategory("kits")}>
                Wellness Kits
              </li>
            </ul>
          </div>

          <div className="dosha-filter">
            <h3>Filter by Dosha</h3>
            <ul>
              <li>Vata</li>
              <li>Pitta</li>
              <li>Kapha</li>
            </ul>
          </div>
        </div>

        <div className="products-container">
          <h2>Popular Collection</h2>
          <div className="products-grid">
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

