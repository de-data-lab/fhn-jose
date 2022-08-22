import  React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import fhnData from '../data/test.csv'

const Chart = () => {

    d3.csv(fhnData).then(data => {
        console.log(data)
    })


    useEffect(() => {
    }, [])

    return (
        <div>
            <svg
            ></svg>
        </div>
    )
}

export default Chart;