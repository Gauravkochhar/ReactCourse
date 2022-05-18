import { useSelector } from "react-redux"
import { EcommerceProduct } from "./ecommerceProduct";

export const EcommerceProductList = () => {
    const productList = useSelector((store) => store.productStock.products);
    return <>
        { productList.map((productInfo, i) => {
            return <EcommerceProduct key={i} productInfo={productInfo}/>
        })}
    </>
}