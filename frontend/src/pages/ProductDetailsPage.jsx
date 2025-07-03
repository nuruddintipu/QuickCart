import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../features/cartSlice.jsx";
import {toast} from "react-toastify";
import {useEffect} from "react";
import {fetchProductById} from "../features/productsSlice.jsx";
import {Button, Col, Container, Row, Image} from "react-bootstrap";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedProduct, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);


    if(loading) return <div className="text-center mt-5">Loading.....</div>
    if(error) return <div className="text-center mt-5">{error}</div>;
    if(!selectedProduct) return null;

    const { name, description, price, image, category, brand, rating, stock } = selectedProduct;

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <Image src={image} className="img-fluid h-100" alt={name} />
                </Col>
                <Col md={6}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h4>${price}</h4>
                    <p><strong>Category:</strong> {category}</p>
                    <p><strong>Brand:</strong> {brand}</p>
                    <p><strong>Rating:</strong> ⭐ {rating}</p>
                    <p><strong>In Stock:</strong> {stock} items</p>

                    <Button variant="primary" onClick={()=> {
                        dispatch(addToCart(selectedProduct));
                        toast.success("Product Added");
                    }}>
                        Add To Cart
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetailsPage;