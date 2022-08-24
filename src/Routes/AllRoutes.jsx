import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Pricing from "./Pricing";
import Signup from "./Signup";

function AllRoutes() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/pricing' element={<Pricing />} />
      </Routes>
   );
}

export default AllRoutes;