import  React, {useEffect, useState} from 'react';
import {csv, scaleBand, scaleLinear, scaleOrdinal, stack} from 'd3'
import fhnData from '../data/39.csv'

const Chart = () => {

    const [data, setData] = useState(null)
    const margin = {top: 10, right: 30, bottom: 20, left: 50},
     width = 460 - margin.left - margin.right,
     height = 400 - margin.top - margin.bottom;

    useEffect(() => {
        csv(fhnData).then(data => {
            console.log(data)
            setData(data)
        })    
    }, [])

    if(!data) {
        return<pre>Loading..</pre>
    }

    const subgroups = data.columns.slice(1)
    const groups = data.map(d => (d.FinancialHealth))
    console.log(subgroups)

    const yScale = scaleBand()
    .domain(data.map(d => d.FinancialHealth))
    .range([0, height])

    const xScale = scaleLinear()
    .domain([0, 100])
    .range([0, width])

    const color = scaleOrdinal()
    .domain(subgroups)
    .range(['#e41a1c','#377eb8','#4daf4a'])

    const stackedData = stack()
    .keys(subgroups)
    (data)

    return (
        <g transform={`translate(${margin.left},${margin.top})`}>
            <svg width={width} height={height}>
                {data.map((d) => ( <rect key={d.index} x={0} y={yScale(d.FinancialHealth)} width={xScale(100)} height={yScale.bandwidth()}/>
                    ))}
            </svg>
        </g>
    )
}

export default Chart;