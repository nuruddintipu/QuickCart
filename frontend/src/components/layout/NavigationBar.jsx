import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ROUTE_PATHS} from "../../routes/routeConstants.jsx";
import CartModal from "../modals/CartModal.jsx";

const NAV_LINKS = [
    { label: "Home", routePath: ROUTE_PATHS.HOMEPAGE},
    { label: "Products", routePath: ROUTE_PATHS.PRODUCTS}
];

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold">
                    QuickCart
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="quickcart-navbar-nav" />

                <Navbar.Collapse id="quickcart-navbar">
                    <Nav className="ms-auto mb-2 mb-lg-0 text-dark align-items-center">
                        {NAV_LINKS.map(({ label, routePath }) => (
                            <Nav.Link key={label} as={Link} to={routePath}>{label}</Nav.Link>
                        ))}

                        <CartModal />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;