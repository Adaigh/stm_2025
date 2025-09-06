import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function TopButton() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setShowButton(window.scrollY > 100);
        });
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`topButton position-fixed p-3 ${showButton ? 'show' : 'hide'}`}>
            <button
                className="btn btn-secondary p-2"
                onClick={handleClick}
                aria-label="Back to top">
                <FaArrowUp className="fs-3"></FaArrowUp>
            </button>  
        </div>  
    )
}