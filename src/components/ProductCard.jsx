import { FaStar } from "react-icons/fa"

const ProductCard = ({ product }) => {
  const { name, image, price, rating, category, description } = product

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
      <div className="h-[200px] overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="text-base text-[#333] mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-lg ${i < Math.floor(rating) ? "text-yellow-400" : "text-[#e0e0e0]"}`}
            />
          ))}
          <span className="ml-2 text-sm text-[#666]">({rating})</span>
        </div>
        <p className="text-sm text-[#666] mb-1">{category}</p>
        <p className="text-sm text-[#666] mb-4 leading-relaxed">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-[#0e5c36] font-semibold text-lg">₹ {price}</p>
          <button className="bg-[#0e5c36] text-white px-4 py-2 rounded-md text-sm hover:bg-[#4a8e6a] transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard


