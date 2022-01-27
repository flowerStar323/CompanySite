import React from "react";
import { BiSearch } from "react-icons/bi";
import Header from "../layout/Header";
import { FaChevronLeft, FaSmile } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { MdAttachFile } from "react-icons/md";
import "../scss/ChattingPage.css";
export default function ChattingPage() {
    const addattachfile = () => {
        document.getElementById('attach').click();
    }
    return (
        <div className="ChatOut">
            <Header />
            <div className="topPart">
                <div className="Userlist">
                    <div className="topPartLeft" />
                    <div className="usersearch"><BiSearch className="usersearchIcon" /><input placeholder="Search" /></div>
                    <div className="mainuserlist">

                    </div>
                </div>
                <div className="mainwindow">
                    <div className="UserNamePart">
                        <p className="displayname">Muhammad Maroof</p>
                        <div className="historyinput">
                            <BiSearch className="chathistorySearch" /><input placeholder="Search this conversation" />
                        </div>
                    </div>
                    <div className="chattitle">
                        <div className="displaytitle">View Referral</div>
                    </div>
                    <div className="chattinginput">
                        <MdAttachFile className="attachfileIcon" onClick={() => addattachfile()} />
                        <input type="file" style={{ display: 'none' }} id="attach" />
                        <div className="inputpart">
                            <input className="inputchat" />
                            <RiSettings3Fill className="inputsettingicon" />
                            <FaSmile className="inputemojiIcon" />
                        </div>
                        <div className="sendbutton">Send</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
