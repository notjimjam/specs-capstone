import React, { useState, useEffect } from 'react'
import '../css/Weather.css'

const weather = require('openweather-apis');

weather.setLang('en');
weather.setAPPID('a58c70473a64313eecf176d311de0ce5');  
weather.setUnits('imperial')

export default function Weather({ zipCode }) {
    const [result, setResult] = useState(null)
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [wind, setWind] = useState('')
    const [temp, setTemp] = useState('')
    const [desc, setDesc] = useState('')
  
    useEffect(() => {
      weather.setZipCode(zipCode)
      weather.getAllWeather((err, json) => {
        if (err) {
          setResult(null)
        } else {
          setResult(json)
        } 
      }) 
    },[zipCode])

    useEffect(() => {
      if(result !== null) {
        setCity(result.name)
        setCountry(result.sys.country)
        setWind(result.wind.speed)
        setTemp(result.main.temp)
        setDesc(result.weather[0].description)

      }
      
    },[result])
    const roundTemp = Math.round(temp)
    const roundWind = Math.round(wind)

    return (
      <div className='weather'>
        <div>
          <h4>Current Conditions for {city}, {country} :</h4>
        </div>
        <div>
          <p>Temperature: {roundTemp}°F</p>
          <p>Wind Speed: {roundWind} mph</p>
          <p>Sky: {desc}</p>
        </div>
      </div>
    )
}
