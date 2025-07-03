import { Container } from "react-bootstrap";
import {useState} from "react";

const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <footer className="bg-light py-3 mt-5 border-top">
            <Container className="text-center text-muted small">
                <div>© {new Date().getFullYear()} QuickCart. All rights reserved.</div>
                <a
                    href="https://github.com/nuruddintipu"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`text-decoration-none ${isHovered ? 'text-primary bg-transparent p-1' : 'text-secondary p-1'  } `}
                >
                    Nuruddin Tipu
                </a>
            </Container>
        </footer>
    );
};

export default Footer;
