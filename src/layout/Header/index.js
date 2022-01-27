import React, { useState } from "react";
import "./header.css";
import { RiMessage2Fill } from "react-icons/ri";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
export default function Header() {
    const [Resflag, setResflag] = useState(false);
    return (
        <div className="CComHeader">
            <div className="CmainHeader">
                <div className="CmainHeaderLeft">
                    <div className="CHeaderlogo">
                        <img src="img/homelogo.png" width={40} className="Chomelogo" />
                        <p>Moonhub</p>
                    </div>
                    <div className="CheaderItem">Companies</div>
                    <div className="CheaderItem">Referrals</div>
                    <div className="CheaderItem">Members</div>
                </div>
                <div className="CmainHeaderRight">
                    <GiTwoCoins className="CHeaderRightItemCoin" />
                    <RiMessage2Fill className="CHeaderRightItem" />
                    <FaUserCircle className="CHeaderRightItemUser" />
                    <FaBars className="CResHeaderRightItemBar" onClick={() => setResflag(!Resflag)} />
                </div>

            </div>
            {Resflag && <div className="CResPanel">
                <div className="CheaderItemRes">Companies</div>
                <div className="CheaderItemRes">Referrals</div>
                <div className="CheaderItemRes">Members</div>
                <div className="CResItems">
                    <GiTwoCoins className="CResHeaderRightItemCoin" />
                    <RiMessage2Fill className="CResHeaderRightItem" />
                    <FaUserCircle className="CResHeaderRightItemUser" />
                </div>
            </div>}
        </div>
    );
}
