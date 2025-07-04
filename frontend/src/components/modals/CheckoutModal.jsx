import { Modal, Button, Form } from "react-bootstrap";
import useCheckout from "../../hooks/useCheckout.jsx";
import Loader from "../loader/Loader.jsx";

const CheckoutModal = ({ show, handleClose }) => {
    const { formState, handleChange, handleSubmit, loading} = useCheckout(handleClose);

    if(loading) return <Loader text="Loading..." />;

    return (
        <Modal show={show} onHide={handleClose} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label column={true}>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label column={true}>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label column={true}>Address</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter your address"
                            name="address"
                            value={formState.address}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="primary">
                        Place Order
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default CheckoutModal;
