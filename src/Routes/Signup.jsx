import axios from 'axios';
import { useEffect, useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';


const emailExistsStyle = {
   borderColor: 'red',
   outlineColor: 'red'
}


function Signup() {

   const [showToggle, setShowToggle] = useState(false);
   const [userCredential, setUserCredential] = useState([]);
   const [user, setUser] = useState({ email: '', password: '' });
   const navigate = useNavigate();
   const [exists, setExists] = useState(false);


   const getUserCredential = () => {
      axios.get(`https://json-server-mock-api-all.herokuapp.com/userCredentials`)
         .then(res => setUserCredential(res.data))
         .catch(err => console.log(err));
   }


   const handleChange = (event) => {
      const { name, value } = event.target;
      setUser({ ...user, [name]: value });
   }


   const handleSubmit = () => {
      axios.post(`https://json-server-mock-api-all.herokuapp.com/userCredentials`, {
         ...user,
         id: user.password + Date.now(),
      })
         .then(res => { navigate('/login') })
         .catch(err => console.log(err));
   }


   useEffect(() => {

      setExists(false);
      getUserCredential();
      userCredential.forEach(el => { if (el.email === user.email) setExists(true) });

   }, [user]);


   document.title = 'Sign Up';


   return (
      <div className="signup">
         <div className="signup-art-i"></div>
         <div className="signup-art-ii"></div>
         <div className="signup-header">
            <h1>Create a free account</h1>
            <div>Make and share unlimited videos for free</div>
         </div>
         <div className="signup-body">
            <input onChange={handleChange} style={exists ? emailExistsStyle : undefined} type="email" name='email' placeholder="Email" autoFocus />
            {exists &&
               <div className='email-status'>
                  <RiErrorWarningLine />
                  User already exists. Go to
                  <div>
                     <Link to='/login' style={{ textDecoration: 'none', color: '#23408c' }}>Log in →</Link>
                  </div>
               </div>
            }
            {
               showToggle ?
                  <input onChange={handleChange} style={exists ? emailExistsStyle : undefined} type="text" name='password' placeholder="Password" />
                  : <input onChange={handleChange} style={exists ? emailExistsStyle : undefined} type="password" name='password' placeholder="Password" />
            }
            <button
               onClick={handleSubmit}
               className={user.email === '' || user.password === '' || exists ? "btn disabled" : "btn"}
            >
               CREATE AN ACCOUNT
            </button>
            {
               showToggle ?
                  <BiShow className="password-icon" onClick={() => setShowToggle(!showToggle)} />
                  : <BiHide className="password-icon" onClick={() => setShowToggle(!showToggle)} />
            }
         </div>
         <div className="signup-footer">
            <div>
               <div></div>
               <div>or</div>
               <div></div>
            </div>
            <button className="btn outline">
               <FaFacebook style={{ color: '#3f51b5', fontSize: '24px', margin: '-4px 0' }} />
               SIGN UP WITH FACEBOOK
            </button>
            <div>
               By signing up you agree to our <span>terms of service</span> and <span>privacy policy</span>.
            </div>
            <div className='ls-link'>
               Already have an account?
               <Link to="/login" style={{ textDecoration: 'none', color: '#23408c' }}>Log in</Link>
            </div>
         </div>
      </div>
   );
}

export default Signup;