import { useState } from 'react'
import '../styles/Faq.css'
import vec5 from '../img/Vector6.png'
import book from '../img/library.png'
import stroke from '../img/Stroke.png'
// import Dropdown from 'react-bootstrap/Dropdown'

function Faq()
{
  const [drop, setDrop] = useState(false)
        const dropDown=()=>{
        setDrop(!drop)
    }
    const [drop1, setDrop1] = useState(false)
    const dropDown1=()=>{
        setDrop1(!drop1)
    }
const [drop2, setDrop2] = useState(false)
    const dropDown2=()=>{
        setDrop2(!drop2)
    }
    const [drop3, setDrop3] = useState(false)
    const dropDown3=()=>{
        setDrop3(!drop3)
    }
const [drop4, setDrop4] = useState(false)
    const dropDown4=()=>{
        setDrop4(!drop4)
    }
    const [drop5, setDrop5] = useState(false)
    const dropDown5=()=>{
        setDrop5(!drop5)
        }
        
  return (
    <div className='faq-container'>
      <div className="banner">
        <h6 className='thre'>FAQ</h6>
        <h3 className='three'>What do people usually <br />ask?</h3>
        <p>We Will Open The World Of Knowledge For You! This is the latest <br />online examination system you will ever need!</p>
      </div>
      
  
        
        <div className='faq-two-grand'>
                <div className='faq-two-parent'>
                    <div className='faq-two'>
                        <div className='faq-two-sub' onClick={dropDown}>
                            <div className='f-one'>
                                <p>What is Exam Africa</p><img src={stroke} alt="" />
                            </div>

                                {drop &&  <div className='f-one-sub'>
                                <p>Exams Africa is a platform designed to help Africans prepare prepare for exams.<br/> We offer a comprehensive collection of past exam questions from a wide range of <br/> subjects, allowing users to test their knowledge and improve their skills.</p>
                            </div>}
                        </div>
                         <div  className='faq-two-sub' onClick={dropDown1}>
                            <div className='f-one'>
                                <p>Who can use Exam Africa</p><img src={stroke} alt="" />
                            </div>
                            {drop1 &&  <div className='f-one-sub'>
                                <p>Exams Africa is designed for anyone who is looking to practise for upcoming <br/> exams. This includes students preparing for high school or college exams, as well <br/> as professionals looking to advance their careers.</p>
                            </div>}
                        </div>
                    </div>
                 <div className='faq-two'>
                        <div  className='faq-two-sub' onClick={dropDown2}>
                            <div className='f-one'>
                                <p>What subjects are covered on Exams Africa</p><img src={stroke} alt="" />
                            </div>
                     {drop2 &&  <div className='f-one-sub'>
                                <p>Our platform offers exam questions from a variety of subjects, including math,<br/> science, English, and history. We are constantly updating our collection to ensure<br/>that we have the most current and relevant exam questions available.</p>
                            </div>}
                        </div>
                  <div  className='faq-two-sub' onClick={dropDown3}>
                            <div className='f-one'>
                                <p>Is Exams Africa free to use?</p><img src={stroke} alt="" />
                            </div>
                         {drop3 && <div className='f-one-sub'>
                                <p>Exams.Africa isn't free but comes with a reasonable subscription module. We  <br/>believe that everyone should have access to the resources they need to succeed,  <br/>regardless of their financial situation.</p>
                            </div>}
                        </div>
                    </div>
                  <div className='faq-two'>
                        <div  className='faq-two-sub' onClick={dropDown4}>
                            <div className='f-one'>
                                <p>Can I track my progress on Exams Africa</p><img src={stroke} alt="" />
                            </div>

                   {drop4 && <div className='f-one-sub'>
                                <p>Yes, our platform includes a tracking system that allows users to monitor their  <br/>progress and identify areas where they need to improve. This allows users to  <br/>focus their studying and maximize their exam performance.</p>
                            </div>}
                        </div >
                    <div  className='faq-two-sub' onClick={dropDown5}>
                            <div className='f-one'>
                                <p>Is Exams Africa availabe on mobile devices</p><img src={stroke} alt="" />
                            </div>
                    {drop5 && <div className='f-one-sub'>
                                <p>Yes, our platform is fully mobile-responsive and you can also download our mobile <br/> app, allowing users to access and use it on their smartphones and tablets. This  <br/>makes it easy to practise for exams on the go, anytime, anywhere.</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>

        
      
      <div className="latest">
        <h2>Get Every Latest News Feed</h2>
        <span></span>
      </div>


      <div className="newsfeed">
        <div className="feed">
        <div className="next next1">
        <img className='buk' src={book} alt="book pics" />
           <h3>Examination Preparations</h3>
           <p className='para'>Start your revision early. There is no substitute for 
            starting early with revision. You need to give yourself 
            enough time to review everything that you have
            studied, and make sure that.......
          </p>
          <button className='butt'>
            View This Article <img src={vec5} alt=" pics" />
          </button>
          </div>
          
          <div className="next next2">
          <img className='buk' src={book} alt="book pics" />
           <h3>Examination Preparations</h3>
           <p className='para'>Start your revision early. There is no substitute for 
            starting early with revision. You need to give yourself 
            enough time to review everything that you have
            studied, and make sure that.......
          </p>
          <button className='butt'>
            View This Article <img src={vec5} alt=" pics" />
          </button>
          </div>


        </div>





      </div>

      
      
 </div>

  )
}

export default Faq