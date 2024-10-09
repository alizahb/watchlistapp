import React from 'react';
//import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login'; 
import SignUp from './components/SignUp'; 

//put nav bar after <Router> inside app
//import MovieSearchBar from './components/movies/MovieSearchBar';
//</Router>Route path ='/movie-search' element={<MovieSearchBar />}/>
const App = () => {
 //const [user, setUser]= useState(null);
 return (
   <Router>
     <Routes>
       <Route path='/' element={<HomePage/>} />
       <Route path ='/signUp' element= {<RegisterPage/>} />
       <Route path='/watchlist' element={<ProtectedRoute> <Watchlist/></ProtectedRoute>} />
       <Route path = '/login' element= {<Login />} />
     </Routes>
    </Router>
   
 );
};


export default App


