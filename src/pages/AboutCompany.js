import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import "../scss/AboutCompany.scss";
class ChoosePage extends React.Component {
    render() {
        return (
            <div className="ACroot">
                <div className="ACmaindiv">
                    <div className="ABackBtnOut" onClick={() => { window.location.href = '/introcompany' }}>
                        <FaChevronLeft className="ABackBtn" />
                    </div>
                    <div className="ACtitle">Why Partner with You.com?</div>
                    <div className="Adetail">
                        <div className="AdetailTitle">About the Company</div>
                        <div className="AdetailContent">
                            Share a few sentences about why Moonhub community members should join your company. This can include why you think ambassadors should partner with you to hire their connections.
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