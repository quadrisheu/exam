import '../styles/Blog.css'
import book from '../img/book2.png'
import vec5 from '../img/Vector5.png'

function Blog() {
  return (
    
    <div className='blog-container'>
      <div className="banner">
        <h6>Blog</h6>
        <h3>Get the latest Updates</h3>
        <p>We Will Open The World Of Knowledge For You! This is the <br />latest online examination system you will ever need!</p>
      </div>

      

      <div className="newsfeed">
        <div className="feed">
        <div className="next next1">
        <img className='buk' src={book} alt="book pics" />
           <p className='para'>Start your revision early. There is no substitute for <br />
            starting early with revision. You need to give yourself <br />
            enough time to review everything that you have <br />
            studied, and make sure that.......
          </p>
          <button className='butt'>
            View This Article <img src={vec5} alt=" pics" />
          </button>
          </div>
          
          <div className="next next2">
          <img className='buk' src={book} alt="book pics" />
           <p className='para'>Start your revision early. There is no substitute for <br />
            starting early with revision. You need to give yourself <br />
            enough time to review everything that you have <br />
            studied, and make sure that.......
          </p>
          <button className='butt'>
            View This Article <img src={vec5} alt=" pics" />
          </button>
          </div>


        </div>

        <div className="feed">
        <div className="next next1">
        <img className='buk' src={book} alt="book pics" />
           <p className='para'>Start your revision early. There is no substitute for <br />
            starting early with revision. You need to give yourself <br />
            enough time to review everything that you have <br />
            studied, and make sure that.......
          </p>
          <button className='butt'>
            View This Article <img src={vec5} alt=" pics" />
          </button>
          </div>
          
          <div className="next next2">
          <img className='buk' src={book} alt="book pics" />
           <p className='para'>Start your revision early. There is no substitute for <br />
            starting early with revision. You need to give yourself <br />
            enough time to review everything that you have <br />
            studied, and make sure that.......
          </p>
          <button className='butt'>
            View This Article <img src={vec5} alt=" pics" />
          </button>
          </div>


        </div>

        <div className="feed">
        <div className="next next1">
        <img className='buk' src={book} alt="book pics" />
           <p className='para'>Start your revision early. There is no substitute for <br />
            starting early with revision. You need to give yourself <br />
            enough time to review everything that you have <br />
            studied, and make sure that.......
          </p>
          <button className='butt'>
            View This Article <img src={vec5} alt=" pics" />
          </button>
          </div>
          
          <div className="next next2">
          <img className='buk' src={book} alt="book pics" />
           <p className='para'>Start your revision early. There is no substitute for <br />
            starting early with revision. You need to give yourself <br />
            enough time to review everything that you have <br />
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

export default Blog