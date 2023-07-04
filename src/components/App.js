import  { useState,useEffect } from 'react';
import data from '../data/data.json';
import Filter from './Filter';
import ProductItemCard from './ProductItemCard';
import CartButton from './CartButton';
import Loader from './Loader';
import CartPage from './CartPage';

const App = () => {

  const [productData, setProductData] = useState([]); 
  const [cartData,setCartData] = useState([]);
  const [isAddedToCart, setAddedCart] = useState(false);

  const[cartButton,setCartButton] = useState(false);

  useEffect(() => {
    setProductData(data);
  }, []);

  const handleFilter = (e) => {
    let filterData = data.filter((el) =>
      el.availableSizes.includes(e.target.innerText));
    setProductData(filterData);
  };

  const handleCart = () => {
    setCartButton(!cartButton);
  }

  const handleCartCard = (title,id) => {
    let newArr = [...cartData];
    newArr.push(data.reduce((acc,cv) => {
      if(cv.title === title){
        cv.src = id;
        acc.push(cv)
      }
      return acc;
    },[])[0]);
    setCartData(newArr);
  };
  
  const removeCartCard = (title,data) => {
    let newArr = [...cartData];
    newArr.splice(newArr.findIndex(el => el.title === title),1);
    setCartData(newArr);
    setAddedCart(!isAddedToCart);
}


  return (
    <>
      <h1>Shopping Cart</h1>
      <h2>{productData.length} Products available</h2>
      <div className="main">
        <Filter handleFilter={handleFilter} />
        <div className="cards">
        {
            productData ?  productData.map((product) => {
                return <ProductItemCard
                isAddedToCart = {isAddedToCart}  
                cartData = {cartData}
                handleCart = {handleCart}
                 {...product}
                  handleCartCard = { handleCartCard } />   
              }) : <Loader width={200} />
        } 
        </div>
        {cartButton ? <CartPage 
        data = { cartData }
        handleCart = { handleCart }
        removeCartCard = {removeCartCard }   /> 
        : <CartButton 
          handleCart = { handleCart } 
          products = {cartData.length}/>}
      </div>
    </>
  );
};
export default App;
