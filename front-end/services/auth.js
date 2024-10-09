import axios from 'axios'; 
const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;
const API_URL = 'http://localhost:5173/api/auth'
    //is this the write api url? 


export const signup = async (userData) => {
   const res = await axios.post(`${API_URL}/signup`, userData); 
    if (res.data.token) {
        localStorage.setItem('token', res.data.token); 
    }
    return res.data; 
 }; 


 export const login = async (userData) => {
    const res = await axios.post(`${API_URL}/login`, userData);
    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
    }
    return res.data;
 }; 

 export const getToken= () => localStorage.getItem('token');

 export const logout = () => {
    localStorage=removeItem('token'); 
 }; 

/*
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   }); 
   const json = await res.json();
   if (json.err) {
     throw new Error(json.err);
   }
   return json; 



export {
 signup,
};

*/