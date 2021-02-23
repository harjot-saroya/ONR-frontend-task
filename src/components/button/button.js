import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from "react";
import styles from './button.css'
const Button = (props) => (
    <div className="button">
        <div id="icon"><FontAwesomeIcon icon={props.type} color="white" /></div>
    </div>
)

export default Button;