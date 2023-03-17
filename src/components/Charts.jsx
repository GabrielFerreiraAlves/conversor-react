import { useEffect, useState } from "react"
import {Chart as ChartJs} from 'chart.js/auto'
import {Line} from 'react-chartjs-2'
import './charts.css'


const Charts = ({moedaA,moedaB}) => {
    const url = 'https://economia.awesomeapi.com.br/json/daily/'
    const [datas,setDatas] = useState([])

    useEffect( () => {
        fetch(url+moedaA+"-"+moedaB+"/7")
        .then( res => res.json())
        .then( data => setDatas(data))
    }, [moedaA,moedaB])

    // call data from api if length > 0
    function chartJs(){
        if(datas.length > 0){
            return datas.map( dado => dado.bid).reverse()
        }else{
            return []
        }
    }

    const dataChart = {
        labels: ["Dia 1","Dia 2","Dia 3","Dia 4","Dia 5","Dia 6","Dia 7"],
        datasets: [
            {
            label: "Cotação na ultima semana",
            backgroundColor: "#cfdd0d",
            borderColor: "#cfdd0d",
            tension: 0.4,
            pointBackgroundColor: "transparent",
            pointBorderColor: "transparent",
            data: chartJs(),
            },
        ],
    }
    const options = {
        scales: {
            y:{
                grid:{
                    display: false
                }
            },
            x:{
                grid:{
                    display: false
                }
            }
        },
        plugins:{
            legend:{
                labels: {
                    boxWidth: 0
                }
            }
        }
    }

  return (
    <div className="chart-container">
            {datas.length === 0 && <div>erro...</div>}
            {datas.length > 0 && <Line data={dataChart} options={options} className="chart"/>}
    </div>
  )
}

export default Charts