import whitelogo from "../assets/images/whitelogo.png";
import '../styles/Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader__content">
                <div className="loader__logo-wrapper animate-rotate-360">
                    <img
                        src={whitelogo}
                        alt="CBS Logo"
                        className="loader__logo"
                    />
                </div>
                <h1 className="loader__text">
                    CodeByShakir
                </h1>
                <div className="loader__bar-container">
                    <div className="loader__bar animate-loader-bar" />
                </div>
            </div>
        </div>
    );
};

export default Loader;