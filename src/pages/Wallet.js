import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import RewardsCard from "../components/RewardCard";
import CashActivityCard from "../components/CashActivityCard";
import "../scss/Wallet.scss";
const Wallet = () => {
    return (
        <div className="ReviewContainer">
            <Header />
            <div className="ReviewTitle">Your Wallet</div>
            <div className="walletGroup">
                <div className="walletItem">
                    <img src="img/Crescent.png" />
                    <div className="redeemBtn">Withdraw</div>
                </div>
                <div className="walletItem">
                    <img src="img/cash.png" />
                    {/* <div className="redeemBtn">Redeem</div> */}
                </div>
            </div>
            <div className="Reviewmaindiv">
                <div className="ReviewRefferal">Successful referrals </div>
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
                <div className="ReviewRoadmoreBtnOut">
                    <div className="ReviewRoadmoreBtn">
                        Load More
                    </div>
                </div>
            </div>
            <div className="Reviewmaindiv">
                <div className="ReviewRefferal">Cash Activity</div>
                {
                    [...new Array(4)].map((e, k) => <CashActivityCard
                        key='k'
                        date="Jan 3, 2022"
                        title="Annie Smith"
                        email="asmith@gmail.com"
                        rightText="Joined Moonhub through your referral."
                        num="0.60"
                    />)
                }
                <div className="ReviewRoadmoreBtnOut">
                    <div className="ReviewRoadmoreBtn">
                        Load More
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Wallet;
