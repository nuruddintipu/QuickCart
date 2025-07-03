import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllProducts} from "../features/productsSlice.jsx";
import {Alert, Container, Row} from "react-bootstrap";
import ProductCard from "../components/product/ProductCard.jsx";
import Loader from "../components/loader/Loader.jsx";

const ProductCatalogPage = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);


    if(loading) return <Loader text={"Loading..."} />

    return (
        <Container>
            <h2 className="mb-4">Product Catalog </h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <Row xs={1} sm={2} md={3} lg={4}>
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </Row>
        </Container>
    );
};

export default ProductCatalogPage;