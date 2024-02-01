import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Axios from 'axios';
import {useEffect, useState} from "react";

 const AppComponent = () => {
   const [data, setData] = useState();

   const getData = async () => {
     const response = await Axios.get("http://localhost:3000/getData");
     setData(response.data);
   };

   useEffect(() => {
     getData();
   }, []);
   return <div>{data}</div>;
 };

 export default AppComponent;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
      <App />
    </React.StrictMode>
  
);


