import {useState} from 'react';
import styles from "./Header.module.scss";
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {FaShoppingCart, FaTimes} from 'react-icons/fa';
import {HiOutlineMenuAlt3} from 'react-icons/hi';
import {FaUserCircle} from 'react-icons/fa';
import { auth } from '../../database/config';
import { signOut } from 'firebase/auth';
import { toast } from "react-toastify";



const logo =   (<div className={styles.logo}>
                
 <Link to='#'>               
<h2>
    E<span>shop</span>
</h2>
</Link>    

</div>);



const cart = (
    <span className={styles.cart}>
      <Link to="/cart">
        Cart
        <FaShoppingCart size={20} />
        <p>0</p>
      </Link>
    </span>
  );
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");




const  Header = () => {
    const hideMenu = () => {
        setShowMenu(false);
      };

    const [showMenu, setShowMenu] = useState();

    const toggleMenu = ()=>{
      setShowMenu(!showMenu)

    };
    const navigate=useNavigate()
 
    const logoutUser =(e) =>{
      signOut(auth).then(() => {
        toast.success('Logout Successfully')
        navigate('/')

      }).catch((error) => {
        toast.error(error.message)
      });
    };
    

    return (
        <header>
            <div className={styles.header}>
                    {logo}         
                <nav className={
              showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
            }>
              <div className={
                showMenu
                  ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                  : `${styles["nav-wrapper"]}`
              } 
              onClick={hideMenu}>
             
              </div>
               <ul onClick={hideMenu}>
                
              <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={22} color="#fff" onClick={hideMenu} />
                
              </li>
              <li>
                
                  <Link to="/admin/home">
                    <button className="--btn --btn-primary">Admin</button>
                  </Link>
                
              </li>
              
              <li>
                <NavLink to="/" className={activeLink} on>
                    {/* classname={(state)=>console.log(state)} */}
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={activeLink} >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className={styles["header-right"]} onClick={hideMenu}>
              <span className={styles.links}>
                
                  <NavLink to="/login" className={activeLink} >
                    Login
                  </NavLink>
                
                
                  <a href="#home" style={{ color: "#ff7722" }}>
                    <FaUserCircle size={16} />
                    Hi, user
                  </a>
                
               
                  <NavLink to="/order-history" className={activeLink}>
                    My Orders
                  </NavLink>
                
                
                  <NavLink to="/"className={activeLink} onClick={logoutUser}>
                    Logout
                  </NavLink>
                
              </span>
              {cart}
            </div>
            
                </nav>
                
                <div className={styles['menu-icon']}>
                  {cart}
                  <HiOutlineMenuAlt3 size={25} onClinck={toggleMenu}/>

                </div>
            </div>
        </header>
      )
    }
    


export default Header;