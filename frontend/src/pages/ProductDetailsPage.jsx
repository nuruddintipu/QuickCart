import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProductById} from "../features/productsSlice.jsx";
import {Button, Col, Container, Row, Image, Alert} from "react-bootstrap";
import Loader from "../components/loader/Loader.jsx";
import {useCart} from "../hooks/useCart.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedProduct, loading, error } = useSelector((state) => state.products);
    const { add } = useCart();

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);


    if(loading) return <Loader text={"Loading..."} />

    if (error) return <ErrorMessage error={error} />;

    if(!selectedProduct) return null;

    const { name, description, price, image, category, brand, rating, stock } = selectedProduct;

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6} className="overflow-hidden">
                    <Image src={image} className="product-image img-fluid h-100" alt={name} />
                </Col>
                <Col md={6}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h4>${price}</h4>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Brand:</strong> {brand}</p>
                    <p><strong>Rating:</strong> ⭐ {rating}</p>
                    <p><strong>In Stock:</strong> {stock} items</p>

                    <Button variant="primary" onClick={()=> add(selectedProduct)}>
                        Add To Cart
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetailsPage;