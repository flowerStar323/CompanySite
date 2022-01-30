import React, { useState } from "react";
import { Link } from "react-router-dom";
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
                        <Link to='/home'>
                            <img src="img/homelogo.png" width={40} className="Chomelogo" />
                        </Link>
                        <p>Moonhub</p>
                    </div>
                    <div className="CheaderItem">Companies</div>
                    <Link to='/referrals'>
                        <div className="CheaderItem">Referrals</div>
                    </Link>
                </div>
                <div className="CmainHeaderRight">
                    <div className="CheadermatchBtn">Get Matched</div>
                    <GiTwoCoins className="CHeaderRightItemCoin" />
                    <RiMessage2Fill className="CHeaderRightItem" />
                    <FaUserCircle className="CHeaderRightItemUser" />
                    <FaBars className="CResHeaderRightItemBar" onClick={() => setResflag(!Resflag)} />
                </div>

            </div>
            {
                Resflag && <div className="CResPanel">
                    <div className="CheaderItemRes">Companies</div>
                    <Link to='/referrals'>
                        <div className="CheaderItemRes">Referrals</div>
                    </Link>
                    <div className="CResItems">
                        <GiTwoCoins className="CResHeaderRightItemCoin" />
                        <RiMessage2Fill className="CResHeaderRightItem" />
                        <FaUserCircle className="CResHeaderRightItemUser" />
                    </div>
                    <div className="ResMatchOut">
                        <div className="CheadermatchBtnRes">Get Matched</div>
                    </div>
                </div>
            }
        </div >
    );
}
