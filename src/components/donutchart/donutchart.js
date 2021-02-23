import React from "react";
import * as d3 from 'd3'
import { scaleLinear } from "d3-scale"
import { arc } from "d3-shape"
import styles from './donutchart.css'
import { format } from "d3-format"

const Gauge = (props) => {

    const value = props.value
    const min = 0
    const max = 100
    const label = props.label
    const sample = props.sample

    const backgroundArc = arc()
      .innerRadius(0.95)
      .outerRadius(1)
      .startAngle(-Math.PI)
      .endAngle(Math.PI)
      .cornerRadius(1)
      ()
    const percentScale = scaleLinear()
      .domain([min, max])
      .range([0, 1])
    const percent = percentScale(value)
    const angleScale = scaleLinear()
      .domain([0, 1])
      .range([-Math.PI, Math.PI])
      .clamp(true)
    const angle = angleScale(percent)
    const filledArc = arc()
      .innerRadius(0.95)
      .outerRadius(1)
      .startAngle(0)
      .endAngle(Math.PI + angle)
      .cornerRadius(1)
      ()
    return (
      <div className="chart">
        <p id="label">{label}</p>
        <svg style={{overflow: "visible"}}
          width="9em"
          viewBox={[
            -1.4, -1.4,
            3, 1,
          ].join(" ")}>
          <path
            d={backgroundArc}
            style={{backgroundColor:"white"}}
            fill="#dbdbe7"
          />
          <path
            d={filledArc}
            fill="#9980FA"
          />
        </svg>
        <div className="gaugeInfo">
        { format(",")(value) +"%" }
        <p id="sample">Sample: {sample}</p>

        </div>
      </div>
    )
  }

export default Gauge;