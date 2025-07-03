import {Card, Button, Col, Row} from "react-bootstrap";
import { generatePath, Link } from "react-router-dom";
import {addToCart} from "../../features/cartSlice.jsx";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {ROUTE_PATHS} from "../../routes/routeConstants.jsx";


const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        toast.success("Product Added to Cart!");
    };
    const productDetailsPath = generatePath(ROUTE_PATHS.PRODUCT_DESCRIPTION, {id: product.id});

    return (
        <Col className="col-md-4 mb-4" key={product.id}>
            <Card style={{ width: "200px" }} className="shadow-sm d-flex flex-column">
                <Link to={productDetailsPath}>
                    <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                </Link>
                <Card.Body className="d-flex flex-column flex-grow-1">
                    <Link to={productDetailsPath}
                          className="text-decoration-none text-dark"
                    >
                        <Card.Title className="fs-6">{product.name}</Card.Title>
                    </Link>
                    <div className="mt-auto">
                        <Card.Text className="fw-semibold">${product.price.toFixed(2)}</Card.Text>
                        <Row>
                            <Button variant="primary" onClick={handleAddToCart} size="sm">Add to Cart</Button>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCard;
