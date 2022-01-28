import React from "react";
import Person from "../components/Person/Person";
import Search from "../components/Search/Search";
import Header from "../layout/Header";
import "../scss/YourPartners.scss";
const Partner = () => {
    return (
        <div className="PartnerContainer">
            <Header />
            <div className="PartnerTitle">Your Partners</div>
            <div className="PartnerContent">
                <div className="ContentHeader">
                    <Search />
                </div>
                <div className="CardGroupContent">
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                </div>
            </div>
        </div>
    );
};

export default Partner;
