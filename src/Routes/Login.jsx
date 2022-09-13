import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';


const emailExistsStyle = {
   borderColor: 'red',
   outlineColor: 'red'
}


function Login() {

   const [showToggle, setShowToggle] = useState(false);
   const [userCredential, setUserCredential] = useState([]);
   const [user, setUser] = useState({ email: '', password: '' });
   const [exists, setExists] = useState(false);
   const [isWrongPassword, setIsWrongPassword] = useState(false);
   const navigate = useNavigate();
   const { setIsLogin, setUserEmail } = useContext(AppContext);


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
      userCredential.forEach(el => {
         if (el.password !== user.password) setIsWrongPassword(true);
         if (el.password === user.password) {
            setUserEmail(el.email);
            setIsLogin(true);
            navigate('/');
         }
      });
   }


   useEffect(() => {

      setExists(false);
      setIsWrongPassword(false);
      getUserCredential();
      userCredential.forEach(el => { if (el.email === user.email) setExists(true) });

   }, [user]);


   document.title = 'Log In';


   return (
      <div className="login">
         <div className="login-art-i"></div>
         <div className="login-art-ii"></div>
         <div className="login-header">
            <h1>Log in Animoto</h1>
            <div>Log in to create your next video.</div>
         </div>
         <div className="login-body">
            <input onChange={handleChange} style={!exists ? emailExistsStyle : undefined} type="email" name='email' placeholder="Email" autoFocus />
            {!exists &&
               <div className='email-status'>
                  <RiErrorWarningLine className="invalid-icon" />
                  Invalid user email. Go to
                  <div>
                     <Link to='/signup' style={{ textDecoration: 'none', color: '#23408c' }}>Sign up →</Link>
                  </div>
               </div>
            }
            {
               showToggle ?
                  <input onChange={handleChange} style={!exists ? emailExistsStyle : isWrongPassword ? emailExistsStyle : undefined} type="text" name='password' placeholder="Password" />
                  : <input onChange={handleChange} style={!exists ? emailExistsStyle : isWrongPassword ? emailExistsStyle : undefined} type="password" name='password' placeholder="Password" />
            }
            {isWrongPassword &&
               <div className='email-status'>
                  <RiErrorWarningLine className="invalid-icon" />
                  Wrong Password. Please check and try again.
               </div>
            }
            <button
               onClick={handleSubmit}
               className={user.email === '' || user.password === '' || !exists ? "btn disabled" : "btn"}
            >
               LOG IN WITH EMAIL
            </button>
            {
               showToggle ?
                  <BiShow className={isWrongPassword ? "password-icon-invalid" : "password-icon"} onClick={() => setShowToggle(!showToggle)} />
                  : <BiHide className={isWrongPassword ? "password-icon-invalid" : "password-icon"} onClick={() => setShowToggle(!showToggle)} />
            }
         </div>
         <div className="login-footer">
            <div>
               <div></div>
               <div>or</div>
               <div></div>
            </div>
            <div>
               <button className="btn gray">
                  <FaFacebook style={{ color: '#3f51b5', fontSize: '24px', margin: '0 7px -6px -4px' }} />
                  LOG IN WITH FACEBOOK
               </button>
               <button className="btn gray">
                  <FcGoogle style={{ fontSize: '24px', margin: '0 7px -6px -4px' }} />
                  LOG IN WITH GOOGLE
               </button>
               <button className="btn gray">
                  <FaApple style={{ color: 'black', fontSize: '24px', margin: '0 7px -6px -4px' }} />
                  LOG IN WITH APPLE
               </button>
            </div>
            <div>
               By logging in you agree to our <span>terms of service</span> and <span>privacy policy</span>.
            </div>
            <div className="ls-link">
               Already have an account?
               <Link to="/signup" style={{ textDecoration: 'none', color: '#23408c' }}>Sign up</Link>
            </div>
         </div>
      </div>
   );
}

export default Login;