import React from "react";
import * as d3 from 'd3'
import { scaleLinear } from "d3-scale"
import styles from './areachart.css'
import DateBar from '../datebar/datebar'
import { AreaChart, tooltipLine, Brush, time } from "react-d3-components"
const Area = (props) => {
    let data = {}
    data['label'] = props.name
    let parsed = []
    props.data.forEach(element => {
        parsed.push({ x:element.date, y:element.score })
    });
    data['values'] = parsed
    return(
    <div className="qualityscore">
        <div className="dateBar">
            <div>
            <p id="qst">QUALITY SCORE TREND</p>

            </div>
            <div>
            <DateBar></DateBar>

            </div>
        </div>
        <div className="areaChart">
            <AreaChart data={data}
            width={500}
            tooltipHtml={tooltipLine}
            height={400}
            yOrientation='' // if you do not provide right default left orientation for yAxis will be used
            margin={{top: 10, bottom: 90, left: 80, right: 0}} />

        </div>
    </div>)
}

export default Area;