import { MdVideoSettings } from 'react-icons/md';
import { AiOutlinePieChart } from 'react-icons/ai';
import { TbFaceId } from 'react-icons/tb';
import { TiVideoOutline } from 'react-icons/ti';

function Learn({ onMouseEnter, onMouseLeave }) {
   return (
      <div
         className="learn-dropdown"
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
      >
         <div>
            <MdVideoSettings className="learn-icon" />
            <p>Tutorial</p>
            <p>Learn how to create videos with Animoto.</p>
         </div>
         <div>
            <AiOutlinePieChart className="learn-icon" />
            <p>Success stories</p>
            <p>See inspiration from real life businesses.</p>
         </div>
         <div>
            <TiVideoOutline className="learn-icon" />
            <p>Blog</p>
            <p>Read guides, video tips, and more.</p>
         </div>
         <div>
            <TbFaceId className="learn-icon" />
            <p>Help Center</p>
            <p>Get support from our Customer Team.</p>
         </div>
      </div>
   );
}

export default Learn;