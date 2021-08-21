import React from 'react';
import Blog1 from '../../../images/blog1.jpg';
import Blog2 from '../../../images/blog2.jpg';

const Features = () => {
    return (
        // <div className="pb-0 pb-md-5 my-5">
        //    <div className="container mb-5">
        //        <div className="row mb-5">
        //            <div className="col-md-5 mb-4">
        //                <img src={Blog1} className="img-fluid w-100 mt-3" style={{height:"75%"}} alt="" />
        //            </div>
        //            <div className="col-md-7 align-self-center">
        //                <h2>Exceptional Service For Your Car</h2>
        //                <p className='align-self-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        //                     ullam laudantium ut deleniti cumque impedit.</p>
        //            </div>
        //        </div>
        //    </div>
        // </div>
        <section className="pb-0 pb-md-5 my-5">
            <h3 className="text-center m-5">Our Blogs</h3>
        <div className="container mb-5">
            <div className="row mb-5">
                <div className="col-md-5 mb-4 m-md-0">
                    <img className="img-fluid w-100" style={{height:'450px'}} src={Blog1} alt=""/>
                </div>
                <div className="col-md-7 align-self-center">
                    <h1>Exceptional services</h1>
                    <p className="text-secondary my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                    </p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>

        <div className="container mb-5">
            <div className="row mb-5">
                {/* <div className="col-md-5 mb-4 m-md-0">
                    <img className="img-fluid w-100" style={{height:'450px'}} src={Blog2} alt=""/>
                </div> */}
                <div className="col-md-7 align-self-center">
                    <h1>Worry No More</h1>
                    <p className="text-secondary my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                    </p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
                <div className="col-md-5 mb-4 m-md-0">
                    <img className="img-fluid w-100" style={{height:'450px'}} src={Blog2} alt=""/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Features;