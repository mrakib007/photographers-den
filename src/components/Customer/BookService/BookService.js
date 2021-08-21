import React from 'react';
import SideBar from '../../DashBoard/SIdeBar/SideBar';
import Services from '../../HomePage/Services/Services';

const BookService = () => {
    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <SideBar></SideBar>
                        </div>
                        <div className="col-md-9">
                            <Services></Services>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookService;