import {useState}from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import pic from '../img/exams.png';
import {GoThreeBars} from 'react-icons/go'
import {FaRegTimesCircle} from 'react-icons/fa'


function Navbar(){
    const [mobile, setMobile]= useState(false)
    const handleMobile=()=>{
        setMobile(!mobile)
    }
    const handleClose=()=>{
        setMobile(false)
    }
    return(
        <div className='nav-grand'>
        <div className='nav-parent'>
            <div className='nav-one'><Link to='/'><img src={pic}/></Link></div>
            <div className= {mobile ? 'mobile-link' : 'nav-two'}>
            <div className='nav-two-one'>
                <Link className='me' to='/blog'  onClick={handleClose}>Blog</Link>
                <Link className='mee' to='/faq' onClick={handleClose}>FAQ</Link>
                <Link className='mee' to='/contactus' onClick={handleClose}>Contact Us</Link>
            </div>
            <div className='nav-two-two'>
                <Link to='/register' className='star' onClick={handleClose}><button style={{background: '#1178ff', color: '#ffffff', width: '100px', height:'35px', border: 'none', marginRight:'10px'}}>Register</button> </Link>
                <Link to='/login'  className='star' onClick={handleClose}><button style={{background: '#ffffff',color: '#1178ff', width: '100px', height: '35px',  border: '2px solid #1178ff'}}>Log In</button> </Link>
            </div>
            </div>
            <div className='menu-bars menubar'>
                {mobile? <FaRegTimesCircle className='times' onClick={handleMobile}/>
                :
                <GoThreeBars className='bars' onClick={handleMobile}/>
                }
            </div>
        </div>
        </div>
    )
}
export default Navbar;