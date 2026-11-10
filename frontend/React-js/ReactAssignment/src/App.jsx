import './index.css'
import Employee from './components/props/Employee'
import PersonCard from './components/destructuring/PersonCard'
import Product from './components/props/Product'
import Profile from './components/passObj/Profile'
import Skills from './components/passAnArry/Skills'
import Student from './components/props/Student'
import User from './components/destructuring/User'
import ProductObj from './components/passObj/ProductObj'
import UserStatus from './components/props/UserStatus'
import ProfileCard from './components/props/ProfileCard'
import StudentChild from './components/nestedComp/StudentChild'
import Welcome from './components/destructuring/Welcome'
import ProdectList from './components/passAnArry/ProdectList'
import StudentList from './components/passAnArry/StudentList'
import Card from './components/ReusableComponent/Card'
import Teacher from './components/props/Teacher'
import Company from './components/props/Company'
import UserProfile from './components/props/UserProfile'
import CourseCard from './components/ReusableComponent/CourseCard'
import Dashboard from './components/StudentDashboard/Dashboard'

function App() {

  let TechSkills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL", "Java", "Python", "C++", "C#", "PHP", "Ruby", "Swift", "Kotlin", "Go", "Rust", "TypeScript", "Dart"];
  let ProfileInfo = { Name: "Nisha", Age: 20, Course: "BCA", City: "Noida", }
  let Productlists = [
    { id: 1, name: "iPhone 15", price: 69999, brand: "Apple" },
    { id: 2, name: "Galaxy S24", price: 74999, brand: "Samsung" },
    { id: 3, name: "MacBook Air M2", price: 89999, brand: "Apple" },
    { id: 4, name: "Wireless Headphones", price: 2999, brand: "Sony" },
    { id: 5, name: "Smart Watch", price: 4999, brand: "Noise" },
    { id: 6, name: "Gaming Laptop", price: 65999, brand: "HP" },
    { id: 7, name: "Bluetooth Speaker", price: 1999, brand: "JBL" },
    { id: 8, name: "Keyboard", price: 1499, brand: "Logitech" }
  ]
  let studentInfo = [
    { name: "Rahul", age: 21, course: "BCA" },
    { name: "Priya", age: 22, course: "B.Tech" },
    { name: "Aman", age: 20, course: "BBA" },
    { name: "Sneha", age: 23, course: "MCA" },
    { name: "Rohit", age: 21, course: "B.Sc" },
    { name: "Anjali", age: 22, course: "B.Com" },
    { name: "Vikas", age: 24, course: "MBA" },
    { name: "Pooja", age: 20, course: "BA" },
    { name: "Arjun", age: 23, course: "M.Tech" },
    { name: "Neha", age: 21, course: "BCA" }
  ];

  const user = {
    name: "Nisha",
    email: "nisha@gmail.com",

    address: {
      city: "Moradabad",
      state: "Uttar Pradesh",
      country: "India",
    },
  };

  const student = {
    name: "Nisha",
    age: 22,
    course: "React JS",
    instructor: "Hitesh Choudhary",
    duration: "3 Months",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
    ],
  };

  return (
    <>
      <Student
        Name="Nisha"
        Age={20}
        Course="BCA"
        City="Noida"

      />
      <hr />

      <Product
        Product="Laptop"
        Price={1500}
        Brand="Dell"
        Category="Electronics"
      />
      <hr />

      <Employee
        Name="Nisha"
        ID={12345}
        Department="IT"
        Salary={50000}
      />
      <hr />

      <User
        Name="Nisha"
        Email="nisha@example.com"
        Age={20}
        Country="India"
      />

      <hr />
      <PersonCard>
        <h1>Name : Nisha </h1>
        <h3> Profession=: Dev</h3>
        <h3> Age=: 45</h3>
        <h3> Location : Noida</h3>

      </PersonCard>


      <PersonCard>
        <h1>Name : Neha  </h1>
        <h3> Profession=: Dev</h3>
        <h3> Age=: 45</h3>
        <h3> Location : Noida</h3>

      </PersonCard>
      <hr />


      <Skills skills={TechSkills} />

      <hr />
      <Profile ProfileInfo={ProfileInfo} />

      <hr />

      <ProductObj />
      <hr />
      <UserStatus isOnline={false} />
      <hr />
      <ProfileCard Name="Doramon" Profession="Machine" img="https://tse2.mm.bing.net/th/id/OIP.m9YgutB2Riw4NSU8qbZYoAHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
      <hr />
      <StudentChild Name="Nisha" Age="20" Course="BCA" Year="2nd" Semester="4th" Batch="(2023-2026)" />
      <hr />
      <Welcome name='Nisha' />
      <hr />
      <Welcome />
      <hr />

      <ProdectList products={Productlists} />
      <hr />

      <StudentList studentInfo={studentInfo} />
      <hr />

      <div >
        <h1>Task 15: Card Component with Children</h1>
        <div className="container">
          <Card>
            <h2>About React</h2>
            <p>React is a JavaScript library used to build user interfaces.</p>
          </Card>

          <Card>
            <h2>About JavaScript</h2>
            <p>JavaScript is used to make websites interactive.</p>
          </Card>

          <Card>
            <h2>About CSS</h2>
            <p>CSS is used to style and design web pages.</p>
          </Card>
        </div>
      </div>


      <hr />

      <Teacher
        name="nisha"
        subject="Mathematics"
        experience="5 Years"
        qualification="M.Sc Mathematics"
      />
      <hr />
      <Company
        name="Google"
        location="California, USA"
        employees="180,000+"
        industry="Technology"
        website="www.google.com"
      />
      <hr />

      <UserProfile user={user} />

      <hr />

      <div>

        <CourseCard>
          <h3> courseName : JavaScript</h3>
          <h3> instructor : Akshay Saini</h3>
          <h3> duration : 2 Months</h3>
          <h3> level : Intermediate</h3>
          <h3>price : 1999</h3>
        </CourseCard>

      </div>

      <hr />
      <div>
        <Dashboard student={student} />
      </div>

    </>

  )
}

export default App