import React from "react";
import { Link } from "react-router-dom";
import "../scss/ThrPage.scss";
class ThrPage extends React.Component {
    constructor(){
        super();
        this.state={
            flag:false
        }
    }
    sideshow = () =>{
        const {flag} = this.state;
        this.setState({flag: !flag})
    }
    render() {
        return (
            <div className="troot">
                <div className={`tsideBar ${this.state.flag ? "show" : ""}`}>
                    <div className="tlogo">
                        <img src="img/mainLogo.png" width="180px" draggable="false" />
                    </div>
                    <div className="tsidebody">
                        <div className="tsideItem">
                            <img src="img/dashboard.png" draggable="false" width="36px" height="30px" /> DASHBOARD
                        </div>
                        <Link to="/sec">
                            <div className="tsideItem">
                                <img src="img/stake.png" draggable="false" width="36px" height="30px" /> STAKE
                            </div>
                        </Link>
                        <Link to="/thr">
                            <div className="tsideItem">
                                <img src="img/bond.png" draggable="false" width="36px" height="30px" /> BOND
                            </div>
                        </Link>
                        <div className="tbondnavitem">
                            <div className="tdiscount">BOND DISCOUNTS</div>
                            <div className="tmim">
                                <div>MIM</div>
                                <div>ETN-MIM LP</div>
                                <div>AVAX</div>
                            </div>
                        </div>
                        <Link to="/for">
                            <div className="tsideItem">
                                <img src="img/governance.png" draggable="false" width="36px" height="30px" /> GOVERNANCE
                            </div>
                        </Link>
                        <div className="tsideItem">
                            <img src="img/purchase.png" draggable="false" width="36px" height="30px" /> PURCHASE ETN
                        </div>
                    </div>
                    <div className="tfooterout">
                        <div className="tfooter">
                            <div className="tsocialItem">
                                <div><img src="img/twitter.png" width="25px" draggable="false" /></div>
                                <div><img src="img/medium.png" width="25px" draggable="false" /></div>
                                <div><img src="img/discord.png" width="25px" draggable="false" /></div>
                                <div><img src="img/telegram.png" width="25px" draggable="false" /></div>
                            </div>
                            <div className="tfootereter">ETERNALDAO © 2021</div>
                        </div>
                    </div>
                </div>
                <div className="tbarTag"><i className="fa fa-bars" onClick={() => this.sideshow()} /></div>
                <div className="tthrsecRight">
                    <div className="tthrwalletBtnOut">
                        <div className="tthrwalletBtn">CONNECT WALLET</div>
                    </div>
                    <div className="tsinglestakeOut">
                        <div className="tsinglestake">
                            <div className="tsingletop">
                                <div className="tsingleTop-left">BOND (1,1)</div>
                                <div className="tsingleTop-right">CONNECT YOUR WALLET TO STAKE</div>
                            </div>
                            <div className="tsinglemiddle">
                                <div className="tsinglemiddle-left">
                                    <div className="tapy">TREASURY BALANCE</div>
                                    <div className="twrongNet">$0</div>
                                </div>
                                <div className="tsinglemiddle-lineOut">
                                    <div className="tsinglemiddle-line" />
                                </div>
                                <div className="tsinglemiddle-right">
                                    <div className="tapy">ETN PRICE</div>
                                    <div className="twrongNet">$0.00</div>
                                </div>
                            </div>
                            <div className="tbondheaderOut-out">
                            <div className="tbondheaderOut">
                                <div className="tbondheader">
                                    <div className="tbon">BOND</div>
                                    <div className="tpri">PRICE</div>
                                    <div className="troi">ROI</div>
                                    <div className="tpur">PURCHASED</div>
                                </div>
                                <div className="tbondbody">
                                    <div className="tbonbody">
                                        <div className="tbonitem">
                                            <div><img src="img/avax.png" width="50px" /></div>
                                            <div className="tbonletter">
                                                <div className="tavax">wAVAX</div>
                                                <div className="tgetavax">GET wAVAX</div>
                                            </div>
                                        </div>
                                        <div className="tbonitem">
                                            <div><img src="img/magic.png" width="50px" /></div>
                                            <div className="tbonletter">
                                                <div className="tavax">ETN MIN LP</div>
                                                <div className="tgetavax">BUY LP</div>
                                            </div>
                                        </div>
                                        <div className="tbonitem">
                                            <div><img src="img/magic.png" width="50px" /></div>
                                            <div className="tbonletter">
                                                <div className="tavax">MIM</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tpribody">
                                        <div className="tpriitem">
                                            <div className="tbonletter">
                                                <div className="tpribodyVal">0000</div>
                                            </div>
                                        </div>
                                        <div className="tpriitem">
                                            <div className="tbonletter">
                                                <div className="tpribodyVal">0000</div>
                                            </div>
                                        </div>
                                        <div className="tpriitem">
                                            <div className="tbonletter">
                                                <div className="tpribodyVal">0000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="troibody">
                                        <div className="tpriitem">
                                            <div className="tbonletter">
                                                <div className="tpribodyVal">00</div>
                                            </div>
                                        </div>
                                        <div className="tpriitem">
                                            <div className="tbonletter">
                                                <div className="tpribodyVal">00</div>
                                            </div>
                                        </div>
                                        <div className="tpriitem">
                                            <div className="tbonletter">
                                                <div className="tpribodyVal">00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tpurbody">
                                        <div className="tpriitem">
                                            <div className="tbonletter-pur">
                                                <div className="tpribodyVal">0000</div>
                                                <div className="tbondbtn">BOND</div>
                                            </div>
                                        </div>
                                        <div className="tpriitem">
                                            <div className="tbonletter-pur">
                                                <div className="tpribodyVal">0000</div>
                                                <div className="tbondbtn">BOND</div>
                                            </div>
                                        </div>
                                        <div className="tpriitem">
                                            <div className="tbonletter-pur">
                                                <div className="tpribodyVal">0000</div>
                                                <div className="tbondbtn">BOND</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default ThrPage;