import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../../App";
import SideBar from "../../DashBoard/SIdeBar/SideBar";

const BookingList = () => {
  const [services, setServices] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:5000/servicesByEmail?email=${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, [loggedInUser.email]);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <SideBar></SideBar>
          </div>
          <div className="col-md-9">
            <h2>This is your booking list {loggedInUser.name}</h2>
            <br />
            <div className="container-fluid">
              <Table className="striped bordered hover responsive">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Service Name</th>
                    <th>Cost</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    <div className="text-center">
                      {services.length === 0 && <h2>Loading...</h2>}
                      {services.map((service) => {
                        <tr>
                          <td>{service.name}</td>
                          <td>{service.title}</td>
                          <td>{service.amount}</td>
                          <td>
                            {new Date(service.date).toDateString("dd/MM/yyyy")}
                          </td>
                          <td>{service.status}</td>
                        </tr>;
                      })}
                    </div>
                  }
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
