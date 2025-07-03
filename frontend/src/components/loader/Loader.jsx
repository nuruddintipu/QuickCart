import { Spinner } from "react-bootstrap";

const Loader = ({ size = "md", centered = true, text = "Loading..." }) => {
    const spinnerSize = {
        sm: "spinner-border-sm",
        md: "",
        lg: "spinner-border-lg"
    };

    return (
        <div className={`d-flex flex-column align-items-center ${centered ? "justify-content-center" : ""}`} style={{ minHeight: "150px" }}>
            <Spinner animation="border" role="status" className={spinnerSize[size]}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            {text && <span className="mt-2 text-muted">{text}</span>}
        </div>
    );
};

export default Loader;
