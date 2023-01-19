import React from 'react'
import styles from './auth.module.scss'
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
        <button className='--btn --btn-primary --btn-block'>Login</button>
    </form>
</div>

    </section>
  )
}

export default Login