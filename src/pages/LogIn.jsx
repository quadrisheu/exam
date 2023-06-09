import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../img/exams.png'
import '../styles/LogIn.css'
import { AiOutlineEye } from 'react-icons/ai'
import regl from '../img/regl.png'
import regr from '../img/regr.png'

function LogIn() {
  return (
    <div className='login-container'>
      <div className="login-head">
        <Link to='/' className='lit'> <img src={pic} alt="logo pics" /></Link>
        <p>Don’t have an account? Signup <Link to='/Register' className='log'> here</Link></p>
      </div>
      <div className="login-main">
        <h1>Login To <br />Continue</h1>
        <div className="login1">
          <form action="">
            

            <label>Username</label><br />
            <input type="text" name="username" className='pot1' value="" /><br />


            
            <div className="name1">
              <div>
                <label>Password</label><br />
                <input type="text" name="password" className='pet1' value="" />
                <span><AiOutlineEye /></span>
                <div className="forgot"><a href='/'>Forgot Password?</a></div>
              </div>
              
            </div>


            <div className="login-button1">
              <button className='button1'>Login Now</button>
            </div>



            <div className="login-bottom1">
              <span><img src={regl} alt="pics" /></span>
              <span><img src={regr} alt="pics" /></span>
            </div>




          </form>
          
        </div>
        
      </div>
      

    </div>
  )
}

export default LogIn