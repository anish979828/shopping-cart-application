// import cartstyles from "./cartstyles.css";

import { useState } from "react";

const CartItemCard = (props) => {

    const { title,removeCartCard,src,description,price,handleTotal} = props;

    const [quantity,setQuantity] = useState(1);

    const handleDecrease = (addOn) => {
      handleTotal(addOn);
      let newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }

    const handleIncrease = (addOn) => {
      handleTotal(addOn,"increase")
      let newQuantity = quantity + 1;
      setQuantity(newQuantity);
    }

    return (
        <div className="cart_item_card">
            <figure>
                <img src={require(`../products/${src}.jpeg`)}></img>
            </figure>
            <figcaption>
                <p>{title}</p>
                <strong>{description}</strong> <br>
                </br>
                <strong>Quantity:{quantity}</strong>
            </figcaption>
            <div>
              <p>${price}</p>
           {quantity < 2 ?  <i onClick={() => {
              removeCartCard(title)
            }} class="fa-solid fa-trash"></i> : <button onClick={() => handleDecrease(price)}>-</button>}
              <button onClick={() => handleIncrease(price)}>+</button>
            </div>
        </div>

    )
}
export default CartItemCard;