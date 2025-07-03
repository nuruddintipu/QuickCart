import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../features/productsSlice";
import ProductCard from "../components/product/ProductCard";
import { Link } from "react-router-dom";

const Homepage = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    const featuredProducts = products.slice(0, 6);

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Welcome to QuickCart</h2>

            <h4 className="mb-3">Featured Products</h4>

            {loading && <p>Loading featured products...</p>}
            {error && <Alert variant="danger">{error}</Alert>}

            <Row xs={1} sm={2} md={3} lg={3} className="g-4">
                {featuredProducts.map((product) => (
                    <Col key={product.id}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>

            <div className="text-center mt-4">
                <Button as={Link} to="/products" variant="outline-primary">
                    View All Products
                </Button>
            </div>
        </Container>
    );
};

export default Homepage;
