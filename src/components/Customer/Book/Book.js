import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../../DashBoard/SIdeBar/SideBar';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';
import PaymentForm from '../PaymentForm/PaymentForm/PaymentForm';

const Book = () => {
    const {_id} = useParams();
    const [booking, setBooking] = useState([]);
    const [order, setOrder] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/service/${_id}`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [_id]);


    const addBooking = booking.find((bk) => parseInt(bk._id, 10) === parseInt(_id, 10));
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) =>{
        setOrder(data);
    }

    const handlePaymentSuccess = (paymentId) => {
        const servicesDetails = {
            ...loggedInUser,
            order,
            paymentId,
            title: addBooking?.title,
            image: addBooking?.imageURL,
            description: addBooking?.service,
            amount: addBooking?.amount,
            status: 'pending',
            date: new Date(),
        };

        fetch('http://localhost:5000/addServicesOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(servicesDetails),
        })
            .then((res) => res.json())
            .then(() => {
                alert('Your order placed successfully');
            });
    };
    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                        <SideBar></SideBar>
                        </div>
                        <div className="col-md-9" style={{display: order ? 'none' : 'block' }}>
                            <h2>Booking section</h2>

                            <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{}}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    defaultValue={loggedInUser.name}
                                    {...register('name', { required: true })}
                                    placeholder="Your Name"
                                    className="form-control"
                                />
                                {errors.name && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    defaultValue={loggedInUser.email}
                                    {...register('email', { required: true })}
                                    placeholder="Your Email"
                                    className="form-control"
                                />
                                {errors.email && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    defaultValue={addBooking?.title}
                                    {...register('title')}
                                    placeholder="Title"
                                    className="form-control"
                                />
                            </div>
                            <button className="btn btn-primary px-5" type="submit">
                                Submit
                            </button>
                        </form>
                        </div>

                        <div className="col-md-9" style={{display: order ? 'block' : 'none' }}>
                        <h1 className="text-center">Payment Section</h1>
                        <PaymentForm handlePayment={handlePaymentSuccess} />
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Book;