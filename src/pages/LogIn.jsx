import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../img/exams.png'
import '../styles/LogIn.css'
import { AiOutlineEye } from 'react-icons/ai'
import regl from '../img/regl.png'
import regr from '../img/regr.png'

function LogIn() {
  return (
    <div className='signin-container'>
      <div className="loginH">
        <Link to='/' className='let'> <img src={pic} alt="logo pics" /></Link>
        <p>Don’t have an account? Signup <Link to='/Register' className='here'> here</Link></p>
      </div>
      <div className="loginM">
        <h1>Login To <br />Continue</h1>
        <div className="loginF">
          <form  className='far' action="">
            

            <label className='userL'>Username</label><br />
            <input type="text" name="username" className='user' value="" /><br />


            
            <div className="p-box">
              <div>
                <label className='passL'>Password</label><br />
                <input type="password" name="password" className='pass' value="" /><br />
                <span><AiOutlineEye className='eye' /></span>
                <div className="forgot"><a href='/'>Forgot Password?</a></div>
              </div>
              
            </div>


            <div className="loginB">
              <button className='buttonB'>Login Now</button>
            </div>



            <div className="login-foot">
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