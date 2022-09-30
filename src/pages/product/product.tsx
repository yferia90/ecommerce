import { useParams, useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    const params = useParams();

    const handlerCick = () => {
        return navigate(`/product/${66}`);
    }

    return (
        <>
        <div>Listado de producto {params.productId}</div>
        <button onClick={handlerCick}>Enviar</button>
        </>        
    )
}

export default Product;