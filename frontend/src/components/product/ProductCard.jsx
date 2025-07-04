import {Card, Button, Col, Row} from "react-bootstrap";
import { generatePath, Link } from "react-router-dom";
import {ROUTE_PATHS} from "../../routes/routeConstants.jsx";
import {useCart} from "../../hooks/useCart.jsx";


const ProductCard = ({ product }) => {
    const { id, name, price, image } = product;
    const { add } = useCart();

    const productDetailsPath = generatePath(ROUTE_PATHS.PRODUCT_DESCRIPTION, {id: product.id});
    const formattedPrice = `${Number(price).toFixed(2)}`;

    return (
        <Col className="col-md-4 mb-4" key={id}>
            <Card style={{ width: "200px" }} className="shadow-sm d-flex flex-column">
                <Link to={productDetailsPath}>
                    <Card.Img
                        variant="top"
                        src={image}
                        alt={name}
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                </Link>

                <Card.Body className="d-flex flex-column flex-grow-1">
                    <Link to={productDetailsPath}
                          className="text-decoration-none text-dark"
                    >
                        <Card.Title
                            className="fs-6 text-truncate"
                            title={name}
                            style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                        >
                            {name}
                        </Card.Title>
                    </Link>
                    <div className="mt-auto">
                        <Card.Text className="fw-semibold">${formattedPrice}</Card.Text>
                        <Row>
                            <Button variant="primary" onClick={()=>add(product)} size="sm">Add to Cart</Button>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCard;
