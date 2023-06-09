import React from 'react'
import '../styles/Home.css'
import Examsafrica from '../img/Examsafrica.mp4'
import mr from '../img/man.png'
import happy from '../img/happy.png'
import girl from '../img/girl.png'
import mid1 from '../img/mid1.png'
import mid2 from '../img/mid2.png'
import mid3 from '../img/mid3.png'
import book from '../img/book.png'
import vec from '../img/Vector.png'
import vec2 from '../img/Vector2.png'
import vec3 from '../img/Vector3.png'
import vec4 from '../img/Vector4.png'
import { TbWorld } from 'react-icons/tb'
import { BsApple } from 'react-icons/bs'
import { GrAndroid } from 'react-icons/gr'
import { RiTelegramLine } from 'react-icons/ri'
import { MdWhatsapp } from 'react-icons/md'

function Home() {
  return (
    <div className='home-container'>
      <div className="top1">
        <div className="practice"><span className='pra' >Practice</span><img className='ing ingp' src={girl} alt="pics" /><br /><img className='ing2' src={book} alt="book pics" /><span className='pre'>Prepare</span>
          <br /><span className='exc'>Excel</span><span className='bot'><span className='bat'><button>JAMB -<br /> UTME</button><button>WAEC -<br /> SSCE</button><button>WAEC -<br /> GCE</button></span>
            <span className='bit'><button className='common'>COMMON ENTRANCE <br />EXAM</button><button className='neco'>NECO</button></span></span>
          <p className="welcome">Welcome to the Exams.Africa, we will open the world of knowlegde for you! <br />
            This is the latest online examination system you will ever need to attain <br />
            success.</p>
          <div className='bill'><button className='get'>Get Started</button><button>Start Practising</button></div>
          </div>
        <div className="man"> <img src={mr} alt="man pics" style={{ width: "400px", height: "500" }} /></div>
      </div>
      <div className="middle">
        <div className="mid">
          <div className="midi">
          <div className="mid1">
            <img src={vec} alt="pics" />
          </div>
          <div className="mid2">
            <h3>Past questions</h3>
            <p>Thousands of past questions</p>
          </div>
            <span className='vert'></span>
          </div>
          <div className="midi">
          <div className="mid1">
            <img src={vec2} alt="pics" />
          </div>
          <div className="mid2">
            <h3>Mock Exams</h3>
            <p>Mock examination feature</p>
          </div>
            <span className='vert'></span>
          </div>
          <div className="midi">
          <div className="mid1">
            <img src={vec3} alt="pics" />
          </div>
          <div className="mid2">
            <h3>Track activity</h3>
            <p>Dashboard to track all activities</p>
          </div>
            <span className='vert'></span>
          </div>
          <div className="midi">
          <div className="mid1">
            <img src={vec4} alt="pics" />
          </div>
          <div className="mid2">
            <h3>Affordable</h3>
            <p>Low cost on in-app purchases</p>
          </div>
          
          </div>
          
        </div>
      </div>
      <h2 className="best">Why ExaLab Is Best?</h2>
      <div className="middle2">
        <div className="midj midjp">
          <img src={mid1} alt="pics" />
          <div className="category">
            <h3>Choose Your Category</h3>
            <p>Exams Africa gives every user a chance of <br />
              choosing their exam category based on <br />
              essential subjects or courses of study e.g <br />
              WAEC-SSCE, UTME (JAMB), etc.</p>
            <span></span>
          </div>
        </div>
        <div className="midj">
          
          <div className="category  cat">
            <h3>Select Preferable Subject</h3>
            <p>Every user gets to choose the preferred subject <br />
              to practise as there are as many essential <br />
              subjects as you want on the site.</p>
            <span></span>
          </div>
          <img src={mid2} className='img1' alt="pics" />
        </div>
        <div className="midj midjz3 ">
          <img src={mid3} alt="pics" />
          <div className="category">
            <h3>Practise</h3>
            <p>Now, this is where you get to test your <br />capabilities by practising the questions to the <br />
              finish line and getting graded at the end.</p>
            <span></span>
          </div>
        </div>

        <div className="midj midjz4">
          
          <div className="category  cat">
            <h3>Select Preferable Subject</h3>
            <p>The aim of this to help you see things more clearly <br />
            and get a good impression of the possible options, <br />
            whether you have your heart set on a particular <br />
            career path or not.</p>
            <span></span>
          </div>
          <img src={happy} className='img1' alt="pics" />
        </div>

      </div>

      <div className="middle3">
        <h2>Available on These platforms</h2>
        <div className="midd">
          <div className="midii midy">
          <div className="mid1">
              <TbWorld style={{ width: "22px", height: "41px", margin: "10px"}} />
          </div>
          <div className="mid2">
            <h3>Web</h3>
            <p><a href="/register">Get started</a></p>
          </div>
            <span></span>
          </div>
          <div className="midii">
          <div className="mid1">
              <BsApple style={{ width: "22px", height: "41px", margin: "10px"}} />
          </div>
          <div className="mid2">
            <h3>App Store</h3>
            <p><a href="/register">Download Now</a></p>
          </div>
            <span></span>
          </div>
          <div className="midii">
          <div className="mid1">
              <GrAndroid style={{ width: "22px", height: "41px", margin: "10px"}} />
          </div>
          <div className="mid2">
            <h3>Play Store</h3>
            <p><a href="/register">Download Now</a></p>
          </div>
            <span></span>
          </div>
          <div className="midii">
          <div className="mid1">
              <RiTelegramLine style={{ width: "22px", height: "41px", margin: "10px"}} />
          </div>
          <div className="mid2">
            <h3>Telegram</h3>
            <p><a href="/register">Coming soon</a></p>
          </div>
            <span>.</span>
          </div>
          <div className="midii">
          <div className="mid1">
              <MdWhatsapp style={{ width: "22px", height: "41px", margin: "10px"}} />
          </div>
          <div className="mid2">
            <h3>Whatsapp</h3>
            <p><a href="/register">Coming soon</a></p>
          </div>
          
          </div>
          
        </div>
      </div>

      <div className="middle4">
        <h3>Use the ExamsAfrica <br />Platform the right way</h3>
        <p>Learn the essential ways to successfully maximize the Platform for a exam success.</p>
        <div className='ved'>
           <video  className='vid' controls autoPlay >
      
             <source src={Examsafrica} type="video/mp4" />
      
           </video>
      
      
        </div>


      </div>

    </div>
  )
}

export default Home