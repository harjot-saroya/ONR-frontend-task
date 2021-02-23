import React,{ useState } from "react";
import styles from './diag.css'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from '../../data.json'
import Gauge from '../donutchart/donutchart'
import Area from '../areachart/areachart'
import Filters from '../filters/filters'

const DiagTool = () => {
    const [dataObj,setDataObj] = useState('Basics')

    const GenerateDonutChart = () => {
        const obj = data['gaugeData'].map(((item) => {
            const select = (item.name == dataObj) ? 'gaugeselected':'gauge'
            return(
                    <div className={select} onClick={()=>{setDataObj(item.name)}}>
                        <Gauge id={item.name} value={item.score} label={item.name} sample={item.sample}></Gauge>
                    </div>
                )
        }))
        return obj
    }

  return (
        <div className="diag">
            <div>
                <p id="pheader">PERFORMANCE MANAGEMENT</p>
            </div>
            <div className="title">
                <h1><FontAwesomeIcon icon={faGlobe} color="black" /> Diagnostic Tool</h1>
            </div>
            <Filters></Filters>

            <div className="datavis">
                <div className="gauges">
                    { GenerateDonutChart() }
                </div>
                <div className="areachart">
                    <Area name={dataObj} data={data['areaData'][dataObj]}></Area>
                </div>
            </div>

        </div>
    )
}

export default DiagTool;
