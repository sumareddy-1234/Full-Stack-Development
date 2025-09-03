import React from "react";
import "./Form.css";
const Form=()=>{
    return (
        <>
        <form class="form">
            <h1>Form</h1>
            <label>Name:</label>
            <input type="text" required/>
            <br/>
            <br/>
            <label>Password:</label>
            <input type="password" required/>
            <br/>
            <br/>
            <label>Message:</label>
            <textarea></textarea>
            <br/>
            <br/>
            <button type="submit">Submit</button>
        </form>
        </>
    );
}
export default Form;