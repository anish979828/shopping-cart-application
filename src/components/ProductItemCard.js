import { useState } from 'react';

const ProductItemCard = (props) => {
  const { title, price, installments, id, currencyFormat,handleCartCard,handleCart,isAddedToCart} = props;

  
  
  const [isHover, setHover] = useState(false);

  const handleAddToCart = (e,title,src) => {
    if(e.target.innerText === "Add To Cart"){
      handleCartCard(title,src);
      e.target.innerText = "Go To Cart";
    }else{
      handleCart();
    }
  };


  const handleHover = () => {
    setHover(true);
  };

  const handleHoverOut = () => {
    setHover(false);
  };


  return (
    <div
      className="product_item_card"
      style={{ textAlign: 'center', lineHeight: '2' }}
      onMouseOver={handleHover}
      onMouseOut={handleHoverOut}
    >
      <figure style={{ background: 'aliceblue' }}>
        <img
          src={require(`../products/${id + 1}${
            isHover ? `back.jpeg` : `.jpeg`
          }`)}
          height="400px"
          width="250px"
          style={{ objectFit: 'cover' }}
          alt="img1"
        />
      </figure>
      
      <figcaption>{title}</figcaption>

      <p>
        {currencyFormat}
        <strong>{String(price).slice(0, 2)}</strong>
        {String(price).substring(4)}
      </p>
      <span>{`or ${installments} X $ ${String(price / installments).slice(0, 4 )}`}</span>
      <br/>

      <button
        style={{
          color: 'white',
          border: 'none',
          padding: '10px 10px',
          width: '80%',
          background: isHover ? 'orange' : 'black',
        }}
        onClick={ (e) => handleAddToCart(e,title,(id+1)) }
      >
        { isAddedToCart ? 'Go To Cart' : 'Add To Cart'}
      </button>
    </div>
  );
};

export default ProductItemCard;
