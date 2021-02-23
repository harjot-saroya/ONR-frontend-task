import React from "react";
import styles from './datebar.css'
const DateBar = () => {
    return(
    <div className="dateItem">
        <div className="day">
            Day
        </div>
        <div className="week">
            Week
        </div>
        <div className="month">
            Month
        </div>
        <div className="year">
            Year
        </div>
        <div className="quarter">
            Quarter
        </div>
        <div className="half">
            Half
        </div>

    </div>
    )
}

export default DateBar;