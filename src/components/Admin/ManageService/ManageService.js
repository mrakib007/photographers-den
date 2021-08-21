import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import SideBar from '../../DashBoard/SIdeBar/SideBar';

const ManageService = () => {
    const [services , setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then((res)=> res.json())
        .then((data)=>setServices(data))
        .catch((err)=> console.log(err));
    },[services]);

    const deleteService = (_id) =>{
        fetch(`http://localhost:5000/delete/${_id}`,{
            method: 'DELETE',
        })
        .then((res)=> res.json())
        .then((data)=> {
            alert('Data Deleted Successfully!')
        })
        .catch((err) => console.log(err))
    }
    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <SideBar></SideBar>
                        </div>

                        <div className="col-md-9">
                            <h2>Manage Service</h2>
                            <br></br>
                            <div className="container">
                                <Table className= "striped bordered hover responsive">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Amount</th>
                                            <th>Service ID</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            <div>
                                                {
                                                    services.length === 0 && (
                                                        <h3>Loading Data....</h3>
                                                    )
                                                }
                                            </div>
                                        }
                                        {
                                            services.map((service)=> (
                                              <tr>
                                                  <td>{service.title}</td>
                                                  <td>{service.amount}</td>
                                                  <td>{service._id}</td>
                                                  <td>
                                                      <button className="btn btn-danger" onClick={()=> deleteService(service._id)}>
                                                         Delete 
                                                      </button>
                                                  </td>
                                              </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageService;