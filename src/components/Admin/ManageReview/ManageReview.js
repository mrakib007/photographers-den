import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import SideBar from "../../DashBoard/SIdeBar/SideBar";

const ManageReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);
  const deleteReview = (_id) => {
    fetch(`http://localhost:5000/deleteReview/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Review Is Deleted");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <SideBar></SideBar>
          </div>
          <div className="col-md-9">
            <div className="container">
              <Table className="striped bordered hover responsive">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    <div className="text-center">
                      {reviews.length === 0 && <h1>Loading...</h1>}
                     
                    </div>
                  }
                  {reviews.map((review) => (
                    <tr key={review._id}>
                      <td>{review.name}</td>
                      <td>{review.service}</td>
                      <td>
                        <Button
                          variant="outline-primary"
                          onClick={() => deleteReview(review._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageReview;
