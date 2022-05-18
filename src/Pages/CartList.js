import { useSelector } from "react-redux";
import { CartItem } from "./cartItem.functional";

export const CartList = () => {
    const cartList = useSelector((store) => store.cartStock.cartList);
    let totalAmount = 0;
    cartList.forEach((elm) => {
        totalAmount = +totalAmount + +elm.productPrice;
    });
    return <>
        <h4>Cart List (Total Amount: {totalAmount})</h4>
        { cartList.length ?
            cartList.map((item, i) => {
                return <CartItem key={i} cartInfo={item} />
            }):
            <p>Cart is empty</p>
        }
    </>
}