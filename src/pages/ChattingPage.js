import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import Header from "../layout/Header";
import { FaChevronLeft, FaSmile } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { MdAttachFile } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import favicon from "../assets/images/favicon.png";
import card_mark from "../assets/images/card_mark.png";
import "../scss/ChattingPage.css";
export default function ChattingPage() {
    const [chattext, setChattext] = useState('');
    const addattachfile = () => {
        document.getElementById('attach').click();
    }
    useEffect(() => {
        if (chattext) {
            const sendBtnObj = document.getElementById('sendBtn').style;
            sendBtnObj.background = '#619362';
            sendBtnObj.color = '#fff';
        }
        else {
            const sendBtnObj = document.getElementById('sendBtn').style;
            sendBtnObj.background = '#e0e0e0';
            sendBtnObj.color = '#a1a1a1';
        }
    }, [chattext])
    const ClickUser = () => {
        alert('will be display chat history window');
        const userlist = document.getElementById('userlist').style;
        const history = document.getElementById('mainwindow').style;
        userlist.display = 'none !important';
        history.display = 'flex !important';
    }
    return (
        <div className="ChatOut">
            <Header />
            <div className="topPart">
                <div className="Userlist" id='userlist'>
                    <div className="topPartLeft" />
                    <div className="usersearch"><BiSearch className="usersearchIcon" /><input placeholder="Search" /></div>
                    <div className="mainuserlist">
                        {[...new Array(10)].map(e => <div className="Chatman" onClick={() => ClickUser()}>
                            <img src="img/woman.png" width={50} height={50} className="chatphoto" />
                            <div>
                                <div className="chatname">Dayana Pena</div>
                                <div className="chatjob">online Research data</div>
                                <div className="chathistory">Dayana: Hello, I am Tanya from...</div>
                            </div>
                        </div>)}
                    </div>
                </div>
                <div className="mainwindow" id="mainwindow">
                    <div className="UserNamePart">
                        <p className="displayname">Muhammad Maroof</p>
                        <div className="historyinput">
                            <BiSearch className="chathistorySearch" /><input placeholder="Search this conversation" />
                        </div>
                    </div>
                    <div className="chattitle">
                        <div className="displaytitle">View Referral</div>
                        {/* ----------------------------------------------------------------------- */}
                        <div className="PHPayJobcardContainer">
                            <div className="PHPayJobcardHeader">
                                <div className="PHPayTitle">
                                    <img src={favicon} alt="favicon" width="52px" height="52px" />
                                    <div className="PHPayMain">
                                        <span className="PHPayMainTitle">Front-end Engineer</span>
                                        <div className="PHPaydetail">
                                            <div className="PHPayyoudotcom">you.com</div>
                                            <div className="PHPaypos">
                                                <GiPositionMarker />
                                                <span>Remote</span>
                                            </div>
                                            <div className="PHPayjob">
                                                <MdWorkOutline />
                                                <span>Full time</span>
                                            </div>
                                            <AiOutlineClockCircle className="PHPayclock_icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="PHPayPrice">
                                    <div className="PHPaySubprice">
                                        <div className="PHPayvalue">100</div>
                                        <img src={card_mark} alt="card_mark" width="42px" height="33px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ------------------------------------------------------------ */}
                    </div>
                    display chat history

                    <div className="chattinginput">
                        <MdAttachFile className="attachfileIcon" onClick={() => addattachfile()} />
                        <input type="file" style={{ display: 'none' }} id="attach" />
                        <div className="inputpart">
                            <input className="inputchat" onChange={(e) => setChattext(e.target.value)} />
                            <RiSettings3Fill className="inputsettingicon" />
                            <FaSmile className="inputemojiIcon" />
                        </div>
                        <div className="sendbutton" id="sendBtn">Send</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
