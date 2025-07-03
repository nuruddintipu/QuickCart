import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../routes/routeConstants.jsx";
import CartSidebar from "../sidebar/CartSidebar.jsx";
import { useState } from "react";
import {useSelector} from "react-redux";

const NAV_LINKS = [
    { label: "Home", routePath: ROUTE_PATHS.HOMEPAGE },
    { label: "Products", routePath: ROUTE_PATHS.PRODUCTS }
];

const NavigationBar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartItems } = useSelector((state) => state.cart);

    const toggleCart = () => setIsCartOpen((prev) => !prev);

    return (
        <>
            <Navbar bg="light" expand="lg" className="shadow-sm">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold">
                        QuickCart
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="quickcart-navbar-nav" />

                    <Navbar.Collapse id="quickcart-navbar">
                        <Nav className="ms-auto mb-2 mb-lg-0 text-dark align-items-center">
                            {NAV_LINKS.map(({ label, routePath }) => (
                                <Nav.Link key={label} as={Link} to={routePath}>
                                    {label}
                                </Nav.Link>
                            ))}

                            <Nav.Link onClick={toggleCart} style={{ cursor: "pointer" }}>
                                🛒 Cart {cartItems.length > 0 && `(${cartItems.length})`}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};

export default NavigationBar;
