import React from "react";

function Teacher(props) {

  return (

   <>
   
      <h1>Task 16: Teacher Information</h1>
      <h3>Name: {props.name}</h3>
      <p>Subject: {props.subject}</p>
      <p>Experience: {props.experience}</p>
      <p>Qualification: {props.qualification}</p>
   </>
  );
}

export default Teacher