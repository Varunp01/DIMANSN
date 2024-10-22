import { useState } from 'react'
import './App.css'
import Navbar from "./NavTitleFoote/Navbar";
import Title from './NavTitleFoote/Title';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './NavTitleFoote/Footer';
import Home from './Pages/Home';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* 
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}


      <BrowserRouter>
        <div className="background">
          <Navbar></Navbar>
          <div className=' flex justify-center bg-slate-100'>
            <hr className='w-11/12 border-1' />
          </div>
          <Title></Title>
          <div className=' flex justify-center bg-slate-100'>
            <hr className='w-10/12 border-1 border-black' />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <div className=' flex justify-center bg-slate-100'>
          <hr className='w-10/12 border-1 border-black'/>
          </div>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
