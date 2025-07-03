import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllProducts} from "../features/productsSlice.jsx";
import {Alert, Container, Row} from "react-bootstrap";
import ProductCard from "../components/product/ProductCard.jsx";

const ProductCatalogPage = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    return (
        <Container>
            <h2 className="mb-4">Product Catalog </h2>

            {loading && <p>Loading...</p>}
            {error && <Alert variant="danger">{error}</Alert>}

            <Row>
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </Row>
        </Container>
    );
};

export default ProductCatalogPage;