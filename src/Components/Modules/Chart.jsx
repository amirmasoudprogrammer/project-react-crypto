import React, {useState} from 'react';
import styles from "./ChartStyle.module.css"
import {convertData} from "../../helpers/convertData.js";
import {ResponsiveContainer, LineChart, CartesianGrid, Line, YAxis, XAxis, Legend, Tooltip} from "recharts";

const Chart = ({chart, setChart}) => {
    const [type, setType] = useState("prices")
    console.log(convertData(chart, type))
    return (
        <div className={styles.container}>
            <span className={styles.cross} onClick={() => setChart(null)}>x</span>
            <div className={styles.chart}>
                <div className={styles.graph}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={400} height={400} data={convertData(chart, type)}>
                            <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth="2px"/>
                            <CartesianGrid stroke="#404042"/>
                            <YAxis dataKey={type} domain={["auto" , "auto"]}/>
                            <XAxis dataKey="date" hide/>
                            <Legend/>
                            <Tooltip/>
                        </LineChart>

                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Chart;