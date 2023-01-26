import React from 'react';
import styles from './auth.module.scss';
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className={`container ${styles.auth}`}>
    <div className={styles.img}>
        {/* <img src={} alt='login img' width='350'/> */}
    </div>
    <div className={styles.form}>
        <h2>Register</h2>
        <form>
            <input type='text' placeholder='Email' required />
            <input type='password' placeholder='password' required/>
           
           
                  
               <button className='--btn --btn-primary --btn-block'>Register</button>
      
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
      )
    }
    

export default Register