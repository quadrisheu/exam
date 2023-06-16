import '../styles/Blog.css'
import book from '../img/book2.png'
import vec5 from '../img/Vector5.png'

function Blog() {
  return (
    
    <div className='blog-container'>
      <div className="banner">
        <h6 className='thre'>Blog</h6>
        <h3 className='three'>Get the latest Updates</h3>
        <p>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need!</p>
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
          
          <div className="next next2 next3">
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
          
          <div className="next next2 next3">
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
          
          <div className="next next2 next3">
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

export default Blog