import { Spinner } from "react-bootstrap";

const Loader = ({ size = "md", centered = true, text = "Loading..." }) => {

    const sizeClassMap = {
        sm: "spinner-border-sm",
        md: "",
        lg: "spinner-border-lg"
    };

    const spinnerClass = sizeClassMap[size] || "";

    const containerClasses = [
        "d-flex",
        "flex-column",
        "align-items-center",
        centered && "justify-content-center",
        "py-4"
    ].filter(Boolean).join(" ");

    return (
        <div className={containerClasses}>
            <Spinner animation="border" role="status" className={spinnerClass}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            {text && <span className="mt-2 text-muted">{text}</span>}
        </div>
    );
};

export default Loader;
