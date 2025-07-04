import Loader from "../components/loader/Loader.jsx";
import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import ProductCard from "../components/product/ProductCard.jsx";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllProducts} from "../features/productsSlice.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

const FeaturedProducts = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    if (loading) return <Loader text="Loading..." />;

    if (error) return <ErrorMessage error={error} />;

    if (!products || products.length === 0)
        return (
            <Container className="mt-4">
                <div>No products available.</div>
            </Container>
        );

    const featuredProducts = products.slice(0, 8);

    return (
        <>
            <h4 className="mb-3">Featured Products</h4>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
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
        </>
    );
};

export default FeaturedProducts;
