import { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { ImCancelCircle } from 'react-icons/im';
import ListCard from './ListCard';

const list = [
   {
      title: 'WORK',
      data: ['Business', 'Real estate', 'Photography', 'Education', 'Fitness', 'Non-profit', 'E-Commerce']
   },
   {
      title: 'PERSONAL',
      data: ['Birthday', 'Wedding', 'Memorial', 'Graduation', 'Holidays']
   },
   {
      title: 'FEATURES',
      data: ['Video commenting tool', 'Screen recorder', 'Stock library', 'Online video maker', 'Text and fonts', 'Logo watermark', 'Music library', 'Video trimming', 'All features']
   },
   {
      title: 'VIDEO TYPES',
      data: ['Slideshow video', 'Recipe video', 'Video ads', 'Tutorial video', 'Promo video', 'Marketing video', 'Square video']
   },
   {
      title: 'SOCIAL MEDIA',
      data: ['Facebook', 'YouTube', 'Instagram', 'Twitter']
   }
];

function Explore() {

   const [toggle, setToggle] = useState(false);


   return (
      <div className="explore-comp">
         <div
            className="explore-header"
            onClick={() => setToggle(!toggle)}
         >
            EXPLORE
            {toggle ? <ImCancelCircle /> : <FiPlusCircle />}
         </div>
         {
            toggle &&
            <div className="explore-content">
               {
                  list.map(item => (
                     <ListCard title={item.title} data={item.data} />
                  ))
               }
            </div>
         }
      </div>
   );
}

export default Explore;