
const CartButton = (props) => {
    return (
        <div className="cart_popup" onClick={props.handleCart}>
           <i class="fa-solid fa-cart-shopping"></i>
            <span>{ props.products }</span>
        </div>
    )
};


export default CartButton;