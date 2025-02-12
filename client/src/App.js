import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import RegistrationForm from './components/RegistrationForm'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<RegistrationForm />} />
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/dash' element={<Dashboard/>}/>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
