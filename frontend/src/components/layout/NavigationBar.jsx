import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ROUTE_PATHS} from "../../routes/routeConstants.jsx";

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="fw-bold">
                    QuickCart
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="quickcart-navbar" />
                <Navbar.Collapse id="quickcart-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link  as={Link} to={ROUTE_PATHS.HOMEPAGE}>Home</Nav.Link>
                        <Nav.Link as={Link} to={ROUTE_PATHS.PRODUCTS}>Products</Nav.Link>
                        <Nav.Link as={Link} to="/">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;