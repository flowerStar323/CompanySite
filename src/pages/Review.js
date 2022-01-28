import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import favicon from "../assets/images/favicon.png";
import Message from "../assets/images/message-dark.png";
import Header from "../layout/Header";
import "../scss/Review.scss";
import Search from "../components/Search/Search";
const Review = () => {
    return (
        <div className="ReviewContainer">
            <Header />
            <div className="ReviewTitle">Review Connections</div>
            <div className="ReviewContent">
                <div className="ContentHeader">
                    <div className="ContentHeaderTitle">Active Refferrals</div>
                    <Search />
                </div>
                <div className="ReviewList">
                    <div className="ReviewListHeader">
                        <span>Role</span>
                        <span>Partner</span>
                        <span>Candidate</span>
                        <span>Status</span>
                        <span></span>
                    </div>
                    <div className="ReviewListContent">
                        <div className="RoleContent">
                            <img src={favicon} alt="favicon" width="52px" height="52px" />
                            <div className="Main">
                                <span className="MainTitle">Front-end Engineer</span>
                                <div className="detail">
                                    <a href="/">you.com</a>
                                    <div className="pos">
                                        <GiPositionMarker />
                                        <span>Remote</span>
                                    </div>
                                    <div className="job">
                                        <MdWorkOutline />
                                        <span>Full time</span>
                                    </div>
                                    <AiOutlineClockCircle className="clock_icon" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <a href="/">Amie Adams</a>
                        </div>
                        <div className="item">
                            <a href="/">Nancy Xu</a>
                        </div>
                        <div className="RoleState">
                            <button className="StateButton">Get Intro</button>
                            <button className="StateButton">Pass</button>
                        </div>
                        <img
                            src={Message}
                            className="message_image"
                            width="44px"
                            height="44px"
                            alt="message"
                        />
                    </div>
                    <div className="ReviewListContent">
                        <div className="RoleContent">
                            <img src={favicon} alt="favicon" width="52px" height="52px" />
                            <div className="Main">
                                <span className="MainTitle">Front-end Engineer</span>
                                <div className="detail">
                                    <a href="/">you.com</a>
                                    <div className="pos">
                                        <GiPositionMarker />
                                        <span>Remote</span>
                                    </div>
                                    <div className="job">
                                        <MdWorkOutline />
                                        <span>Full time</span>
                                    </div>
                                    <AiOutlineClockCircle className="clock_icon" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <a href="/">Amie Adams</a>
                        </div>
                        <div className="item">
                            <a href="/">Nancy Xu</a>
                        </div>
                        <div className="RoleState">
                            <div className="StateText">
                                Introduced
                                <br />
                                Jan 13, 2022
                            </div>
                        </div>
                        <img
                            src={Message}
                            className="message_image"
                            width="44px"
                            height="44px"
                            alt="message"
                        />
                    </div>
                </div>
                <button className="More_Button">More</button>
            </div>
            <div className="ReviewContent">
                <div className="ContentHeader">
                    <div className="ContentHeaderTitle">Past Referrals</div>
                    <Search />
                </div>
                <div className="ReviewList">
                    <div className="ReviewListHeader">
                        <span>Role</span>
                        <span>Partner</span>
                        <span>Candidate</span>
                        <span>Status</span>
                        <span></span>
                    </div>
                    <div className="ReviewListContent">
                        <div className="RoleContent">
                            <img src={favicon} alt="favicon" width="52px" height="52px" />
                            <div className="Main">
                                <span className="MainTitle">Front-end Engineer</span>
                                <div className="detail">
                                    <a href="/">you.com</a>
                                    <div className="pos">
                                        <GiPositionMarker />
                                        <span>Remote</span>
                                    </div>
                                    <div className="job">
                                        <MdWorkOutline />
                                        <span>Full time</span>
                                    </div>
                                    <AiOutlineClockCircle className="clock_icon" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <a href="/">Amie Adams</a>
                        </div>
                        <div className="item">
                            <a href="/">Nancy Xu</a>
                        </div>
                        <div className="RoleState">
                            <div className="StateText">Hired</div>
                        </div>
                        <img
                            src={Message}
                            className="message_image"
                            width="44px"
                            height="44px"
                            alt="message"
                        />
                    </div>
                    <div className="ReviewListContent">
                        <div className="RoleContent">
                            <img src={favicon} alt="favicon" width="52px" height="52px" />
                            <div className="Main">
                                <span className="MainTitle">Front-end Engineer</span>
                                <div className="detail">
                                    <a href="/">you.com</a>
                                    <div className="pos">
                                        <GiPositionMarker />
                                        <span>Remote</span>
                                    </div>
                                    <div className="job">
                                        <MdWorkOutline />
                                        <span>Full time</span>
                                    </div>
                                    <AiOutlineClockCircle className="clock_icon" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <a href="/">Amie Adams</a>
                        </div>
                        <div className="item">
                            <a href="/">Nancy Xu</a>
                        </div>
                        <div className="RoleState">
                            <div className="StateText">Passed</div>
                        </div>
                        <img
                            src={Message}
                            className="message_image"
                            width="44px"
                            height="44px"
                            alt="message"
                        />
                    </div>
                </div>
                <button className="More_Button">More</button>
            </div>
        </div>
    );
};

export default Review;
