import { useState } from "react";


const ProductItemCard = () => {
    const [isAddedToCart,setAddedCart] = useState(false);
    const [isHover,setHover] = useState(false);

    const handleAddToCart = () => {
        setAddedCart(!isAddedToCart);
    }

    const handleHover = () => {
        setHover(true);
    }

    const handleHoverOut = () => {
        setHover(false);
    }

  return (
    <div className="product_item_card"
     style={{textAlign:"center",lineHeight:"2",width:"400px"}}
     onMouseOver={handleHover}
     onMouseOut={handleHoverOut}
     >
        <figure style={{background:"aliceblue"}}>
            <img src={require(isHover ? "./img1.jpeg":"./img2.webp")} height="400px" width="250px" style={{objectFit:"cover"}} alt="img1"/>
        </figure>
        
        <figcaption>Crazy Clothes </figcaption>
        <p>$<strong>10</strong>.90</p>
        <span>or 9 X$1.21</span><br/>
        <button 
        style={{color:"white",border:"none",padding: "10px 10px",width:"80%",background:isHover ? "orange" : "black"}}
        onClick={handleAddToCart}
        >{isAddedToCart ? "Go To Cart" : "Add To Cart"}</button>
    </div>
  );
}

export default ProductItemCard;