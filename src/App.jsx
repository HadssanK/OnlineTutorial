import { useEffect, useState } from 'react'

// import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(()=>{
       localStorage.setItem('current_theme' , theme);
  },[theme])

  return (
    <>
  <div className={`container ${theme}`}>
 <Navbar theme={theme} setTheme={setTheme}/>

<Routes>
<Route path='/' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='courses' element={<Courses/>}/>
  <Route path='Contact' element={<Contact/>}/>
</Routes>
   <Footer/>

  </div>
  </>
  )
}

export default App
