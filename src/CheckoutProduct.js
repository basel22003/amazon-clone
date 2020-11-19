import React from "react";
import "./checkoutproduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {

      const [{ basket }, dispatch] = useStateValue();

const removeFromBasket = () => {
     dispatch({
         type: "REMOVE_FROM_BASKET",
         id: id,
     })
}

  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct-image" src={image} />
      <div className="checkoutproduct-info">
        <p className="checkoutproduct-title">{title}</p>
        <p className="checkoutproduct-price">
          <small>$</small>
          <strong>{price}</strong>
          <div className="checkoutproduct-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
