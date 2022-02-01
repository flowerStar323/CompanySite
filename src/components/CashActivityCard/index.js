import React from "react";
import "./cash.style.scss";
export default function index({ key, date, title, email, rightText, num }) {
    return (
        <div className="RRRewardsCard" key={key + "bot"}>
            <div className="RRRewardsCard_date">{date}</div>
            <div className="RRRewardsCard_Row" >
                <div className="RRRewardsCard_Row_right">
                    {rightText}
                </div>
                <img src="img/arrowrightthree.png" style={{ margin: '0 53px' }} />
                <div className="RRRewardsCard_Row_right_right">
                    <div className="RRRewardsCard_Row_right_in">
                        $0.12/
                        <img src="img/logo.png" width={56} height={56} />
                        <p>X</p> 5
                        <img src="img/logo.png" width={56} height={56} />
                    </div>
                </div>
                <div className="RRRewardsCard_Row_right_mark">
                    <p>${num}</p>
                    {/* <img src="img/logo.png" width={80} height={80} /> */}
                </div>
            </div>
        </div >
    );
}
