import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import axios from 'axios'

const Chartjs = () => {
    // const [hashmiTask, setHashmiTask] = useState([])
    // const [hashmiWeeks, setHashmiWeeks] = useState([])
    // axios.defaults.baseURL = "http://localhost:3050"
    const chart = () => {
        var  shivTask = []
        var shivWeek =[] 
        var hashmiTask =[]
             axios.get(`http://localhost:3030/data`)
            .then((res) => {
                console.log("shiv",res.data.shiv)
                for (let Index = 0; Index < res.data.shiv.length; ++Index) {
                    shivTask.push(parseInt(res.data.shiv[Index].task));
                    shivWeek.push(res.data.shiv[Index].weeks);
                  }
                for (let Index = 0; Index < res.data.hashmi.length; ++Index) {
                    hashmiTask.push(parseInt(res.data.hashmi[Index].task));
                  }
                    console.log(shivWeek,'Week')
                    console.log(shivTask,'shivtask')
                    console.log(hashmiTask,'hashmitask')
                })
                         var data= {
                                    labels: shivWeek,
                                    datasets: [
                                        {
                                        label: "Shiv",
                                        data: shivTask,
                                        backgroundColor: 'rgb(77, 77, 105)',
                                        barThickness: 30
                                        },
                                        {
                                        label: "Hashmi",
                                        data: hashmiTask,
                                        backgroundColor: 'rgb(167, 130, 192)',
                                        barThickness: 30
                                        }
                                    ]
                                }
                return data
            }
            var data = chart()
 
    useEffect(() => {
        chart()
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
