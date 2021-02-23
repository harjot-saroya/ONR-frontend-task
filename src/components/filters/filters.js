import React from "react";
import styles from './filters.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Filters = () => {

    return(
    <div>
        <h1 id="filter">Filters</h1>
        <div className="legend">
            <ul>
            <li><div className="open"></div><p>All CQA Results</p> <FontAwesomeIcon icon={faInfoCircle} color="gray" /></li>
            <li><div className="closed"></div><p>CQAs with Closed Loop</p> <FontAwesomeIcon icon={faInfoCircle} color="gray" /></li>
            </ul>
        </div>
    </div>)
}

export default Filters;