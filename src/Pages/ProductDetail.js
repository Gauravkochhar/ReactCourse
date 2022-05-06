import { useParams } from "react-router-dom";

export const ProductDetail = () => {
    const params = useParams();
    console.log(params);
    return <section>
        <p>Product {params.productId}</p>
    </section>
}