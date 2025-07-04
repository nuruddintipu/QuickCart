import React from "react";
import { Button, Table } from "react-bootstrap";
import CheckoutModal from "../modals/CheckoutModal.jsx";
import "./Sidebar.css";
import {useNavigate} from "react-router-dom";
import {ROUTE_PATHS} from "../../routes/routeConstants.jsx";
import {useCart} from "../../hooks/useCart.jsx";

const CartSidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const { cartItems, totalAmount, remove, clear, increase, decrease, showCheckout, toggleCheckout } = useCart();

    const onClickBrowseProduct = () => {
        navigate(ROUTE_PATHS.PRODUCTS);
        onClose();
    };

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                <h5>Your Cart</h5>
                <Button variant="light" size="sm" onClick={onClose}>
                    ×
                </Button>
            </div>

            <div className="p-3" style={{ overflowY: "auto", height: "calc(100vh - 100px)" }}>
                {cartItems.length === 0 ? (
                    <>
                        <p>Your cart is empty.</p>
                        <Button onClick={onClickBrowseProduct}>Browse Product</Button>
                    </>
                ) : (
                    <>
                        <Table striped bordered hover responsive size="sm" className="mb-3">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {cartItems.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>${Number(product.price).toFixed(2)}</td>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => decrease(product)}
                                            >
                                                −
                                            </Button>
                                            <span>{product.quantity}</span>
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => increase(product)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </td>
                                    <td>${(Number(product.price) * product.quantity).toFixed(2)}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => remove(product)}
                                        >
                                            x
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>

                        <div className="d-flex justify-content-between align-items-center">
                            <h5>Total: ${Number(totalAmount).toFixed(2)}</h5>
                        </div>
                        <Button variant="secondary" onClick={() => clear()} className="me-2">
                            Clear Cart
                        </Button>
                        <Button variant="success" onClick={toggleCheckout}>
                            Proceed to Checkout
                        </Button>
                    </>
                )}
            </div>

            <CheckoutModal show={showCheckout} handleClose={toggleCheckout} />
        </div>
    );
};

export default CartSidebar;
