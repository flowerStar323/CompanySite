import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import "../scss/IntroSelf.scss";
class Intro extends React.Component {
    filedialog = () => {
        document.getElementById('photo').click();
    }
    render() {
        return (
            <div className="Croot">
                <div className="Cmaindiv">
                    <Link to="/">
                        <div className="BackBtnOut">
                            <FaChevronLeft className="BackBtn" />
                        </div>
                    </Link>
                    <Link to="/aboutme">
                        <div className="NextBtnOut">
                            <FaChevronRight className="NextBtn" />
                        </div>
                    </Link>
                    <div className="Ctitle">Introduce yourself to Moonhub members:</div>
                    <div className="infordetail">
                        <div className="detailLeft">
                            <div className="photo" >
                                <img src="img/woman.png" width="100%" />
                                <BsFillCameraFill className="cameraIcon" onClick={() => this.filedialog()} />
                            </div>
                        </div>
                        <div className="detailRight">
                            <div className="group">
                                <p>Name</p>
                                <input type="text" className="selfinput" />
                            </div>
                            <div className="grouptitle">
                                <p>Title<span>e.g. Software Engineer at Google</span></p>
                                <input type="text" className="selfinput" />
                            </div>
                            <div className="grouplinkedin">
                                <p>LinkedIn</p>
                                <div className="linkedinUrl">
                                    <p>www.linkedin.com./in/</p>
                                    <input type="text" className="linkedininput" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="file" id="photo" style={{ display: 'none' }} />
                </div>
            </div>
        )
    }
}
export default Intro; 