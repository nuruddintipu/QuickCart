import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import FeaturedProducts from "./FeaturedProducts.jsx";

const Homepage = () => {


    return (
        <Container className="mt-4">
            <h2 className="mb-4 text-center">Welcome to QuickCart</h2>
            <FeaturedProducts />
        </Container>
    );
};

export default Homepage;
