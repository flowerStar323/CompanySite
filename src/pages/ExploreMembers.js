import React from "react";
import Ambassadors from "../components/Ambassadors/Ambassadors";
import Ambassadors_other from "../components/Ambassadors_other/Ambassadors_other";
import Ambassadors_simple from "../components/Ambassadors_simple/Ambassadors_simple";
import Search from "../components/Search/Search";
import Header from "../layout/Header";
import "../scss/ExploreMembers.scss";
const Partner = () => {
    return (
        <div className="PartnerContainer">
            <Header />
            <div className="PartnerTitle">Explore Members</div>
            <div className="PartnerContent">
                <div className="ContentHeader">
                    <div className="ContentHeaderTitle">Your Ambassadors</div>
                    <Search />
                </div>
                <div className="CardGroupContent">
                    <Ambassadors />
                    <Ambassadors />
                    <Ambassadors />
                    <Ambassadors />
                </div>
                <button className="More_Button">More</button>
            </div>
            <div className="PartnerContent">
                <div className="ContentHeader">
                    <div className="ContentHeaderTitle">
                        Pending Ambassador Applications
                    </div>
                    <Search />
                </div>
                <div className="CardGroupContent">
                    <Ambassadors_other />
                    <Ambassadors_other />
                    <Ambassadors_other />
                    <Ambassadors_other />
                </div>
                <button className="More_Button">More</button>
            </div>
            <div className="PartnerContent">
                <div className="ContentHeader">
                    <div className="ContentHeaderTitle">Discover More Members</div>
                    <Search />
                </div>
                <div className="CardGroupContent">
                    <Ambassadors_simple />
                    <Ambassadors_simple />
                </div>
            </div>
        </div>
    );
};

export default Partner;
