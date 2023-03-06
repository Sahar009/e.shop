import React from 'react';
import { useState } from 'react';
import styles from './auth.module.scss';
import { Link,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../database/config';
import Loader from '../../components/loader/Loader'



const Register = () => {
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword, setCpassword]= useState('');
  const [isLoading, setIsLoading]= useState(false);
  const navigate = useNavigate()

  const registerUser = (e)=>{
    e.preventDefault()
    // console.log(email, password, cpassword)
    if (password !== cpassword) {
      toast.error("Passwords does not match.");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration Is Successful...");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  }
  return (
    <>
    
    {isLoading && <Loader/>}
    <section className={`container ${styles.auth}`}>
    <div className={styles.img}>
        {/* <img src={} alt='login img' width='350'/> */}
    </div>
    <div className={styles.form}>
        <h2>Register</h2>
        <form onSubmit={registerUser}>
            <input type='text' placeholder='Email' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' required value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <input type='password' placeholder='Confirm' required value={cpassword} onChange={(e)=> setCpassword(e.target.value)}/>
           
           
                  
               <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
      
        </form>

        <span className={styles.register}>
        <p>Already have an account?</p>
        <Link to='/login'> Login</Link>
       </span>
    </div>
    <div className={styles.img}>
      {/* <img src={registerImg} alt='Register' width='400'/> */}
    </div>
    
        </section>
        </>
      )
    }
    

export default Register