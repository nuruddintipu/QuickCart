import {Card, Button, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <Col className="col-md-4 mb-4" key={product.id}>
            <Card style={{ width: "200px" }} className="shadow-sm">
                <Link to="/">
                    <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                </Link>
                <Card.Body>
                    <Card.Title className="fs-6">{product.name}</Card.Title>
                    <Card.Text className="fw-semibold">${product.price.toFixed(2)}</Card.Text>
                    <Button variant="primary" size="sm">Add to Cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductCard;
