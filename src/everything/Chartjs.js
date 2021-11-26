import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import axios from 'axios'

const Chartjs = () => {
    const [shivWeeks, setShivWeeks] = useState([])
    const [shivTasks, setShivTasks] = useState([])
    const [hashmiTasks, setHashmiTasks] = useState([])
            var data= {
                labels: shivWeeks,
                datasets: [
                    {
                    label: "Shiv",
                    data: shivTasks,
                    backgroundColor: 'rgb(77, 77, 105)',
                    barThickness: 30
                    },
                    {
                    label: "Hashmi",
                    data: hashmiTasks,
                    backgroundColor: 'rgb(167, 130, 192)',
                    barThickness: 30
                    }
                ]
            }  
    useEffect(() => {
        let shivTaskArr=[]
        let shivWeeksArr=[]
        let hashmiTaskArr=[]
        axios.get(`http://localhost:3050/data`)
        .then((res) => {
            for (let Index = 0; Index < res.data.shiv.length; ++Index) {
                shivTaskArr.push(parseInt(res.data.shiv[Index].task));
                shivWeeksArr.push(res.data.shiv[Index].weeks);
              }
            for (let Index = 0; Index < res.data.hashmi.length; ++Index) {
                hashmiTaskArr.push(parseInt(res.data.hashmi[Index].task));
            }
            setShivWeeks(shivWeeksArr)
            setShivTasks(shivTaskArr)
            setHashmiTasks(hashmiTaskArr)
        })
    }, [])

    return (
        <div className="chartjs">
            <div className="bar">
                <h1>Chartjs</h1>
                <Bar
                    data={data}
                >
                </Bar>
            </div>
        </div>
    )
}

export default Chartjs
