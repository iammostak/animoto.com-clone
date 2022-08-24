import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from 'react-icons/io';
import Create from "./Create";
import { useState } from "react";
import Learn from "./Learn";

function Navbar() {

   const [dropdown_i, setDropdown_i] = useState(false);
   const [dropdown_ii, setDropdown_ii] = useState(false);


   return (
      <>
         <nav className="navbar">
            <img className="nav-art" src="https://animoto.com/static/AnimotoLogoBlobs-afa5652205594807da50c94d53f42b86.svg" alt="nav art" />
            <NavLink className="brand-logo" to='/'>
               <img src="https://animoto.com/static/logo-1d220e413f4f69fa42d66d93381db371.svg" alt="brand logo" />
            </NavLink>
            <div>
               <div
                  className="arrow-right"
                  onMouseEnter={() => setDropdown_i(true)}
                  onMouseLeave={() => setDropdown_i(false)}
               >
                  CREATE <IoIosArrowDown className="down-arrow" />
               </div>
               <div>TEMPLATES</div>
               <div>FEATURES</div>
               <NavLink className='nav-link' to='/pricing'>PRICING</NavLink>
               <div
                  className="arrow-right"
                  onMouseEnter={() => setDropdown_ii(true)}
                  onMouseLeave={() => setDropdown_ii(false)}
               >
                  LEARN <IoIosArrowDown className="down-arrow" />
               </div>
            </div>
            <div>
               <NavLink className="nav-link" to='/login'>LOG IN</NavLink>
               <NavLink className="nav-link" to='/signup'>SIGN UP FREE</NavLink>
            </div>
         </nav>
         {
            dropdown_i &&
            <Create
               onMouseEnter={() => setDropdown_i(true)}
               onMouseLeave={() => setDropdown_i(false)}
            />
         }
         {
            dropdown_ii &&
            <Learn
               onMouseEnter={() => setDropdown_ii(true)}
               onMouseLeave={() => setDropdown_ii(false)}
            />
         }
      </>
   );
}

export default Navbar;