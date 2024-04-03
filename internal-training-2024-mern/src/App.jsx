import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
function App() {
  return (
    <div className='bg-gradient-to-r from-blue-900 via-indigo-500 to-teal-300'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignUpForm/>}/>
            <Route path='/login' element={<LoginForm/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App
