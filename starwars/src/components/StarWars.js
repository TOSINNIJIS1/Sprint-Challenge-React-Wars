import React, { useState, useEffect } from 'react';
import axios from "axios";
import People from "../StarWarsCharacters";


const Character = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/?page=2")
    .then(res => {
      console.log(res.data.results);
      setData(res.data.results);
    })
    .catch(error => {
      console.log(Error)
    })
  },[]);


  return (
    <div className="name">
      <h1> 
        {Data.map((Profile, index) => {
          return (
            <People  key = {index} 
            name = {Profile.name} 
            gender = {Profile.gender} 
            hair_color = {Profile.hair_color}  
            eye_color = {Profile.eye_color}
            />
            )
        })}
      </h1>
  
    </div>
 
  );
}
   
export default Character;