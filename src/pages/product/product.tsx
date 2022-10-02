import { useParams, useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div>Listado de producto {params.productId}</div>
    )
}

export default Product;