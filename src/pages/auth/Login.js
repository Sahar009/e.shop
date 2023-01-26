import React from 'react';
import styles from './auth.module.scss';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import loginImg from '../../assets'
const Login = () => {
  return (
    <section className={`container ${styles.auth}`}>
<div className={styles.img}>
    {/* <img src={} alt='login img' width='350'/> */}
</div>
<div className={styles.form}>
    <h2>Login</h2>
    <form>
        <input type='text' placeholder='Email' required/>
        <input type='password' placeholder='password' required/>
       
        <div className={styles.links}>
        <Link to="/reset">Reset Password</Link>
              </div>
              <p>-- or --</p>
         
    </form>
    <button className='--btn --btn-primary --btn-block'>
           <FcGoogle color="#fff" /> Login With Google</button>

    <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </span>
</div>

    </section>
  )
}

export default Login