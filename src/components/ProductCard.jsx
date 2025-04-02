import { FaStar } from "react-icons/fa"

const ProductCard = ({ product }) => {
  const { id, name, image, price, rating, category, description } = product

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image || "/placeholder.svg"} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < Math.floor(rating) ? "star-filled" : "star-empty"} />
          ))}
          <span>({rating})</span>
        </div>
        <p className="product-category">{category}</p>
        <p className="product-description">{description}</p>
        <div className="product-price-cart">
          <p className="product-price">₹ {price}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

