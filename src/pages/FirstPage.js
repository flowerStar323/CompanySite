import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "../scss/FirstPage.scss";
class FirstPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="maindiv">
                <div className="mainleft">
                    <img src="img/logo.png" alt="logo" />
                    <div className="welcomeText">Welcome to <span style={{ color: '#7adefd' }}>Moonhub</span></div>
                    <div className="SubText">
                        <p><BiRightArrowAlt className="rightIcon" />Grow your career</p>
                        <p><BiRightArrowAlt className="rightIcon" />Explore top startups</p>
                        <p><BiRightArrowAlt className="rightIcon" />Earn $ and rewards</p>
                    </div>
                </div>
                <div className="mainright">
                    {/* <AiOutlineCloseCircle className="closeIcon" /> */}
                    <div className="joinCommunity">
                        <p>Connect with the world’s fastest growing companies.</p>
                        <div className="title">
                            Welcome back to Moonhub!
                        </div>
                        <div className="emailPart">
                            <p>E-Mail or Username</p>
                            <div className="emailinput">
                                <MdEmail className="emailIcon" />
                                <input type="text" className="firstpageInput" placeholder="des..." />
                            </div>
                        </div>
                        <div className="emailPart">
                            <p>Password</p>
                            <div className="emailinput">
                                <IoMdLock className="emailIcon" />
                                <input type="password" className="firstpageInput" placeholder="e.g.:X AE A-12" />
                            </div>
                        </div>
                        <Link to="/"><div className="SignBtn">Login</div></Link>
                        <div className="login">Already a memeber?
                            <p onClick={() => this.props.func()} style={{ cursor: "pointer" }}>Sign up here<BiRightArrowAlt /></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {};
};
export default connect(mapStateToProps)(FirstPage);