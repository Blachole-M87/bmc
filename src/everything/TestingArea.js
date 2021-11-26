import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const TestingArea = () => {
    // const [shivWeeks, setShivWeeks] = useState([]);
    // const [shivTasks, setShivTasks] = useState([])
    const [shivWeeks, setShivWeeks] = useState([])
    const [shivTasks, setShivTasks] = useState([])
    const [hashmiTasks, setHashmiTasks] = useState([])
    const [chandanTasks, setChandanTasks] = useState([])
    const [nitinTasks, setNitinTasks] = useState([])
    const [armanTasks, setArmanTasks] = useState([])

                          var datas =  {
                            labels: shivWeeks,
                            datasets: [
                                {
                                label: "Shiv",
                                data: shivTasks,
                                backgroundColor: 'rgb(145, 44, 69)',
                                barThickness: 15
                                },
                                {
                                label: "Hashmi",
                                data: hashmiTasks,
                                backgroundColor: 'rgb(212, 200, 127)',
                                barThickness: 15
                                },
                                {
                                label: "Chandan",
                                data: chandanTasks,
                                backgroundColor: 'rgb(112, 38, 106)',
                                barThickness: 15
                                },
                                {
                                label: "Nitin",
                                data: nitinTasks,
                                backgroundColor: 'rgb(194, 109, 180)',
                                barThickness: 15
                                },
                                {
                                label: "Arman",
                                data: armanTasks,
                                backgroundColor: 'rgb(59, 63, 117)',
                                barThickness: 15
                                }
                            ]
                        } 
    useEffect(() => {
       axios.get('http://localhost:3050/data')
       .then(res=>{
        let weekArr = [];
        let shivTaskArr = [];
        let hashmiTaskArr = [];
        let chandanTaskArr = [];
        let nitinTaskArr = [];
        let armanTaskArr = [];

        res.data.shiv.map((ele)=>(
            weekArr.push(ele.weeks)
            // setShivWeek(...shivWeek,ele.weeks)
        ))
        res.data.shiv.map((ele)=>(
            shivTaskArr.push(ele.task)
        ))
        res.data.hashmi.map((ele)=>(
         hashmiTaskArr.push(ele.task)
        ))
        res.data.chandan.map((ele)=>(
         chandanTaskArr.push(ele.task)
        ))
        res.data.nitin.map((ele)=>(
         nitinTaskArr.push(ele.task)
        ))
        res.data.arman.map((ele)=>(
         armanTaskArr.push(ele.task)
        ))

            setShivWeeks(weekArr)
            setShivTasks(shivTaskArr)
            setHashmiTasks(hashmiTaskArr)
            setChandanTasks(chandanTaskArr)
            setNitinTasks(nitinTaskArr)
            setArmanTasks(armanTaskArr)
       }
       )
    }, [])

    return (
        <div className="chartjs">
        <div className="bar">
            <h1>Testingjs</h1>
            <Bar
                data={datas}

            >
            </Bar>
        </div>
    </div>
    
        
    );
};

export default TestingArea;
