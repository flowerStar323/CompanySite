import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import "../scss/AboutMe.scss";
class ChoosePage extends React.Component {
    render() {
        return (
            <div className="ACroot">
                <div className="ACmaindiv">
                    <div className="ABackBtnOut" onClick={() => { window.location.href = '/intro' }}>
                        <FaChevronLeft className="ABackBtn" />
                    </div>
                    <div className="ACtitle">What brings you here?</div>
                    <div className="Adetail">
                        <div className="AdetailTitle">About Me</div>
                        <div className="AdetailContent">
                            Share a few sentences about who you are, what brings you to Moonhub, and how you want to grow the startup community through connections. If you’re open to referrals -- share with the community  what types of opportunities you’re looking for.
                        </div>
                        <textarea className="textarea" />
                        <div className="ANextBtnOut">
                            <div className="ANextBtn">
                                Join
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ChoosePage; 