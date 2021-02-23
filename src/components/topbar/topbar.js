import React, { useState } from "react";
import styles from './topbar.css';
import { faSlidersH, faArrowAltCircleDown, faPrint, faQuestionCircle, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Button from '../button/button.js'

const Topbar = () => (
  //const [prod, setProd] = useState([]);
    

        <div className="topbar">
            <p id="header">Diagnostic Tool
            </p>
            <div className="settings">
                <div id="login">
                    <p id="msg">Logged in as General user</p>
                </div>
                <div className="vl"></div>
                    <Button type={faSlidersH}></Button>
                    <Button type={faArrowAltCircleDown}></Button>
                    <Button type={faPrint}></Button>
                    <Button type={faQuestionCircle}></Button>
                    <Button type={faArrowAltCircleRight}></Button>
            </div>
        </div>
   
)

export default Topbar;
