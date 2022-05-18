export const CartItem = ({ cartInfo }) => {
    return <>
        <p>Product Id: {cartInfo.productId}</p>
        <p>Product Name: {cartInfo.productName}</p>
        <p>Product Price: {cartInfo.productPrice}</p>
        <p>Product Quantity: {cartInfo.productQuantity}</p>
    </>;
}