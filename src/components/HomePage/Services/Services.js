import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
  const [serviceData,setServiceData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then((res)=> res.json())
    .then((data)=> setServiceData(data))
    .catch((err)=> console.log(err))
  },[]);

  return (
    <div>
      <div className="m-3">
        <h3 className="text-center">Services We Provide</h3>
      </div>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          {serviceData.length === 0 && <h3>Loading...</h3>}
        </div>
          <div className="w-15 row container mt-3 pt-5">
              {
                  serviceData.map(services => <ServiceDetail services = {services} 
                    key = {services.title}></ServiceDetail>)
              }
          </div>
      </div>
    </div>
  );
};

export default Services;
