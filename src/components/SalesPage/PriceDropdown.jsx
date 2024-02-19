import React, { useState } from 'react';
import "../../css/PriceDropdown.css"


function PriceDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [rangeValue, setRangeValue] = useState(0);

    const handleRangeChange = (event) => {
        const value = parseFloat(event.target.value);
        setRangeValue(value);

        // Calculate new min and max prices based on the selected range
        const range = parseFloat(event.target.max) - parseFloat(event.target.min);
        const percent = value / 100;
        const min = parseFloat(event.target.min) + range * percent;
        const max = min + range;
        setMinPrice(min.toFixed(2));
        setMaxPrice(max.toFixed(2));
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown price-dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                Price
            </button>
            {isOpen && (
                <div className="price-dropdown-menu">
                    <div className='price-dropdown-menu-flex'>





                        <div>
                            $
                            <input
                                className='price'
                                type="text"
                                placeholder='Min'
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            $
                            <input
                                className='price'
                                type="text"
                                value={maxPrice}
                                placeholder='Max'
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>







                    </div>

                    <div>
                        <input
                        className='range-input'
                            type="range"
                            min="0"
                            max="100"
                            value={rangeValue}
                            onChange={handleRangeChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default PriceDropdown;
