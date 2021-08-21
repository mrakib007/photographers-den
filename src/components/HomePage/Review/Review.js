import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Review.css';
import ReviewData from '../ReviewData/ReviewData';

  
const Review = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then((res)=> res.json())
        .then((data)=> setReviews(data));
    },[])
    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header text-center">
                <h3 className="">Reviews Of Our Clients</h3>
            </div>
            <div className="card-deck mt-5">
                {reviews.map((review) => (
                    <ReviewData review={review} />
                ))}
            </div>
        </div>
    </section>
    );
};

export default Review;