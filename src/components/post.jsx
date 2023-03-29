import React from "react";
import "../css/post.css";
import { useForm } from "react-hook-form";
function Post(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    console.log(data);
    fetch(" https://admin.srkprojects.com/web/api/client/v1/contact-us/",{
        method:"POST",
        body:JSON.stringify(data),
        header:{
            "Content-type":"application/json;charset=UTF-8",
        },
    })
    .then((response)=>response.json())
    .then((json) => console.log(json));
  };
  return (
    <form onSubmit={handleSubmit(submit)} className="container">
      <h2 className="heading">POST FORMS</h2>
      <label className="title" htmlFor="">
        email id:
        <input
          className="user-ip"
          {...register("email", { required: true })}
          type="email"
          placeholder="Enter id"
        /> 
      </label>
      <label className="title" htmlFor="">
        name:
        <input
          className="user-ip"
          {...register("name", { required: true })}
          type="text"
          placeholder="Enter name"
        />
      </label>
      <label className="title" htmlFor="">
        message:
        <textarea
          className="user-ip"
          name=""
          id=""
          cols="30"
          {...register("message", { required: true })}
          placeholder="Enter comments"
          rows="6"
        ></textarea>
      </label>
      <button className="btn">
          submit
      </button>
    </form>
  );
}
export default Post;