function EverythingNeedRightCard({ title, des, video }) {
   return (
      <div>
         <div>
            <video
               src={video}
               autoPlay
               muted
               loop
            ></video>
         </div>
         <div className="need-details">
            <h1>{title}</h1>
            <div>{des}</div>
            <button className='btn outline'>GET STARTED FREE</button>
         </div>
      </div>
   );
}

export default EverythingNeedRightCard;