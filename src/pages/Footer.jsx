import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import pic from '../img/exam.png'
import { IoLogoLinkedin } from 'react-icons/io'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'

 
// RxInstagramLogo inst
// CiFacebook facebook


function Footer() {
  return (
      <footer>
          <div className="footer1">
              <div className="mininav">
                  <div className="mnav">
                      <h2>Main</h2>
                      <p><Link to='/' className='log'> Home</Link></p>
                  </div>
                  <div className="mnav">
                      <h2>Need Help</h2>
                      <p><Link to='/contactus' className='log'> Contact Us</Link></p>
                      <p><Link to='/faq' className='log'> FAQ</Link></p>
                  </div>
                  <div className="mnav">
                      <h2>Features</h2>
                      <p>Category</p>
                      <p>Past </p>
                      <p>Subject</p>
                     
                  </div>
                  <div className="mnav">
                      <h2>Informative</h2>
                      <p><Link to='/blog' className='log'> Blog</Link></p>
                  </div>

              </div>

              <div className="minav">
                  <Link to='/' className='logo'> <img src={pic} alt="logo pics" /></Link>
              <p>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever
                 need! With our easy online exam site, you will set up your own engaging exams that fit any kind of difficulty level and be a learning expert.

              </p>
    
                  <span><IoLogoLinkedin style={{ width: "32px", height: "32px", margin: "0px 10px" }} />
                      <AiFillTwitterSquare style={{ width: "32px", height: "32px", margin: "0px 10px" }} />
                      <FaInstagramSquare style={{ width: "32px", height: "32px", margin: "0px 10px" }} />
                      <AiFillFacebook style={{ width: "32px", height: "32px", margin: "0px 10px"}} /></span>
              </div>
              
          </div>
          <div className="footer2">
              © Copyright 2023 All Rights Reserved by Velox Technology Resources Limited
          </div>

      </footer>
  )
}

export default Footer