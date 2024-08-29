import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="container mt-5">
            <h1 className="mb-3 text-white">Task App</h1>
            {children}
        </div>
    );
}

export default Container;
