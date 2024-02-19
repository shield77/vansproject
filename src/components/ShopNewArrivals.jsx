import React, { useEffect, useState } from "react";
import "../css/ShopNewArrivals.css";
import "./ShopNewArrivalsBannerLow"
import ShopNewArrivalsBannerLow from "./ShopNewArrivalsBannerLow";

function ShopNewArrivals() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://1a00c9f9cfdb301b.mokky.dev/shopnewarrivals");
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);

    return (
        <div className="ShopNewArrivalsMain">
            <div className="ShopNewArrivals">
                {data.map((item, index) => (
                    <div key={index} className="shop-new-arrivals-banner">
                        <img src={item.img} alt={item.title} className="shop-new-arrivals-banner-img" />
                        <p className="shop-new-arrivals-banner-p">{item.title}</p>
                    </div>
                ))}

            </div>
                    <ShopNewArrivalsBannerLow />
            
        </div>
    );
}

export default ShopNewArrivals;
