import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Header from "../layout/Header";
import Jobcard from "../components/JobCard/Jobcard";
import "../scss/Owner.scss";
import You from "../assets/images/you.png";
import AvatarImage from "../assets/images/avatar_image.png";
const Owner = () => {
    const [initOldPassword, setInitOldPassword] = useState("");
    const [initNewPassword, setInitNewPassword] = useState("");
    const [initPasswordConfirm, setInitPasswordConfirm] = useState("");
    const [initRole, setInitRole] = useState("");
    const [initReward, setInitReward] = useState("");
    const [initLocation, setInitLocation] = useState("");
    const [initType, setInitType] = useState("");
    const [initNote, setInitNote] = useState("");
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    return (
        <div className="OwnerContainer">
            <Header />
            <div className="OwnerTitle">
                <img src={You} alt="you" width="180px" height="180px" />
                <div className="OwnerSmallTitle">
                    <div>
                        <span>You.com</span>
                        <FiEdit className="icon" />
                    </div>
                    <button
                        className="resetButton"
                        onClick={() => setShowPasswordModal(!showPasswordModal)}
                    >
                        Reset Password
                    </button>
                </div>
                <div className="OwnerSubTitle">
                    <span>You.com</span>
                    <FiEdit className="icon" />
                </div>
                <div className="OwnerDescTitle">
                    <img
                        src={AvatarImage}
                        alt="you"
                        className="image_avatar"
                        width="42px"
                        height="54px"
                    />
                    <span>Richard Socher, CEO</span>
                    <FiEdit className="icon" />
                </div>
            </div>
            <div className="OwnerContent">
                <div className="YourPartner">
                    <div className="YourPartnerHeader">Why Partner with You.com</div>
                    <FiEdit className="edit_icon" />
                    <div className="YourPartnerContent">
                        We’re looking for engineers that have strong technical backgrounds
                        to help hire for You.com.
                        <br />
                        We have one of the best teams out there with high growth, top VCs,
                        and a repeat founder.
                    </div>
                </div>
                <div className="OpenJobs">
                    <div className="OpenJobsHeader">Open Jobs</div>
                    <div className="OpenJobsContent">
                        <Jobcard />
                        <Jobcard />
                        <Jobcard />
                        <Jobcard />
                        <Jobcard />
                        <Jobcard />
                        <Jobcard />
                        <Jobcard />
                    </div>
                </div>
                <button
                    className="add_job"
                    onClick={() => setShowAddModal(!showAddModal)}
                >
                    Add Job
                </button>
            </div>
            {showPasswordModal && (
                <>
                    <div className="ResetPasswordModal">
                        <div className="PasswordModalHeader">
                            <span className="PasswordModalTitle">Change Password</span>
                            <AiOutlineCloseCircle
                                className="close_icon"
                                onClick={() => setShowPasswordModal(!showPasswordModal)}
                            />
                        </div>
                        <div className="PasswordModalFormControl">
                            <div className="FormControl">
                                <label>Old password</label>
                                <input
                                    type="text"
                                    value={initOldPassword}
                                    onChange={(e) => setInitOldPassword(e.target.value)}
                                />
                            </div>
                            <div className="FormControl">
                                <div className="FormControlHeader">
                                    <label>New password</label>
                                    <div className="check">
                                        <input type="checkbox" />
                                        <div>ShowPassword</div>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    value={initNewPassword}
                                    onChange={(e) => setInitNewPassword(e.target.value)}
                                />
                                <div className="state">X Numbers X Symbols</div>
                            </div>
                            <div className="FormControl">
                                <label>Confirm New password</label>
                                <input
                                    type="text"
                                    value={initPasswordConfirm}
                                    onChange={(e) => setInitPasswordConfirm(e.target.value)}
                                />
                            </div>
                            <button className="Save_Button">Save</button>
                        </div>
                    </div>
                    <div
                        className="underground"
                        onClick={() => setShowPasswordModal(false)}
                    ></div>
                </>
            )}
            {showAddModal && (
                <>
                    <div className="AddModal">
                        <AiOutlineCloseCircle
                            className="close_icon"
                            onClick={() => setShowAddModal(!showAddModal)}
                        />
                        <div className="AddModalHeader">New job</div>
                        <div className="AddModalContent">
                            <div className="important">
                                <div className="FormControl">
                                    <label>Role</label>
                                    <input
                                        type="text"
                                        placeholder="Front-end engineer"
                                        value={initRole}
                                        onChange={(e) => setInitRole(e.target.value)}
                                    />
                                </div>
                                <div className="FormControl">
                                    <label>Reward(USD)</label>
                                    <input
                                        type="text"
                                        placeholder="$!0,000"
                                        value={initReward}
                                        onChange={(e) => setInitReward(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="FormControl">
                                <label>Location</label>
                                <input
                                    type="text"
                                    placeholder="remote"
                                    value={initLocation}
                                    onChange={(e) => setInitLocation(e.target.value)}
                                />
                            </div>
                            <div className="FormControl">
                                <label>Type</label>
                                <input
                                    type="text"
                                    placeholder="Full time"
                                    value={initType}
                                    onChange={(e) => setInitType(e.target.value)}
                                />
                            </div>
                            <div className="FormControl">
                                <label>Looking for / job description</label>
                                <textarea
                                    placeholder="Notes here"
                                    value={initNote}
                                    onChange={(e) => setInitNote(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className="ListJob">List Job</button>
                    </div>
                    <div
                        className="underground"
                        onClick={() => setShowAddModal(false)}
                    ></div>
                </>
            )}
        </div>
    );
};

export default Owner;
