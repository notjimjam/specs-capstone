import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Shuffle from './Shuffle'
import Login from './Login'

const baseUrl = 'http://api.weatherapi.com/v1/current.json?key='
const weatherKey = '03e97989d9564883919185503221105'

function Weather({ searchTerm, find, setFind }) {
    const [input, setInput] = useState('')
    const [value, setValue] = useState(null)
    const [weather, setWeather] = useState(null)
    const [wind, setWind] = useState('')
    const [cond, setCond] = useState('')
    const [word, setWord] = useState('')
    const [isZip, setIsZip] = useState(false)

    const freezing = ['cold winter lofi', 'cold weather country', 'cold weather vibezz', 'for cold winter mornings', 'cold weather supremacy', 'the weather is getting colder', 'cold skies/grey weather']
    const randFreezing = freezing[Math.floor(Math.random() * freezing.length)]

    const sunny = ['sunny', 'good jams', 'a perfect day', 'indie sunshine', 'soak up the sun', 'uplifting soul classics', 'surf rock sunshine']
    const randSunny = sunny[Math.floor(Math.random() * sunny.length)]

    const windy = ['windy', 'windy weather', 'windy vibes']
    const randWindy = windy[Math.floor(Math.random() * windy.length)]

    const partly = ['chill hits', 'just good music', 'partly cloudy', 'partly cloudy forecast', 'chilled r&b', "healin' blues"]
    const randPartly = partly[Math.floor(Math.random() * partly.length)]

    const hail = ['spring hail storm', 'southern gothic', 'violent classical']
    const randHail = hail[Math.floor(Math.random() * hail.length)]

    const heavy = ['tender', 'cozy rainy day', 'spring downpour', 'rainy day piano music', 'rainy day blues', 'sad soul']
    const randHeavy = heavy[Math.floor(Math.random() * heavy.length)]

    const rain = ['rainy day jazz, cold weather//rainy day', 'rainy day vibes', 'happy rainy day', 'chill rap on rainy days', 'sad girl country']
    const randRain = rain[Math.floor(Math.random() * rain.length)]

    const cloudy = ['calm before the storm', 'cloudy day', 'cloudy day lofi', 'slow cloudy mornings', 'overcast days', 'deep house relax', 'noir']
    const randCloudy = cloudy[Math.floor(Math.random() * cloudy.length)]

    const fog = ['foggy mornings', 'foggy forest vibes', 'morning fog', 'foggy mountain', 'misty forest', 'misty mountains', 'the misty moors']
    const randFog = fog[Math.floor(Math.random() * fog.length)]

    const snow = ['snowy mornings', 'snowy mornings in a coffee shop somewhere', 'snowy cabin in the mountains', 'chill snowy days', 'snowy jazz', 'snowy day vibes']
    const randSnow = snow[Math.floor(Math.random() * snow.length)]

    const thunder = ['Dark and Stormy', 'stormy lofi', 'thunderstorm music', 'the thunderstorm playlist', 'mid:nite storms', 'villain mode', 'dark and moody deep house']
    const randThunder = thunder[Math.floor(Math.random() * thunder.length)]

    const clear = ['the midnight hour', 'atmospheric piano', 'deep sleep', 'cosmic country', 'late night jazz', 'evening acoustic', 'moonlight beats']
    const randClear = clear[Math.floor(Math.random() * clear.length)]

      const inputHandler = (event) => {
          setInput(event.target.value)
      }
      
      const clickHandler = (event) => {
        event.preventDefault()
        setValue(input)
        setIsZip(true)
    }

    const closeClickHandler =(event) => {
      event.preventDefault()
      setIsZip(false)
    }


    useEffect(() => {
      if(!value) return
      // console.log('hi')
      axios.get(`${baseUrl}${weatherKey}&q=${value}`)
        .then((res) => {
          setWeather(res.data)
        }).catch((err) => {
          console.log(err)
          alert('enter valid location (ex. zipcode, city, or lat/long)')
        })
    }, [value])

    useEffect(() => {
      if(weather !== null)  {
        // console.log('hi')
        setCond(weather.current.condition.text)
        // setCond('wind')
        setWind(weather.current.wind_mph)
      }
    }, [weather])

    useEffect(() => {
      if(!cond) return
      if(!wind) return
      // console.log('hi')
      if (wind >= 30) {
      setFind(randWindy)
        document.body.className='mood-windy'
      } else if(cond.toLowerCase().includes("sunny")) {
      setFind(randSunny)
        document.body.className = 'mood-sunny'
      } else if(cond.toLowerCase().includes("partly")) {
      setFind(randPartly)
        document.body.className = 'mood-partly'
      }else if(cond.toLowerCase().includes("freezing")) {
      setFind(randFreezing)
        document.body.className = 'mood-freezing'
      }else if(cond.toLowerCase().includes("pellets")) {
      setFind(randHail)
        document.body.className= 'mood-hail'
      } else if(cond.toLowerCase().includes("snow") || cond.toLowerCase().includes('blizzard'))  {
      setFind(randSnow)
        document.body.className= 'mood-snow'
      } else if(cond.toLowerCase().includes("moderate rain") || cond.toLowerCase().includes('heavy rain') || cond.toLowerCase().includes('torrential')) {
      setFind(randHeavy)
        document.body.className= 'mood-heavy'
      } else if(cond.toLowerCase().includes("drizzle") || cond.toLowerCase().includes('rain') || cond.toLowerCase().includes('sleet')) {
      setFind(randRain)
        document.body.className= 'mood-rain'
      } else if(cond.toLowerCase().includes("cloudy") || cond.toLowerCase().includes('overcast')) {
      setFind(randCloudy)
        document.body.className='mood-cloudy'
      } else if(cond.toLowerCase().includes("mist") || cond.toLowerCase().includes('fog')) {
      setFind(randFog)
        document.body.className = 'mood-fog'
      } else if(cond.toLowerCase().includes("thunder")) {
      setFind(randThunder)
        document.body.className='mood-thunder'
      } else if(cond.toLowerCase().includes("clear")) {
      setFind(randClear)
        document.body.className = 'mood-clear'
      }
    
    }, [cond, wind])

  return (
    <div className='weather'>
      <div>
        { isZip ? 
            <button onClick={closeClickHandler} className='zip-close'>Change Location?</button>:
          <div>
            <input type='text' placeholder='Enter Location' onChange={inputHandler} className='zip-input'/>
            <button onClick={clickHandler} className='submit-btn'>Submit</button>
          </div>
      }
      </div>
        <Shuffle
         setWord={setWord} 
         word={word} 
         searchTerm={searchTerm} 
         cond={cond} 
         wind={wind}
         />
         {/* <div>
         <a href={<Login />} className='logout'>Log Out</a>
         </div> */}
    </div>
  )
}

export default Weather