function EverythingNeedLeftCard({ title, des, video, buttonText }) {
   return (
      <div>
         <div className="need-details">
            <h1>{title}</h1>
            <div>{des}</div>
            <button className='btn outline'>{buttonText}</button>
         </div>
         <div>
            <video
               src={video}
               autoPlay
               muted
               loop
            ></video>
         </div>
      </div>
   );
}

export default EverythingNeedLeftCard;