import React, { useContext, useState } from 'react';
import './SideBar.css';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import { useEffect } from 'react';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        fetch('http://localhost:5000/isAdmin',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then((res)=> res.json())
        .then((data)=> setIsAdmin(data));
    },[loggedInUser.email])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height : '100vh'}}>
            <ul className ="list-unstyled">
                <li>
                    <Link to= '/dashBoard'><span>Dashboard</span></Link>
                </li>
                <li>
                    <Link to= '/'><span>Home</span></Link>
                </li>
                {!isAdmin && (
                    <div>
                <li>
                    <Link to= '/bookingList'><span>Booking List</span></Link>
                </li>
                <li>
                    <Link to= '/serviceBooking'><span>Book Service</span></Link>
                </li>
                <li>
                    <Link to= '/review'><span>Review</span></Link>
                </li>

                {/* <li>
                <Link to= '/orderList'><span>Order List</span></Link>
                </li> */}
                </div>
                )}
                {isAdmin && (
                    <div>
                <li>
                    <Link to= '/addService'><span>Add Service</span></Link>
                </li>
                <li>
                    <Link to='/orderList'>Order List</Link>
                </li>
                <li>
                    <Link to= '/makeAdmin'><span>Make Admin</span></Link>
                </li>
                <li>
                <Link to= '/manageService'><span>Manage Service</span></Link>
                </li>

                <li>
                <Link to= '/manageReview'><span>Manage Review</span></Link>
                </li>
                </div>
            )}
            </ul>
        </div>
    );
};

export default SideBar;