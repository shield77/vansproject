import React, { useEffect, useState } from "react";
import fullstar from "../../assets/stars/star-fill (1).svg";
import halfstar from "../../assets/stars/star-half (1).svg";
import "../../css/Comments.css";
import rating from "../../assets/rating.png";
import like from "../../assets/hand-thumbs-up.svg"
import dislike from "../../assets/hand-thumbs-down.svg"

export default function Comments() {
        let [likeNumber, setLikeNumber] = useState(0)
        let [dislikeNumber, setDislikeNumber] = useState(0)


        function pluslike () {
            setLikeNumber(likeNumber + 1)
        }

        function plusdislike () {
            setDislikeNumber(dislikeNumber + 1)
        }

    
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://1a00c9f9cfdb301b.mokky.dev/comments");
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);

    return (
        <div className="Comments">
            <div className="upper-info">
                <div className="upper-info-left">
                    <h1>Review Snapbot</h1>
                    <div className="upper-info-quick">
                        <div className="stars">
                            <img src={fullstar} alt="Full Star"></img>
                            <img src={fullstar} alt="Full Star"></img>
                            <img src={fullstar} alt="Full Star"></img>
                            <img src={fullstar} alt="Full Star"></img>
                            <img src={halfstar} alt="Half Star"></img>
                        </div>
                        <p>4.62</p>
                        <p>{162} reviews</p>
                        <p><a href="">Write a Review</a></p>
                    </div>
                </div>
                <div className="upper-info-right">
                    <h3>91%</h3>
                    <p>91% of respondents would recommend this to a friend</p>
                </div>
            </div>
            <div className="mid-info">
                <div className="mid-info-left">
                    <h1>RATINGS DISTRIBUTION</h1>
                    <img src={rating} alt="Ratings Distribution"></img>
                </div>
                <div className="mid-info-center">
                    <h1>PROS</h1>
                    <p>Sorry, no results were found</p>
                </div>
                <div className="mid-info-right">
                    <h1>CONS</h1>
                    <p>Sorry, no results were found</p>
                </div>
            </div>
            <div className="main-comments">
                {data.map((item, index) => (
                    <div key={index} className="comment">
                        <div className="stars">
                            <img src={fullstar} alt="Full Star"></img>
                            <img src={fullstar} alt="Full Star"></img>
                            <img src={fullstar} alt="Full Star"></img>
                            <img src={fullstar} alt="Full Star"></img>
                            <img src={fullstar} alt="Half Star"></img>
                            <p>5</p>
                        </div>
                        <h1>{item.title}</h1>
                        <p>{item.comment}</p>
                        <p><span>Bottom line : </span>{item.bottomline}</p>
                        <div className="helpful-review-div">

                            <p><span className="helpful-review">Was this review helpful to you?</span></p>

                           <img src={like} onClick={pluslike}></img>
                            <p>{likeNumber}</p>

                            <img src={dislike} onClick={plusdislike}></img>
                            <p>{dislikeNumber}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
