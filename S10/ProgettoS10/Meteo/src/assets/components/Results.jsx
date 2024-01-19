import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";

const Results = ({ search }) => {
  console.log(search)
  const location = useLocation;
  const searchTerms = new URLSearchParams(location.search).get("search");

  const [city, setCity] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+search+"&units=metric&APPID=a03f37e66ba4c3bdae78d5759287aef7"
      );
      if (res.ok) {
        let data = await res.json();
        console.log(data)
       
          setCity(data);
        
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

useEffect(()=> {
  console.log(city)
},[city])

  useEffect(()=> {
    if(search?.length > 2)
    fetchData()
  },[search])

  return (
    <>
     {city && 
     <div>
      <div>
      <h2>{city.name}</h2>
      </div>
      <div className="descrizione">
      <h4>{city.weather[0].main}</h4>
      <p>{city.weather[0].description}</p>
     </div>
      <div className="cardDiv gap-2">
      <div className="spazi">
  <Card style={{ width: '18rem' }}className='carine'>
      <Card.Body>
        <Card.Title>Wind Speed</Card.Title>
        <Card.Text>
         {city.wind.speed} km/h
        </Card.Text>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }} className='carine'>
     <Card.Body>
       <Card.Title>Humidity</Card.Title>
       <Card.Text>
        {city.main.humidity}%
       </Card.Text>
     </Card.Body>
   </Card>
   </div>
   <div className="spazi">
   <Card style={{ width: '18rem' }} className='carine'>
     <Card.Body>
       <Card.Title>Temp. Max</Card.Title>
       <Card.Text>
        {city.main.temp_max}°c
       </Card.Text>
     </Card.Body>
   </Card>
   <Card style={{ width: '18rem' }} className='carine'>
     <Card.Body>
       <Card.Title>Temp. Min</Card.Title>
       <Card.Text>
        {city.main.temp_min}°c
       </Card.Text>
     </Card.Body>
   </Card>
   </div>
   </div>
   </div>
   }
    </>
  )
};

export default Results
