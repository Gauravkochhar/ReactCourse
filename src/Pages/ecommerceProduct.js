import { useDispatch } from "react-redux"
import { cartActions } from "../store/Slice/cartSlice";

export const EcommerceProduct = (props) => {

    const dispatch = useDispatch();
    
    const addProductToCart = () => {
        dispatch(cartActions.addCartItem(props.productInfo));  
    }

    return <>
        <p>{props.productInfo.productName}</p> <button type="button" onClick={addProductToCart}>Add to Cart</button>
    </>
}