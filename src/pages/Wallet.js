import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PaymentCard from "../components/PaymentCard";
import "../scss/Wallet.scss";
const Wallet = () => {
    return (
        <div className="ReviewContainer">
            <Header />
            <div className="ReviewTitle">Your Wallet</div>
            <div className="walletGroup">
                <div className="walletItem">
                    <img src="img/Crescent.png" />
                    <div className="withdrawBtn">Withdraw</div>
                </div>
                <div className="walletItem">
                    <img src="img/cash.png" />
                    <div className="redeemBtn">Redeem</div>
                </div>
            </div>
            <div className="Reviewmaindiv">
                <div className="ReviewRefferal">Successful referrals </div>
                {
                    [...new Array(3)].map(e => <PaymentCard />)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Wallet;
