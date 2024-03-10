import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import Header from "../Header";
import banner from "../../assets/SalesBanner.webp";
import "../../css/SalesPage.css";
import Filters from "./Filters";
import SalesShoe from "./SalesShoes";
import TheClassic from "../TheClassics";
import Footer from "../Footer";

export default function SalesPage() {
    const [shoes, setShoes] = useState([]);
    const [sortBy, setSortBy] = useState("Price Low to High");
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [showFiltersMenu, setShowFiltersMenu] = useState(false);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        const queryParams = new URLSearchParams();
        queryParams.append('sortBy', sortBy);
        selectedTypes.forEach(type => {
            queryParams.append('type', type);
        });

        fetch(`https://1a00c9f9cfdb301b.mokky.dev/sale?${queryParams.toString()}`)
            .then(res => res.json())
            .then(data => {
                setShoes(data);
            })
            .catch(error => console.error("Error fetching data: ", error));
    }, [sortBy, selectedTypes]);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleFilterChange = (selectedOptions) => {
        setSelectedTypes(selectedOptions);
    };

    const toggleFiltersMenu = () => {
        setShowFiltersMenu(!showFiltersMenu);
    };

    return (
        <div className="SalesPage">
            <Header />
            <div className="sales-banner">
                <p className="small-p">Shop All / Categories / Sale</p>
                <img src={banner} className="banner" alt="Banner" />
            </div>
            <div className="sales-main">
                <div className="sorting">
                        <button className="show-filters" onClick={toggleFiltersMenu}>
                            Filters
                        </button>
                    <select value={sortBy} onChange={handleSortChange}>
                        <option value="Price Low to High">Price Low to High</option>
                        <option value="Price High to Low">Price High to Low</option>
                    </select>
                </div>
                <div className="filters-info">
                    <h1>Sale</h1>
                    <p>{shoes.length} items</p>
                    <button className="expand-all">Expand All</button>
                </div>
                {((isMobile && showFiltersMenu) || !isMobile && showFiltersMenu) && (
                    <div className="filters-menu">
                        <div className="filters-menu-up">
                            <p>Filters</p>
                            {isMobile && (
                                <button className="close-button" onClick={toggleFiltersMenu}>X</button>
                            )}
                        </div>
                        <Filters onChange={handleFilterChange} />
                    </div>
                )}
               <SalesShoe filtersAreShown={showFiltersMenu} shoes={shoes} sortBy={sortBy} selectedTypes={selectedTypes} />
            </div>
            <div className="sales-page-bottom">
                <p>May we Suggest :</p>
                <TheClassic title="" />
            </div>
            <Footer />
        </div>
    );
}
