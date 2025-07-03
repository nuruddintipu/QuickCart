import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { clearCart, decreaseItem, increaseItem, removeFromCart } from "../../features/cartSlice.jsx";
import CheckoutModal from "../modals/CheckoutModal.jsx";
import "./Sidebar.css";

const CartSidebar = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const { cartItems, totalAmount } = useSelector((state) => state.cart);

    const [showCheckout, setShowCheckout] = React.useState(false);

    const toggleCheckout = () => setShowCheckout((prev) => !prev);

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
                    <p>Your cart is empty.</p>
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
                                    <td>${product.price.toFixed(2)}</td>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => dispatch(decreaseItem(product))}
                                            >
                                                −
                                            </Button>
                                            <span>{product.quantity}</span>
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => dispatch(increaseItem(product))}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </td>
                                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => dispatch(removeFromCart(product))}
                                        >
                                            x
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>

                        <div className="d-flex justify-content-between align-items-center">
                            <h5>Total: ${totalAmount.toFixed(2)}</h5>
                            <div>
                                <Button variant="secondary" onClick={() => dispatch(clearCart())} className="me-2">
                                    Clear Cart
                                </Button>
                                <Button variant="success" onClick={toggleCheckout}>
                                    Proceed to Checkout
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <CheckoutModal show={showCheckout} handleClose={toggleCheckout} />
        </div>
    );
};

export default CartSidebar;
