import React from "react";
import { Link } from "react-router-dom";
import "../scss/SecondPage.scss";
class SecondPage extends React.Component {
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
            <div className="secroot">
                <div className={`sideBar ${this.state.flag ? "show" : ""}`}>
                    <div className="logo">
                        <img src="img/mainLogo.png" width="180px" draggable="false" />
                    </div>
                    <div className="sidebody">
                        <div className="sideItem">
                            <img src="img/dashboard.png" draggable="false" width="36px" height="30px" /> DASHBOARD
                        </div>
                        <Link to="/sec">
                            <div className="sideItem">
                                <img src="img/stake.png" draggable="false" width="36px" height="30px" /> STAKE
                            </div>
                        </Link>
                        <Link to="/thr">
                            <div className="sideItem">
                                <img src="img/bond.png" draggable="false" width="36px" height="30px" /> BOND
                            </div>
                        </Link>
                        <div className="bondnavitem">
                            <div className="discount">BOND DISCOUNTS</div>
                            <div className="mim">
                                <div>MIM</div>
                                <div>ETN-MIM LP</div>
                                <div>AVAX</div>
                            </div>
                        </div>
                        <Link to="/for">
                            <div className="sideItem">
                                <img src="img/governance.png" draggable="false" width="36px" height="30px" /> GOVERNANCE
                            </div>
                        </Link>
                        <div className="sideItem">
                            <img src="img/purchase.png" draggable="false" width="36px" height="30px" /> PURCHASE ETN
                        </div>
                    </div>
                    <div className="footerout">
                        <div className="footer">
                            <div className="socialItem">
                                <div><img src="img/twitter.png" width="25px" draggable="false" /></div>
                                <div><img src="img/medium.png" width="25px" draggable="false" /></div>
                                <div><img src="img/discord.png" width="25px" draggable="false" /></div>
                                <div><img src="img/telegram.png" width="25px" draggable="false" /></div>
                            </div>
                            <div className="footereter">ETERNALDAO © 2021</div>
                        </div>
                    </div>
                </div>
                <div className="barTag"><i className="fa fa-bars" onClick={this.sideshow} /></div>
                <div className="secRight">
                    <div className="secwalletBtnOut">
                        <div className="secwalletBtn">CONNECT WALLET</div>
                    </div>
                    <div className="singlestakeOut">
                        <div className="singlestake">
                            <div className="singletop">
                                <div className="singleTop-left">SINGLE STAKE ( &nbsp;&nbsp; , &nbsp;&nbsp;&nbsp;  )</div>
                                <div className="singleTop-right">CONNECT YOUR WALLET TO STAKE</div>
                            </div>
                            <div className="singlemiddle">
                                <div className="singlemiddle-left">
                                    <div className="apy">APY</div>
                                    <div className="wrongNet">WRONG NETWORK</div>
                                </div>
                                <div className="singlemiddle-lineOut">
                                    <div className="singlemiddle-line" />
                                </div>
                                <div className="singlemiddle-right">
                                    <div className="apy">CURRENT INDEX</div>
                                    <div className="wrongNet">WRONG NETWORK</div>
                                </div>
                            </div>
                            <div className="singleBtn">
                                <button>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="ButtonText">
                                        CONNECT WALLET
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="singlestakeOut">
                        <div className="singlestake-calcu">
                            <div className="singletop">
                                <div className="singleTop-left">CALCULATOR</div>
                                <div className="singleTop-right">ESTIMATE YOUR RETURNS</div>
                            </div>
                            <div className="calcu-middle">
                                <div className="ENTitemOut">
                                    <div className="ENTitem">
                                        <div className="ENTamount">sENT amount</div>
                                        <div className="ENTinput">
                                            <div className="ENTinput-input"><input type="text" defaultValue="0" /></div>
                                            <div className="ENTinput-letter">Max</div>
                                        </div>
                                    </div>
                                    <div className="ENTitem">
                                        <div className="ENTamount">APY (%)</div>
                                        <div className="ENTinput">
                                            <div className="ENTinput-input-current"><input type="text" defaultValue="0" /></div>
                                            <div className="ENTinput-letter">Current</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ENTitemOut">
                                    <div className="ENTitem">
                                        <div className="ENTamount">ETN price at purchase ($)</div>
                                        <div className="ENTinput">
                                            <div className="ENTinput-input-current"><input type="text" defaultValue="0" /></div>
                                            <div className="ENTinput-letter">Current</div>
                                        </div>
                                    </div>
                                    <div className="ENTitem">
                                        <div className="ENTamount">Future ETN market price ($)</div>
                                        <div className="ENTinput">
                                            <div className="ENTinput-input-current"><input type="text" defaultValue="0" /></div>
                                            <div className="ENTinput-letter">Current</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="day-scrollBar">
                                <div className="threeday">30 DAYS</div>
                                <div className="barsite">
                                    <input type="range" min="0" max="100" />
                                </div>
                            </div>
                            <div className="investlist">
                                <div className="listitem">
                                    <div className="listitem-letter">YOUR INITIAL INVESTMENT</div>
                                    <div className="listitem-pro">$0</div>
                                </div>
                                <div className="listitem">
                                    <div className="listitem-letter">CURRENT WEALTH</div>
                                    <div className="listitem-pro">$0</div>
                                </div>
                                <div className="listitem">
                                    <div className="listitem-letter">ETN REWARDS ESTIMATION</div>
                                    <div className="listitem-pro">0 </div>
                                </div>
                                <div className="listitem">
                                    <div className="listitem-letter">POTENTIAL RETURN</div>
                                    <div className="listitem-pro">$0</div>
                                </div>
                                <div className="listitem">
                                    <div className="listitem-letter">POTENTIAL NUMBER OF 2022 TOYOTA PRIUSES ($24,525)</div>
                                    <div className="listitem-pro">$0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default SecondPage;