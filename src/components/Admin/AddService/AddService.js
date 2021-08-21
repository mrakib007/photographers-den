import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SideBar from "../../DashBoard/SIdeBar/SideBar";

const AddService = () => {
  const [imageURL,setImageURL] = useState(null);

  const handleImageUpload= (event) =>{
    const imageData = new FormData();

    imageData.set('key',`eff508700a1e88f6d620259e5536e133`);
    imageData.append('image',event.target.files[0]);

    axios
    .post('https://api.imgbb.com/1/upload',imageData)
    .then((response)=>{
      setImageURL(response.data.data.display_url);
    })
    .catch((error)=>{
      console.log(error);
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const serviceData = {
      title: data.title,
      imageURL,
      service: data.service,
      amount: data.pay
    };

    const url = 'http://localhost:5000/addService';

    fetch(url,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(serviceData),
    }).then((res)=>{
      console.log(res);
      alert('New Services Added');
    })
    
  };




  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <SideBar></SideBar>
          </div>
          <div className="col-md-9 ">
            <h1>Add Services Here Here</h1>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="text"
                  {...register("title", { required: true })}
                  className="form-control"
                  placeholder="Service Title"
                />

                {errors.title && (
                  <span className="text-danger">This field is required</span>
                )}

                <br></br>

                <input
                  type="text"
                  {...register("pay", { required: true })}
                  className="form-control"
                  placeholder="Enter the amount"
                />

                {errors.pay && (
                  <span className="text-danger">This field is required</span>
                )}
                <br />

                <input
                  type="text"
                  {...register("service", { required: true })}
                  className="form-control"
                  placeholder="Description"
                />

                {errors.service && (
                  <span className="text-danger">This field is required</span>
                )}

                <input
                  type="file"
                  {...register("file", { required: true })}
                  className="form-control"
                  placeholder="Upload The Image Here"
                  onChange={handleImageUpload}
                />

                {errors.file && (
                  <span className="text-danger">This field is required</span>
                )}
                <br></br>
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
