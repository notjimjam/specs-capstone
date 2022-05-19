// import React, { useState, useEffect } from 'react'
// import '../css/Weather.css'
// import axios from 'axios'

// const baseUrl = 'http://api.weatherapi.com/v1/current.json?key='
// const weatherKey = '03e97989d9564883919185503221105'


// function Weather({ zipCode }) {

//   const [weather, setWeather] = useState(null)
//   const [city, setCity] = useState('')
//   const [state, setState] = useState('')
//   const [country, setCountry] = useState('')
//   const [wind, setWind] = useState('')
//   const [temp, setTemp] = useState('')
//   const [cond, setCond] = useState('')
//   const [feelsLike, setFeelsLike] = useState('')
//   const [icon, setIcon] = useState('')


//   useEffect(() => {
//     if(!zipCode) return
//     axios.get(`${baseUrl}${weatherKey}&q=${zipCode}`)
//       .then((res) => {
//         setWeather(res.data)
//       }).catch((err) => {
//         console.log(err)
//       })

//   }, [zipCode])

//   useEffect(() => {
//     if(weather !== null){
//       setCity(weather.location.name)
//       setState(weather.location.region)
//       setCountry(weather.location.country)
//       setCond(weather.current.condition.text)
//       setTemp(weather.current.temp_f)
//       setWind(weather.current.wind_mph)
//       setFeelsLike(weather.current.feelslike_f)
//       setIcon(weather.current.condition.icon)
//     }

//   },[weather])



//   return (
//     <div className='weather'>
//       <div>
//         <h4>Current Conditions for {city}, {state} :</h4>
//       </div>
//       <div>
//         <p>Temperature: {temp}°F</p>
//         <p>Feels Like: {feelsLike}°F</p>
//         <p>Wind Speed: {wind} mph</p>
//         <p>Conditions: {cond}</p>
//         <img src={icon} alt="" />
//       </div>
//     </div>
//         )
// }

// export default Weather