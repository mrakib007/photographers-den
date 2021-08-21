import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './showMore.css';
const ShowMore = () => {
    const {_id} = useParams();
    const [showMore,setShowMore] = useState('');

    useEffect(()=>{
        fetch(`http://localhost:5000/service/${_id}`)
        .then((res)=> res.json())
        .then((data)=> setShowMore(data[0]));
        console.log(showMore);
    },[_id])

    return (
        <div className="d-flex flex-column align-items-center m-3">
            <h3>Know More About {showMore.title}</h3> 
            <img className="resize text-center" src={showMore.imageURL} alt="" />
            <p className="m-3">{showMore.service}</p>
        </div>
    );
};

export default ShowMore;