import React from "react";
import { useForm } from "react-hook-form";
import SideBar from "../../DashBoard/SIdeBar/SideBar";

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const adminData = {
      email: data.email,
      name: data.name,
    };
    fetch("http://localhost:5000/addAdmin",{
      method : 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(adminData),
    }).then((res)=>{
      console.log(res);
      alert('New Admin Added');
    });
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <SideBar></SideBar>
          </div>
          <div className="col-md-9 ">
            <h1>Add Admin Here</h1>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="form-control"
                  placeholder="Email Address"
                />

                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}

                <br></br>

                <input
                  type="name"
                  {...register("name", { required: true })}
                  className="form-control"
                  placeholder="Admin's Name"
                />

                {errors.name && (
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

export default AddAdmin;
