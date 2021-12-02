import React from 'react';
import '../Country/Country.css'

const Country = (props) => {
    
    //destrucruring
    
    const {name,flag,capital,population,region}=props;

    return (
        <div className="country">
           
            <h5>Country Name: {name}</h5>
            <img className="flag" src={flag} alt="" />
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Region:{region}</p>
        </div>
    );
};

export default Country;