import cartstyles from "./cartstyles.css";
const CartItemCard = () => {
    return (
        <div className="cart_item_card">
            <figure>
                <img src={require("./img1.jpeg")}></img>
            </figure>
            <figcaption>
                <p>Basic Cactus White T-shirt</p>
                <strong>X|Wine</strong> <br>
                </br>
                <strong>Quantity:1</strong>
            </figcaption>
            <div>
              <i class="fa-solid fa-xmark"></i>
              <p>$13.25</p>
              
              <span>-</span>
              <span>+</span>
            </div>
        </div>
    )
}
export default CartItemCard;