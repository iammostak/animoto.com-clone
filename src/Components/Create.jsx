import ListCard from "./ListCard";

const arrA = ['Promo video', 'Slideshow video', 'Social media video'];
const arrB = ['Tutorial video', 'Birthday video', 'Graduation video'];
const arrC = ['Business', 'Real estate', 'Photography'];
const arrD = ['E-commerce', 'Education', 'Non-profit'];

function Create({ onMouseEnter, onMouseLeave }) {
   return (
      <div
         className="create-dropdown"
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
      >
         <ListCard title="BY VIDEO TYPE" data={arrA} />
         <ListCard title="" data={arrB} />
         <ListCard title="BY INDUSTRY" data={arrC} />
         <ListCard title="" data={arrD} />
      </div>
   );
}

export default Create;