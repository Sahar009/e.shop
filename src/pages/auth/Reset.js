import React from 'react';
import styles from "./auth.module.scss";
// import resetImg from '../../assets/forgot.pmg'
import { Link } from 'react-router-dom';

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
    <div className={styles.img}>
        {/* <img src={} alt='reset password' width='350'/> */}
    </div>
    <div className={styles.form}>
        <h2>Reset Password</h2>
        <form>
            <input type='text' placeholder='Email' required/>
            <button  type="submit" className="--btn --btn-primary --btn-block"> Reset Password</button>
           
            <div className={styles.links}>
            <p>
                  <Link to="/login">- Login</Link>
                </p>
                <p>
                  <Link to="/register">- Register</Link>
                </p>
                  </div>
                  
             
        </form>
  
    </div>
    
        </section>
  )
}

export default Reset