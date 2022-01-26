import React from "react";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "../scss/FirstPage.scss";
class FirstPage extends React.Component {
    render() {
        return (
            <div className="root">
                <div className="maindiv">
                    <div className="mainleft">
                        <img src="img/logo.png" alt="logo" />
                        <div className="welcomeText"><span style={{ color: '#B9D7FF' }}>Welcome to</span> Connect.</div>
                        <div className="SubText">
                            <p><BiRightArrowAlt className="rightIcon" />Grow your career</p>
                            <p><BiRightArrowAlt className="rightIcon" />Explore top startups</p>
                            <p><BiRightArrowAlt className="rightIcon" />Earn $ and rewards</p>
                        </div>
                    </div>
                    <div className="mainright">
                        <AiOutlineCloseCircle className="closeIcon" />
                        <div className="joinCommunity">
                            <p>Connect with the world’s fastest growing companies.</p>
                            <div className="title">
                                Join the Community!
                            </div>
                            <div className="emailPart">
                                <p>E-Mail or Username</p>
                                <div className="emailinput">
                                    <MdEmail className="emailIcon" />
                                    <input type="text" placeholder="des..." />
                                </div>
                            </div>
                            <div className="emailPart">
                                <p>Password</p>
                                <div className="emailinput">
                                    <IoMdLock className="emailIcon" />
                                    <input type="password" placeholder="e.g.:X AE A-12" />
                                </div>
                            </div>
                            <Link to="/choose"><div className="SignBtn">Sign Up</div></Link>
                            <div className="login">Already a memeber? <p>Login here<BiRightArrowAlt /></p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FirstPage;