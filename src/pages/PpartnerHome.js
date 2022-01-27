import React from "react";
import { BiSearch } from "react-icons/bi";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Card from "../components/Pcard";
import "../scss/PpartnerHome.scss";
export default function PpartnerHome() {
    return (
        <div className="ExpPartnerOut">
            <Header />
            <div className="ExpToptitle">
                Explore Companies
            </div>
            <div className="Expmaindiv">
                <div className="ExpGroups">
                    <div className="ExpGroupTitle">
                        <div className="ExpGroupTitleLeft">
                            Your Companies
                        </div>
                        <div className="ExpGroupTitleRight">
                            <input />
                            <BiSearch className="ExpsearchIcon" />
                        </div>
                    </div>
                    <div className="ExpCardRow">
                        <div className="ExpcardTwo">
                            <Card logo='img/cardlogo_you.png' title='You.com' subtitle='32 jobs' actNum='3 active referrals' />
                            <Card logo='img/cardlogo_V.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                        </div>
                        <div className="ExpcardTwo">
                            <Card logo='img/cardlogo_you.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                            <Card logo='img/cardlogo_V.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                        </div>
                    </div>
                    <div className="ExpCardRow">
                        <div className="ExpcardTwo">
                            <Card logo='img/cardlogo_you.png' title='You.com' subtitle='32 jobs' actNum='3 active referrals' />
                            <Card logo='img/cardlogo_V.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                        </div>
                        <div className="ExpcardTwo">
                            <Card logo='img/cardlogo_you.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                            <Card logo='img/cardlogo_V.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                        </div>
                    </div>
                </div>
                <div className="ExpGroups">
                    <div className="ExpGroupTitle">
                        <div className="ExpGroupTitleLeft">
                            Waiting for Ambassador Approval
                        </div>
                        <div className="ExpGroupTitleRight">
                            <input />
                            <BiSearch className="ExpsearchIcon" />
                        </div>
                    </div>
                    <div className="ExpCardRow">
                        <div className="ExpcardTwo">
                            <Card logo='img/cardlogo_you.png' title='You.com' subtitle='32 jobs' actNum='3 active referrals' />
                            <Card logo='img/cardlogo_V.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                        </div>
                        <div className="ExpcardTwo">
                            <Card logo='img/cardlogo_you.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                            <Card logo='img/cardlogo_V.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                        </div>
                    </div>
                    <div className="ExpCardRow">
                        <div className="ExpcardTwo">
                            <Card logo='img/cardlogo_you.png' title='You.com' subtitle='32 jobs' actNum='3 active referrals' />
                            <Card logo='img/cardlogo_V.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                        </div>
                        <div className="ExpcardTwo">
                            <Card logo='img/cardlogo_you.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                            <Card logo='img/cardlogo_V.png' title='Verkada' subtitle='10 jobs' actNum='5 active referrals' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
