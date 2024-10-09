import axios from 'axios';


export const fetchHomeData = async() => {
   try {
       const response = await axios.get('http://localhost:5000/api/home');
       return response.data;
   } catch(error) {
       console.error('Error fetching home data', error);
       throw error; 
   }
};

