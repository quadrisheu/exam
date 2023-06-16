
import '../styles/ContactUs.css'

import { AiFillTwitterSquare } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiFillFacebook } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import vec6 from '../img/Vector6.png'


function ContactUs() {
  return (
    <div className='contact-container'>
      <div className="banner">
        <h6 className='thre'>Support</h6>
        <h3 className='three'>How can we help you?</h3>
        <p>We Will Open The World Of Knowledge For You! This is the <br />latest online examination system you will ever need!</p>
      </div>

      <div className="us">
        <div className="us1">
          <h5 className='ox'>Contact Us</h5>
          <p className='ox2'>We Will Open The World Of Knowledge For You! This
            is the latest online examination system you will ever 
            need!</p>
          <div className="us1a">
            <div className="verti"></div>
            <div className="verto">
            <h6>Head Office</h6>
            <p>41/42, industrial avenue <br />Sabo Yaba Lagos.</p>
             <h4> <GoLocation style={{ width: "21px", height: "20px", color: "#002099", marginRight: "10px", marginBottom: "-5px" }} />
                <span style={{ color: "#002099" }}>Get direction</span>
             </h4>
              <p>+234 (0) 916 772 4945</p>
              <p>hello@exams.africa</p>
              <div className="social">
                <AiFillFacebook style={{ width: "14px", height: "14px", margin: "10px 3px" }} />
                <FaInstagramSquare style={{ width: "14px", height: "14px", margin: "10px 3px" }} />
                <AiFillTwitterSquare style={{ width: "14px", height: "14px", margin: "10px 3px" }} />
                
                

              </div>
            </div>
          </div>
        </div>
        
        <div className="us2">
          <form action="">
            <div className="us2a">
              <span><label>Name</label><br />
                <input className='name5' type="text" name="name" placeholder="Garba Garba" value=""></input>
              </span>
              <span><label>Email</label><br />
                <input className='email5' type="email" name="email" placeholder="grababegd@gmail.com" required="" value=""></input>
              </span>
              
            </div>
            <span><label>Subject</label><br />
              <input className='subject5' type="text" name="subject" placeholder="Can’t find a subject" value=""></input>
            </span>

            <span><label>How can we help you?</label><br />
              <input className='help5' name="message" placeholder="I need to study for a hausa exam and i can’t find the course"></input>
            </span>

            <button>
              <span>send message
                <img src={vec6} alt="book pics" />
                </span>

              </button>

          </form>


        </div>
      </div>

      <div className="need">
        <h3 className='ned'>Need specific help?</h3>
        <p>Visit our frequently asked questions section here or make use our social media platforms to get in contact with us. Click
          on any of the social media icons to <br />be redirected.</p>

      </div>

    </div>
  )
}

export default ContactUs