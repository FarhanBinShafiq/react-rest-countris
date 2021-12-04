//import logo from './logo.svg';
import './App.css';

//import { useEffect, useState } from 'react';

import Countries  from './components/Countries/Countries';
import Country from './components/Country/Country';
//import Header from './components/Countries/Header/Header';
import Footer from "./components/Footer/Footer"
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
       
      <Header></Header> 
      <Countries></Countries>   
      
      <Footer></Footer>

    </div>
  );
}


































//This is in the upper function return code line 
  /*<Countries></Countries>> 

  


/*
function Countries(){

  //state
  const [countries,setCountries]=useState([]);

  //useEffect
 
  useEffect(()=>{
        fetch('https://restcountries.com/v2/all')  
        .then(response => response.json())
        .then(data => setCountries(data))
  },[])


  return(
    <div>
      <h2>Travelling Around The World</h2>
      <h4>Countries Available:{countries.length}</h4>
      {
        countries.map(country=><Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}



function Country(props){
  return(
    <div>
       <h2>Name:{props.name}</h2>
       <p>capital:{props.capital}</p>


    </div>
  )
}
*/
export default App;
