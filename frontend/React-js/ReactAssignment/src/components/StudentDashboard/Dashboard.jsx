import React from 'react'
import StudentInfo from './StudentInfo';
import CourseInfo from './CourseInfo';
import Skills from './Skills';

function Dashboard(props) {
  return (
    <div>
      <h1>Student Dashboard</h1>

      <StudentInfo
        name={props.student.name}
        age={props.student.age}
      />

      <CourseInfo
        course={props.student.course}
        instructor={props.student.instructor}
        duration={props.student.duration}
      />

      <Skills skills={props.student.skills} />
    </div>
  );
}

export default Dashboard