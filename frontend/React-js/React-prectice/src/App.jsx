import './App.css'
// import ApiResponseWithTryCatch from './components/useEffectHook/ApiResponseWithTryCatch'
// import UseEffectHook from './components/useEffectHook/UseEffectHook'
// import Day5 from './components/Day5'
// import Counter from './components/Counter'
// import Fruits from './components/Fruits';
// import InfoArray from './components/InfoArray';
// import OurInfo from './components/OurInfo';
// import Header from './components/Header';
// import User from './components/User';

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Header from "./components/Routing/pages/Header";
import Home from "./components/Routing/pages/Home";
import About from "./components/Routing/pages/About";
import Skills from "./components/Routing/pages/Skills";
import Project from "./components/Routing/pages/Project";
import User from './components/Routing/pages/User'; //peramitries path
import PageNotFound from './components/Routing/PageNotFound';
import Form from './components/Form/form';

function App() {

  // let info = {
  //   name: "Nisha",
  //   age: 28,
  //   status: "Java Full-Stack Developer"
  // }

  // let ArrOfObj = [
  //   {
  //     id: 1,
  //     name: "Nisha",
  //     age: 20,
  //     status: "Developer"
  //   },

  //   {
  //     id: 2,
  //     name: "Neha",
  //     age: 20,
  //     status: "Developer"
  //   },
  //   {
  //     id: 3,
  //     name: "Muskan",
  //     age: 20,
  //     status: "Developer"
  //   },
  //   {
  //     id: 4,
  //     name: "Aqsa",
  //     age: 20,
  //     status: "Developer"
  //   },
  //   {
  //     id: 5,
  //     name: "Anshika",
  //     age: 20,
  //     status: "Developer"
  //   },
  // ]

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/form" element={<Form />} />


          {/* //while coud routes */}
          {/* 1st */}
          <Route path="/*" element={<PageNotFound />} />
          {/* 2nd */}
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}

        </Routes>

        {/* <Form /> */}


      </BrowserRouter>

      {/* <div> */}
      {/* <ApiResponseWithTryCatch /> */}
      {/* <UseEffectHook /> */}
      {/* <Header /> */}
      {/* <Day5 /> */}

      {/* <Counter /> */}

      {/* <InfoArray ArrOfObj={ArrOfObj} /> */}

      {/* <OurInfo info={info} /> */}


      {/* <h1>App Components.. !!</h1>
      <h1>My name is {info.name}</h1>
      <Header info={info} /> */}

      {/* <User islogin={false} /> */}

      {/* <User name="Nisha" color="blue" size="30px" />
      <User name="Neha" color="red" size="30px" />
      <User name="Taniya" color="green" size="30px" /> */}

      {/* <Fruits Fruits={[
        "Apply",
        "Mango",
        "Banana",
        "Papaya",
        "Dates"
      ]} /> */}

      {/* </div> */}


    </>
  )
}

export default App
