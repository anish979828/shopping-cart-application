import CartItemCard from "./CartItemCard";
import CartButton from "./CartButton";
import { useState } from "react";
import Checkout from "./Checkout";

const CartPage = (props) => {
    const { data,handleCart,removeCartCard } = props; 

    const [cartData,setCartData] = useState(data);

    const [total,setTotal] = useState(cartData.reduce((acc,cv) => {
        acc+= cv.price;
        return acc;
    },0));

   const handleTotal = (addOn,operation = "decrease") => {
      if(operation === "increase"){
          let newTotal = total + addOn;
           setTotal(newTotal);
      }else{
        let newTotal = total - addOn;
           setTotal(newTotal);
      }
    };

    return (
        <div className="cart">
            <div className="cart-btn">
            <button onClick={ handleCart }>X</button>
            <CartButton products = { data.length } />
            </div>
            { data.length ?        <>
             <div className="cart-card">
             {
                 data.map(product => {
                    return(
                     <CartItemCard 
                      { ...product}
                      handleTotal = { handleTotal }
                      data = { data }
                      removeCartCard = { removeCartCard }
                    />
                    )
                 })
             }
             </div>
             <Checkout total = { total }  handleCart = {handleCart} />

            </>  : <p>No item added yet!</p>
            } 
        </div>
        )
}
export default CartPage;