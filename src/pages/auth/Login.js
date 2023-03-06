import { useState } from "react";
import styles from './auth.module.scss';
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Card from '../../components/card/Card';
// import loginImg from '../../assets';
import { auth } from "../../database/config";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../../components/loader/Loader";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";


const Login = () => {
  const [password,setPassword] = useState('');
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(email, password)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login Successful...");
        navigate('/')
        
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };
  return (
    <>
    <ToastContainer />
      {isLoading && <Loader />}
      
    <section className={`container ${styles.auth}`}>
<div className={styles.img}>
    {/* <img src={} alt='login img' width='350'/> */}
</div>
<Card>
<div className={styles.form}>

    <h2>Login</h2>
    
    <form onSubmit={loginUser}>
        <input type='text' placeholder='Email' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type='password' placeholder='password' required value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>
        <div className={styles.links}>
        <Link to="/reset">Reset Password</Link>
              </div>
              <p>-- or --</p>
         
    </form>
    <button className='--btn --btn-primary --btn-block' type="submit">
           <FcGoogle color="#fff" /> Login With Google</button>

    <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </span>
            
</div>
</Card>

    </section>
    </>
  )
}

export default Login