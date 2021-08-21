import React from 'react';
import { Col } from 'react-bootstrap';
import SideBar from '../SIdeBar/SideBar';
import DashBoardPhoto from '../../../images/dashboard.jpg';


const containerStyle = {
    backgroundColor: '#F4FDFB',
    // border : '1px solid red'
}
const DashBoard = () => {
    return (
        <div>
            <div className="row" >
                <Col className = "p-0"  md={3}>
                    <SideBar></SideBar>
                    </Col>
                    <Col  className="text-center" md={9}>
                        <h2 >Welcome to your Dashboard</h2>
                        <br />
                        <br />
                        <img src={DashBoardPhoto} style={{width:'70%'}} className="imag-fluid" alt="" />
                    </Col>
            </div>
        </div>
    );
};

export default DashBoard;