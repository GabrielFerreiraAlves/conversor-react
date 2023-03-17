import { useEffect, useState } from "react"

const Card = () => {
  const url = 'https://economia.awesomeapi.com.br/last/'
  const [value,setValue] = useState(0)
  const [inputValue,setInputValue] = useState('')
  const moedaA = document.querySelector('#moedaA')
  const moedaB = document.querySelector('#moedaB')
  
  const valueSelect = () => {
     useEffect( () => {

       fetch(url+moedaA.value+"-"+moedaB.value)
       .then( res => res.json())
       .then( data => setValue((inputValue*(data[moedaA+moedaB].bid)).toFixed(2)))
     },[value])
  }
  return (
    <div>
      <input type="number" onChange={ (e) => setInputValue(e.target.value)}/>
      <select name="" id="moedaA" onChange={valueSelect()}>
        <option value="BRL">Real</option>
        <option value="ARS">Peso</option>
      </select>
      <p>{value}</p>
      <select name="" id="moedaB" onChange={valueSelect()}>
        <option value="ARS">Peso</option>
        <option value="BRL">Real</option>
      </select>
    </div>
  )
}

export default Card