import React, { useState } from "react";
import styles from './sidebar.css';
import { faThumbtack, faChartBar, faMailBulk, faShapes, faRedo } from "@fortawesome/free-solid-svg-icons";
import Button from '../button/button.js'

const Sidebar = () => (
  //const [prod, setProd] = useState([]);
    
    <div>
        <div className="sidebar">
            <Button type={faThumbtack}></Button>
            <Button type={faChartBar}></Button>
            <Button type={faMailBulk}></Button>
            <Button type={faShapes}></Button>
            <Button type={faRedo}></Button>
        </div>
    </div>
    
)

export default Sidebar;
