import React from 'react'

function CourseInfo({ course, instructor, duration }) {
  return (
    <div className="card">
      <h2>Course Information</h2>
      <p>Course: {course}</p>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration}</p>
    </div>
  );
}

export default CourseInfo