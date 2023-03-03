import React from "react";
import './BurgerControl.css';
const burgerControl = (props) => (
    <div className="BuildControls">
    <div className="Label">{props.label}</div>
    <button className="Less">Less</button>
    <button className="More">More</button>
    </div>
);

export default burgerControl