import React from 'react';
import './index.scss'; // 引入刚才写的 CSS

const GridComponent = ({items}) => {
    return (
        <div className="grid-container">
            {items.map((item, index) => (
                <div key={index} className="grid-item">
                    {item}
                </div>
            ))}
        </div>
    );
};

export default GridComponent;
