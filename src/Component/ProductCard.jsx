import React from "react";
import './ProductCard.css'

const ProductCard = ({ title, price, image }) => {
  return (
    <article className="card h-100 product-card">
      <div className="product-card__image-wrap p-3">
        <img className="card-img-top product-card__image" src={image} alt={title} />
      </div>
      <div className="card-body d-flex flex-column text-start">
        <h2 className="card-title product-card__title">{title}</h2>
        <p className="card-text product-card__price mt-auto">Rs. {Number(price).toFixed(2)}</p>
      </div>
    </article>
  )
}

export default React.memo(ProductCard)