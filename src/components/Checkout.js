const Checkout = (props) => {
    
    const  { total,handleCart } = props;
    
    return (
        <div className="cart-checkout">
        {
            <>
            <p>Total Price:{ total }</p>
            <button onClick={() => {
                alert(`Your Order Placed successfully!`)
                handleCart()
                }}>CHECKOUT</button>
            </>
        }   
        </div>
    )
}
export default Checkout;