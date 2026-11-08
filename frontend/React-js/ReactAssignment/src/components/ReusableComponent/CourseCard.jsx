import React from "react";

function CourseCard(props) {
  return (
    <div className="course-card">
        <h1>Task 19: Reusable Course Card</h1>
      <p>Course Name :{props.courseName}</p>

      <p>Instructor: {props.instructor}</p>
      <p>Duration: {props.duration}</p>
      <p>Level: {props.level}</p>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}

export default CourseCard