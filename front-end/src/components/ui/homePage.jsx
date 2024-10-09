import React, {useEffect, useState} from 'react';
//import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import {fetchHomeData} from'/src/services/homeService';


const HomePage = () => {
const [data, setData] = useState(null);
const [error, setError] = useState(null);


useEffect(() => {
  
   const loadData= async () => {
       try {
           const result = await fetchHomeData();
           setData(result);
       } catch (error) {
           console.log('error loading data', error)
       }
   };
   loadData();
}, []);


   return (
       <div>
           {error ? (
               <p>{error}</p>
   ) : (  
           <div>
         
       <h1>hello!</h1>
       </div>
   )}
       </div>
       );
   }
      /* <div>
           <Navbar/>
           <h1>WATCHLIST</h1>
           <p>Your personal space to track all the movies you don't want to miss!</p>
           <Link to = '/movie-search' style={{textDecoration:'none', fontSize: '18px'}}>
               Find Your New Favorite Movie Here
           </Link>
       </div>
   ); */




export default HomePage