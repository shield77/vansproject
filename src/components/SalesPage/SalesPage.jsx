// SalesPage.js
import React, { useState, useEffect } from "react";
import Header from "../Header";
import banner from "../../assets/SalesBanner.webp";
import "../../css/SalesPage.css";
import Filters from "./Filters";
import SalesShoe from "./SalesShoes";
import TheClassic from "../TheClassics";
import Footer from "../Footer";

export default function SalesPage() {
    const [shoes, setShoes] = useState([]);
    const [showFilters, setShowFilters] = useState(true);
    const [sortBy, setSortBy] = useState("Price Low to High");
    const [selectedTypes, setSelectedTypes] = useState([]);

    useEffect(() => {
        fetch("https://1a00c9f9cfdb301b.mokky.dev/sale")
            .then(res => res.json())
            .then(data => {
                setShoes(data);
            })
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleFilterChange = (selectedOptions) => {
        setSelectedTypes(selectedOptions);
    };

    const filterShoesByType = (shoes, selectedTypes) => {
        if (!selectedTypes || selectedTypes.length === 0) {
            return shoes;
        }
        return shoes.filter(shoe => selectedTypes.includes(shoe.type));
    };

    const filteredShoes = filterShoesByType(shoes, selectedTypes);

    return (
        <div className="SalesPage">
            <Header />
            <div className="sales-banner">
                <p>Shop All / Categories / Sale</p>
                <img src={banner} className="banner" alt="Banner" />
            </div>
            <div className="sales-main">
                <div className="sorting">
                    <button onClick={toggleFilters}>
                        {showFilters ? "Hide Filters" : "Show Filters"}
                    </button>
                    <select value={sortBy} onChange={handleSortChange}>
                        <option value="Price Low to High">Price Low to High</option>
                        <option value="Price High to Low">Price High to Low</option>
                    </select>
                </div>
                <div className="filters-info">
                    <h1>Sale</h1>
                    <p>{filteredShoes.length} items</p>
                    <button>Expand All</button>
                </div>
                <div className={`sales-page-filters ${showFilters ? '' : 'hidden'}`}>
                    <Filters onChange={handleFilterChange} />
                </div>
                <SalesShoe filtersAreShown={showFilters} shoes={filteredShoes} sortBy={sortBy} />
            </div>
            <div className="sales-page-bottom">
                <p>May we Suggest :</p>
                <TheClassic title="" />
            </div>
            <Footer />
        </div>
    );
}
