import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import SideBar from '../../DashBoard/SIdeBar/SideBar';

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/servicesOrder')
        .then((res)=> res.json())
        .then((data)=> setOrderList(data));
    },[]);

    const handleChange = (_id, event) =>{
        const updateStatus = {
            status: event.target.value,
            _id
        };
        fetch(`http://localhost:5000/update/${_id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateStatus)
        })
        .then((result)=> result.json())
        .then((data)=>console.log(data))
        .then((err)=>console.log(err));
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-md-9">
                        <h2>Order List</h2>
                        <br/>
                        <div className="container">
                            <Table className="striped bordered hover responsive">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Service</th>
                                        <th>Payment Method</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {
                                       <div>
                                           {orderList.length ===0 && (
                                               <h2>Loading Data...</h2>
                                           )}
                                       </div>
                                   }
                                    {
                                        orderList.map((list) => (
                                            <tr>
                                                <td>{list.name}</td>
                                                <td>{list.email}</td>
                                                <td>{list.title}</td>
                                                <td>Stripe</td>
                                                <td>
                                         
                                                    <Form.Group>
                                                    <Form.Control
                                                        as="select"
                                                        onChange={(event) =>
                                                            handleChange(list._id, event)
                                                        }
                                                    >
                                                        <option>{list.status}</option>
                                                        {/* <option>Pending</option> */}
                                                        <option>On going</option>
                                                        <option>Done</option>
                                                    </Form.Control>
                                                </Form.Group>
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
        </div>
    );
};

export default OrderList;