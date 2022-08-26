import { Link } from "react-router-dom";

function FirstVideo() {
   return (
      <div className='first-video-comp'>
         <div className='first-video-curve-i'></div>
         <div className='first-video-content'>
            <h1>Make your first video today</h1>
            <img src="https://animoto.com/static/wavy-inverted-dc16c74838538407f95c5216061b6531.svg" alt="curve-line" width="130px" />
            <div>
               <p>Create and share videos for free. Upgrade anytime for more customization.</p>
               <button className='btn white'>GET STARTED FREE</button>
               <div>
                  <Link to='/pricing' className='see-pricing'>
                     SEE PRICING
                  </Link>
               </div>
               <div className="first-video-art-i"></div>
               <div className="first-video-art-ii"></div>
            </div>
         </div>
         <div className='first-video-curve-ii'></div>
      </div>
   );
}

export default FirstVideo;