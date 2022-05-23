import React, {useState, useEffect} from 'react'
import axios from 'axios'

const baseUrl = 'http://api.weatherapi.com/v1/current.json?key='
const weatherKey = '03e97989d9564883919185503221105'

function Weather({ searchTerm }) {
    const [input, setInput] = useState('')
    const [value, setValue] = useState(null)
    const [weather, setWeather] = useState(null)
    const [wind, setWind] = useState('')
    const [cond, setCond] = useState('')
    const [word, setWord] = useState('')

    const freezing = ['cold winter lofi', 'cold weather country', 'cold weather vibezz', 'for cold winter mornings', 'cold weather supremacy', 'the weather is getting colder', 'cold skies/grey weather']
    const randFreezing = freezing[Math.floor(Math.random() * freezing.length)]

    const sunny = ['sunny', 'good day vibes', 'a perfect day', 'indie sunshine', 'soak up the sun', 'uplifting soul classics', 'surf rock sunshine']
    const randSunny = sunny[Math.floor(Math.random() * sunny.length)]

    const windy = ['windy day', 'windy weather', 'windy vibes']
    const randWindy = windy[Math.floor(Math.random() * windy.length)]

    const partly = ['chill hits', 'just good music', 'partly cloudy', 'partly sunny', 'chilled r&b', "healin' blues"]
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
        event.preventDefault()
          setInput(event.target.value)
      }
      
      const clickHandler = (event) => {
        event.preventDefault()
        setValue(input)
        searchTerm(word)
    }

    // async function handleClick () {
    //   let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve("I am complete"), 3000)
    //   })

    //   let result = await promise
    //   alert(result)
    // }

    useEffect(() => {
      if(!value) return
      axios.get(`${baseUrl}${weatherKey}&q=${value}`)
        .then((res) => {
          setWeather(res.data)
        }).catch((err) => {
          console.log(err)
        })
        if(weather !== null)  {
          setCond(weather.current.condition.text)
          // setCond('partly')
          setWind(weather.current.wind_mph)
        }
  
    }, [value, weather])

    useEffect(() => {
      // console.log(cond)
      if(!cond) return
      if(!wind) return
      if (wind > 40) {
        setWord(randWindy)
      } else if(cond.toLowerCase().includes("sunny")) {
        setWord(randSunny)
        document.body.className = 'mood-sunny'
      } else if(cond.toLowerCase().includes("partly")) {
        setWord(randPartly)
        document.body.className = 'mood-partly'
      }else if(cond.toLowerCase().includes("freezing")) {
        setWord(randFreezing)
      }else if(cond.toLowerCase().includes("pellets")) {
        setWord(randHail)
      } else if(cond.toLowerCase().includes("snow") || cond.toLowerCase().includes('blizzard'))  {
        setWord(randSnow)
        document.body.className= 'mood-snow'
      } else if(cond.toLowerCase().includes("moderate rain") || cond.toLowerCase().includes('heavy rain') || cond.toLowerCase().includes('torrential')) {
        setWord(randHeavy)
      } else if(cond.toLowerCase().includes("drizzle") || cond.toLowerCase().includes('rain') || cond.toLowerCase().includes('sleet')) {
        setWord(randRain)
      } else if(cond.toLowerCase().includes("cloudy") || cond.toLowerCase().includes('overcast')) {
        setWord(randCloudy)
        document.body.className='mood-cloudy'
      } else if(cond.toLowerCase().includes("mist") || cond.toLowerCase().includes('fog')) {
        setWord(randFog)
      } else if(cond.toLowerCase().includes("thunder")) {
        setWord(randThunder)
      } else if(cond.toLowerCase().includes("clear")) {
        setWord(randClear)
      }

    }, [cond, wind, randFreezing, randSunny, randWindy, randPartly, randHail, randHeavy, randRain, randCloudy, randFog, randSnow, randThunder, randClear])
    
  return (
    <div>
      <div>
        <input type='text' placeholder='Enter Zipcode' onChange={inputHandler} className='zip-input'></input>
        <br/>
        <button onClick={clickHandler} className='submit-btn'>Submit</button>
      </div>
        <button onClick={() => searchTerm(word)} className= 'random-btn'></button>
    </div>
  )
}

export default Weather