import React from "react";

function CourseCard({children}) {
  return (
    <div className="course-card">
      <h1>CourseCard</h1>
       <div className="card">
            {children}
        </div>
    </div>
  );
}

export default CourseCard