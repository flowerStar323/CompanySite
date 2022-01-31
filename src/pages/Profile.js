import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import RewardsCard from "../components/RewardCard";
import { BiEdit } from "react-icons/bi";
import "../scss/Profile.scss";
const Referrals = () => {
    return (
        <div className="ProReviewContainer">
            <Header />
            <div className="ProReviewTitle">
                <div className="ProreviewTitleMain">
                    <div className="ProReviewTitle_left">
                        <div className="Prophotoposition"></div>
                        <div className="ProphotoRight">
                            <div className="Profilename">Nancy Xu<BiEdit className="editbtn" /></div>
                            <div className="profilejob">Founder at Jobhub<BiEdit className="editbtn" /></div>
                            <div className="profilelinkedin">linkedin.com/in/xnancy<BiEdit className="editbtn" /></div>
                        </div>
                    </div>
                    <div className="ProresetBtnout">
                        <div className="ProresetBtn">Reset Password</div>
                    </div>
                </div>
            </div>
            <div className="ProReviewmaindiv">
                <div className="ProReviewmainsubtitle">
                    <div className="Proabouttitle">
                        <p>About Me</p>
                        <p><BiEdit className="editbtn" /></p>
                    </div>
                    <div className="ProaboutText">
                        I love working with high-growth AI companies to hire machine learning engineer talent. The majority of my referrals are through my personal network.
                    </div>
                </div>
                <div className="ProReviewRefferal">Referral Rewards</div>
                {
                    [...new Array(4)].map((e, k) => <RewardsCard
                        key='k'
                        date="Jan 3, 2022"
                        title="Annie Smith"
                        email="asmith@gmail.com"
                        rightText="Joined Moonhub through your referral."
                        num="+5"
                    />)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Referrals;
