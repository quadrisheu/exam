import { Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from './Home'
import Footer from './Footer'
import Faq from './Faq'
import ContactUs from './ContactUs'
import Blog from './Blog'

function Special() {
  return (
      <div>
          <Navbar/>
          <Routes>
              
               <Route path='/' element={<Home/>}/>
               <Route path='/blog' element={<Blog />}/>
               <Route path='/faq' element={<Faq />} />
               <Route path='/contactus' element={<ContactUs/>}/>
               
             </Routes>
             <Footer />
          
      </div>
  )
}

export default Special