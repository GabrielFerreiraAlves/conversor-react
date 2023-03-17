import { useState } from "react"
import CardConversor from "./components/CardConversor"
import Charts from './components/Charts'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [valueA,setValueA] = useState()
  const [valueB,setValueB] = useState()

  // LIST OF VALUES TO CONVERT
  let currency = 
  [
    {moedaA: "BRL",moedaB: "ARS",id:1},
    {moedaA: "ARS",moedaB: "BRL",id:2},
    {moedaA: "BRL",moedaB: "USD",id:3},
    {moedaA: "USD",moedaB: "BRL",id:3},
    {moedaA: "BRL",moedaB: "EUR",id:4},
    {moedaA: "EUR",moedaB: "BRL",id:5},
    {moedaA: "USD",moedaB: "EUR",id:6},
    {moedaA: "EUR",moedaB: "USD",id:7},
    {moedaA: "USD",moedaB: "ARS",id:8},
    {moedaA: "ARS",moedaB: "USD",id:9},
    {moedaA: "EUR",moedaB: "ARS",id:10},
    {moedaA: "ARS",moedaB: "EUR",id:11}

  ]
  function filteredEl(value){
    if(value.moedaA === valueA && value.moedaB === valueB){
      return true
    }else{
      return false
    }
  }

  return (
    <div>
      <Navbar/>
      <p className="text">Selecione duas moedas diferentes.</p>
      <div className="select-container">
      {/* SELECT VALUE A */}
       <select name="" id="moedaA" onChange={(e) => setValueA(e.target.value)}>
        <option value="">Selecionar moeda</option>
        <option value="BRL">Real Brasileiro</option>
        <option value="ARS">Peso Argentino</option>
        <option value="USD">Dólar Americano</option>
        <option value="EUR">Euro</option>
       </select>
      {/* SELECT VALUE B */}
       <select name="" id="moedaB" onChange={(e) => setValueB(e.target.value)}>
        <option value="">Selecionar moeda</option>
        <option value="BRL">Real Brasileiro</option>
        <option value="ARS">Peso Argentino</option>
        <option value="USD">Dólar Americano</option>
        <option value="EUR">Euro</option>
       </select>
      </div>
      <div className="conversor-container">
        {valueA === valueB && <div className="lds-circle"><div></div></div> }
        {valueA === "" && <div className="lds-circle"><div></div></div>}
        {valueB === "" && <div className="lds-circle"><div></div></div>}
      {/* RENDER LIST OF CONVERSOR */}
       {currency.length > 0 && currency.filter( filtered => filtered.moedaA === valueA && filtered.moedaB === valueB).map( (moeda) => <CardConversor moedaA={moeda.moedaA} moedaB={moeda.moedaB} key={moeda.id}/>)}
       <Charts moedaA={valueA} moedaB={valueB}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
