import { useEffect, useState } from "react";
import "./style.css";
const TempScale = () => {
    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Kharagpur");
    useEffect(()=>{
        // const api= "bea045e432b145537560ce8622a9c2f7";
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bea045e432b145537560ce8622a9c2f7`;
        fetch(url).then((res)=>{
            return res.json();
        }).then(data=> {
            console.log(data.main);
            setCity(data.main);
            // return data;
        })
    },[search]);
    return ( 
        <div className="box">
            <div className="searchBar">
        <input 
        placeholder="Enter City"
      type="search"
      onChange={(e)=>{
        setSearch(e.target.value);
      }}    
      className='inputField'
      
      />
      
      </div>
      <div className="info">
      {!city ? (
        <p>No Data Found</p>
      ) : (
        <>
        
        <h1 className="location">{search}</h1>
        <h2 className="temp">{city.temp}deg cel</h2>
        <h3 className="tempMinMax">Min: {city.temp_min}deg cel | Max: {city.temp_max}deg cel</h3>
      

      </>
      )}
      </div>
      </div>
    

     );
}
 
export default TempScale;