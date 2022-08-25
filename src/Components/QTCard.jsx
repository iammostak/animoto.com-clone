import { useState } from "react";
import { CgPlayButtonO } from 'react-icons/cg';

function QTCard({ img, title, video }) {

   const [play, setPlay] = useState(false);


   return (
      <div>
         <img src={img} alt={title} />
         <CgPlayButtonO className='qt-play-btn' onClick={() => setPlay(true)} />
         <div>
            <h4>{title}</h4>
            <button className='btn'>USE THIS TEMPLATE</button>
         </div>
         {
            play &&
            <video
               src={video}
               autoPlay
               controls
               loop
               onClick={() => setPlay(false)}
            ></video>
         }
      </div>
   );
}

export default QTCard;