import { useState } from 'react'
import './CardConversor.css'

const CardConversor = ({moedaA,moedaB}) => {
     const urlApi = 'https://economia.awesomeapi.com.br/last/'
     const [value,setValue] = useState(0)
     const [inputValue,setInputValue] = useState('')
    
    fetch(urlApi+moedaA+"-"+moedaB)
    .then( res => res.json())
    .then( data => setValue((inputValue*(data[moedaA+moedaB].bid)).toFixed(2)))  
    
  return (
        <div className='card-container'>
          <h1>De {moedaA} para {moedaB}</h1>
            <input type="number" name="" id="" onChange={ (e) => setInputValue(e.target.value)} placeholder="Digite um valor"/>
            <p>{value}</p>
        </div>
  )
}

export default CardConversor