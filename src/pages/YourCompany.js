import React from "react";
import { BiSearch } from "react-icons/bi";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { FaChevronLeft } from "react-icons/fa";
import Card from "../components/Pcard";
import "../scss/YourCompany.scss";
export default function YourCompany() {
    return (
        <div className="YourPartnerOut">
            <Header />
            <div className="YourToptitle">
                <div className="YourYourComBack"><FaChevronLeft className="YourybackIcon" /></div>
                Your Companies
            </div>
            <div className="Yourmaindiv">
                <div className="YourGroups">
                    <div className="YourGroupTitle">
                        <div className="YourGroupTitleLeft">
                        </div>
                        <div className="YourGroupTitleRight">
                            <input />
                            <BiSearch className="YoursearchIcon" />
                        </div>
                    </div>
                    <div className="YourCardRow">
                        <div className="YourcardTwo">
                            <Card logo='img/cardlogo_you.png' title='You.com' subtitle='32 jobs' actNum='3 active referrals' />
                            <Card logo='img/cardlogo_V.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                        </div>
                        <div className="YourcardTwo">
                            <Card logo='img/cardlogo_you.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                            <Card logo='img/cardlogo_V.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                        </div>
                    </div>
                    {[...Array(5)].map((v, k) =>
                        <div className="YourCardRow">
                            <div className="YourcardTwo">
                                <Card logo='img/cardlogo_you.png' title='You.com' subtitle='32 jobs' actNum='3 active referrals' />
                                <Card logo='img/cardlogo_V.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                            </div>
                            <div className="YourcardTwo">
                                <Card logo='img/cardlogo_you.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                                <Card logo='img/cardlogo_V.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
