import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import SideBar from '../../DashBoard/SIdeBar/SideBar';


const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) =>{
        const reviewData = {
            ...loggedInUser,
            name: data.name,
            service: data.title,
            description: data.description,
            company: data.company 
        };

        fetch('http://localhost:5000/addReview',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        }).
        then((res)=>{
            alert('Thanks For Your Review!');
        });
    };
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-md-9">
                        <h2>Review Section</h2>
                        <br />
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
                                    type="text"
                                    {...register('company', { required: true })}
                                    placeholder="Company"
                                    className="form-control"
                                />
                                {errors.company && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    {...register('title', { required: true })}
                                    placeholder="Service Name"
                                    className="form-control"
                                />
                                {errors.title && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <div className="form-group">
                                <textarea
                                    type="text"
                                    {...register('description', { required: true })}
                                    placeholder="Description"
                                    className="form-control"
                                    rows="4"
                                />
                                {errors.description && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <Button variant="outline-primary" className="px-5" type="submit">
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;