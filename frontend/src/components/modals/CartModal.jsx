import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Button, Offcanvas, Table} from "react-bootstrap";
import {clearCart, decreaseItem, increaseItem, removeFromCart} from "../../features/cartSlice.jsx";
import CheckoutModal from "./CheckoutModal.jsx";

const CartModal = () => {
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);

    const { cartItems, totalAmount } = useSelector((state) => state.cart);

    const handleShowCart = () => setShowCart(!showCart);

    const handleCheckoutShow = () => setShowCheckout(!showCheckout);

    return (
        <>

            <div onClick={handleShowCart} className="text-dark" style={{cursor: 'pointer'}}>
                🛒 Cart ({cartItems.length})
            </div>

            <Offcanvas show={showCart} onHide={handleShowCart} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartItems.length === 0 ? (
                        <h5>Your cart is empty.</h5>
                    ) : (
                        <>
                            <Table striped bordered hover responsive size="sm">
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
                                        <td>${product.price}</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    onClick={() => dispatch(decreaseItem(product))}
                                                >−</Button>

                                                <span>{product.quantity}</span>

                                                <Button
                                                    variant="outline-secondary"
                                                    size="sm"
                                                    onClick={() => dispatch(increaseItem(product))}
                                                >+</Button>
                                            </div>
                                        </td>

                                        <td>${(product.price * product.quantity).toFixed(2)}</td>
                                        <td>
                                            <div
                                                onClick={() => dispatch(removeFromCart(product))}
                                                style={{cursor: 'pointer', color: 'red'}}
                                            >
                                                x
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <h5>Total: ${totalAmount.toFixed(2)}</h5>

                            </div>
                            <Button variant="secondary" onClick={() => dispatch(clearCart())}>
                                Clear Cart
                            </Button>
                            <Button variant="success" className="mx-3" onClick={handleCheckoutShow}>
                                Proceed to checkout
                            </Button>
                            <CheckoutModal show={showCheckout} handleClose={handleCheckoutShow} />
                        </>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default CartModal;