import React from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import "../scss/Home.scss";
class FirstPage extends React.Component {
    render() {
        return (
            <div className="Hroot">
                <div className="Hmaindiv">
                    <div className="header">
                        <div className="headerleft">
                            <Link to='/home'>
                                <img src="img/homelogo.png" width={50} className="homelogo" />
                            </Link>
                            <p>Moonhub</p>
                        </div>
                        <div className="headerright">
                            <Link to='/'>
                                <span>Sign In</span>
                            </Link>
                            <div className="AccessBtn">Get Access</div>
                        </div>
                    </div>
                    <div className="topDivOut">
                        <div className="hometitle">
                            Join the New Era of Startups and Top Talent.
                        </div>
                        <div className="homesubtitle">
                            Moonhub brings together to world’s best talent and fastest growing startups. Earn rewards for career exploration & $10,000+ for successful referrals.
                        </div>
                        <div className="joinText">
                            Earn 5&nbsp;&nbsp;<img src="img/homelogo.png" width={40} />&nbsp; when you join.
                        </div>
                        <div className="joinBtn">
                            Join Moonhub
                        </div>
                    </div>
                    <div className="bottomDivOut">
                        <div className="bottomDiv">
                            <div className="bottomtitle">
                                Discover moonshots with Moonhub.
                            </div>
                            <div className="verkada">
                                <img src="img/homebottomlogo.png" width={170} />
                                <p>VERKADA</p>
                            </div>
                            <div className="roadmap">
                                <p>How it Works</p>
                                <div className="roadmapNum">
                                    <div className="roadmapNumItem">
                                        <img src="img/num1.png" width={170} height={150} />
                                        <div className="roadmapText">
                                            <p>Discover startup opportunities.</p>
                                            <div className="roadmapsub">Meet the founders, hiring managers, and ambassadors behind some of the world’s fastest growing companies. </div>
                                        </div>
                                    </div>
                                    <div className="roadmapNumItem">
                                        <img src="img/num2.png" width={170} height={150} />
                                        <div className="roadmapText">
                                            <p>Discover startup opportunities.</p>
                                            <div className="roadmapsub">Meet the founders, hiring managers, and ambassadors behind some of the world’s fastest growing companies. </div>
                                        </div>
                                    </div>
                                    <div className="roadmapNumItem">
                                        <img src="img/num3.png" width={170} height={150} />
                                        <div className="roadmapText">
                                            <p>Discover startup opportunities.</p>
                                            <div className="roadmapsub">Meet the founders, hiring managers, and ambassadors behind some of the world’s fastest growing companies. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default FirstPage;