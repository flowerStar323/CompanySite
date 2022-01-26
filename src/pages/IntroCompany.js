import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import "../scss/IntroCompany.scss";
class IntroCompany extends React.Component {
    filedialog = () => {
        document.getElementById('photo').click();
    }
    render() {
        return (
            <div className="DCroot">
                <div className="DCmaindiv">
                    <Link to="/choose">
                        <div className="DBackBtnOut">
                            <FaChevronLeft className="DBackBtn" />
                        </div>
                    </Link>
                    <Link to="/aboutcompany">
                        <div className="DNextBtnOut">
                            <FaChevronRight className="DNextBtn" />
                        </div>
                    </Link>
                    <div className="DCtitle">Introduce your company to Moonhub</div>
                    <div className="Dinfordetail">
                        <div className="DdetailLeft">
                            <div className="Dphoto" />
                            <BsFillCameraFill className="DcameraIcon" onClick={() => this.filedialog()} />
                        </div>
                        <div className="DdetailRight">
                            <div className="Dgroup">
                                <p>Your Name</p>
                                <input type="text" className="Dselfinput" />
                            </div>
                            <div className="Dgrouptitle">
                                <p>Your Title<span>e.g. Software Engineer at Google</span></p>
                                <input type="text" className="Dselfinput" />
                            </div>
                            <div className="Dgrouptitle">
                                <p>Company Name</p>
                                <input type="text" className="Dselfinput" />
                            </div>
                            <div className="Dgrouptitle">
                                <p>Company Website (link)</p>
                                <input type="text" className="DselfinputLink" />
                            </div>
                        </div>
                    </div>
                    <input type="file" id="photo" style={{ display: 'none' }} />
                </div>
            </div>
        )
    }
}
export default IntroCompany; 