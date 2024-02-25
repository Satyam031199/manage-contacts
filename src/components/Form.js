import React, { useState } from "react";
import "./Form.css";

const Form = ({addContact}) => {
    const[formData,setFormData]=useState({
        useremail: "",
        username: ""
    })
    function handleData(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        if(!formData.useremail || !formData.username){
            alert("All fields are mandatory")
        }
        addContact(formData)
        setFormData({username: "",useremail: ""})
    }
    return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="form-title">Add Contact</p>
      <div className="input-container">
        <input placeholder="Enter email" type="email" name="useremail" value={formData.useremail} onChange={handleData}/>
      </div>
      <div className="input-container">
        <input placeholder="Enter name" type="text" name="username" value={formData.username} onChange={handleData}/>
      </div>
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
