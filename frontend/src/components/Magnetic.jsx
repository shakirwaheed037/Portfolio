import React from 'react';
import '../styles/Magnetic.css';

const Magnetic = ({ children }) => {
    return (
        <div className="magnetic-wrapper">
            {children}
        </div>
    );
};

export default Magnetic;
