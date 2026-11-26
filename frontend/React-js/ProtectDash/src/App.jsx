import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ProtectedRouter from './components/ProtectedRouter'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>

        <Route path='/dash' element={
          <ProtectedRouter>
            <Dashboard/>
        </ProtectedRouter>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
