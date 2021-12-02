import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {

  //state
  const [countries,setCountries]=useState([]);

  //useEffect
 
  useEffect(()=>{
        fetch('https://restcountries.com/v2/all')  
        .then(response => response.json())
        .then(data => setCountries(data))
  },[])
   
    return (
        <div>
            <h1>Hello Form Countries:{countries.length}</h1>
           
           
           <div className="country-container">
           {
          countries.map(country=><Country 
            name={country.name} 
            flag={country.flag}
            capital={country.capital} 
            population={country.population}
            region= {country.region}
           
            

            ></Country>)  }
           </div>
           
           
    
        </div>
    );
};

export default Countries;