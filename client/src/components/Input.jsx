import React, {useState} from 'react'
import Weather from './Weather'

function Input() {
    const [input, setInput] = useState('')
    const [value, setValue] = useState('')

    const inputHandler = (event) => {
        setInput(event.target.value)
    }

    const clickHandler = (event) => {
        event.preventDefault()
        setValue(input)
    }
    // console.log(value)
  return (
    <div>
      <div>
        <input type='text' placeholder='Enter Zipcode' onChange={inputHandler}></input>
        <br/>
        <button onClick={clickHandler}>Submit</button>
      </div>
        <div>
          <Weather zipCode={value}/>
        </div>
    </div>
  )
}

export default Input