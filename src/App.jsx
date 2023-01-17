import React, { useState } from 'react'
import axios from 'axios';
import Form from './Compoent/Form'
import Weather from './Compoent/Weather'
import './App.css'
import Footer from './Compoent/Footer';
import $ from 'jquery'

export default function App() {

  const [weather, setWeather] = useState({
    city: '',
    country:'',
    humidity:'',
    description:'',
  })

  async function getWeather(e){
    e.preventDefault();
    let city = e.target.city.value;
    let country = e.target.country.value;
    let {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e36ed364400282e43250b6c4c0274d44`);

    if(city && country){
      setWeather({
        city: data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description
      })
    }
    else{
      setWeather({
        tempreature:'',
        city:'',
        country:'',
        humidity:'',
        description:''
      })
    }
  }
  $(document).ready(function(){
    $(".sk-chase").fadeOut(4000, () => {
      $("#landing").fadeOut(2000);
    });
  })
  return (
    <>
    <section id='landing'>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </section>
    <div className="wrapper vh-100 bg-black">
      <div className="container">
        <div className="box mt-5 mx-auto">
          <Form getWeather={getWeather}/>
          <Weather
          city={weather.city}
          country={weather.country}
          humidity={weather.humidity}
          description={weather.description}
          />
        </div>
          <Footer/>
      </div>
    </div>
    </>
  )
}