import {Alert, Container} from "react-bootstrap";

const ErrorMessage = (error) => {
    return (
        <Container className="mt-4">
            <Alert variant="danger">{error.message || "Something went wrong"}</Alert>
        </Container>
    );
};

export default ErrorMessage;