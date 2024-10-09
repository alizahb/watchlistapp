import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Navbar = () => {
   const handleLogout = () => {
       //logout logic
       console.log('User Logged Out');


   };
   return (
       <nav style = {{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', display: 'flex', justifyContent:'space-between', alignItems: 'center'} }>
           <div style={{display:'flex', gap: '15px'}}>
               <NavLink to ='/signup' style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
               Sign Up
               </NavLink>
              <NavLink to='/login' style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
              Login
              </NavLink>
              <NavLink to= '/movie-search' style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
              Search Movies
              </NavLink>
              <NavLink to ='/profile'style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
              My Profile
              </NavLink>
              <NavLink to ='/'style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
              Home
              </NavLink>
              <NavLink to = '/' onClick = {handleLogout} style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
              Log Out
              </NavLink>
           </div>
       </nav>
   );
};


export default Navbar;






/* conditional rendering for navbar:
const NavBar = ({ user }) => {
 return (
   <>
     { user ? (
       <nav>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="">Sign Out</Link></li>
         </ul>
       </nav>
     ) : (
       <nav>
         <ul>
           <li><Link to="/signin">Sign In</Link></li>
           <li><Link to="/signup">Sign Up</Link></li>
         </ul>
       </nav>
     )}
   </>
 )
}*/
