import React from "react";
import "./Pcard.style.scss";
export default function Pcard({ logo, title, subtitle }) {
    return (
        <div className="Pcard">
            <img src={logo} className="CCardlogo" width={97} height={97} />
            <div className="ccardtitle">{title}</div>
            <div className="Ccardsubtitle">{subtitle}</div>
        </div>
    );
}
