import React from "react";
import { Link } from "react-router-dom";
import "../scss/FourthPage.scss";
class FourthPage extends React.Component {
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
            <div className="froot">
                <div className={`fsideBar ${this.state.flag ? "show" : ""}`}>
                    <div className="flogo">
                        <img src="img/mainLogo.png" width="180px" draggable="false" />
                    </div>
                    <div className="fsidebody">
                        <div className="fsideItem">
                            <img src="img/dashboard.png" draggable="false" width="36px" height="30px" /> DASHBOARD
                        </div>
                        <Link to="/sec">
                            <div className="fsideItem">
                                <img src="img/stake.png" draggable="false" width="36px" height="30px" /> STAKE
                            </div>
                        </Link>
                        <Link to="/thr">
                            <div className="fsideItem">
                                <img src="img/bond.png" draggable="false" width="36px" height="30px" /> BOND
                            </div>
                        </Link>
                        <div className="fbondnavitem">
                            <div className="fdiscount">BOND DISCOUNTS</div>
                            <div className="fmim">
                                <div>MIM</div>
                                <div>ETN-MIM LP</div>
                                <div>AVAX</div>
                            </div>
                        </div>
                        <Link to="/for">
                            <div className="fsideItem">
                                <img src="img/governance.png" draggable="false" width="36px" height="30px" /> GOVERNANCE
                            </div>
                        </Link>
                        <div className="fsideItem">
                            <img src="img/purchase.png" draggable="false" width="36px" height="30px" /> PURCHASE ETN
                        </div>
                    </div>
                    <div className="ffooterout">
                        <div className="ffooter">
                            <div className="fsocialItem">
                                <div><img src="img/twitter.png" width="25px" draggable="false" /></div>
                                <div><img src="img/medium.png" width="25px" draggable="false" /></div>
                                <div><img src="img/discord.png" width="25px" draggable="false" /></div>
                                <div><img src="img/telegram.png" width="25px" draggable="false" /></div>
                            </div>
                            <div className="ffootereter">ETERNALDAO © 2021</div>
                        </div>
                    </div>
                </div>
                <div className="fbarTag"><i className="fa fa-bars" onClick={()=>this.sideshow()}/></div>
                <div className="fsecRight">
                    <div className="fwalletBtnOut">
                        <div className="fwalletBtn">CONNECT WALLET</div>
                    </div>
                    <div className="fsinglestakeOut">
                        <div className="fsinglestake">
                            <div className="fsingletop">
                                <div className="fsingleTop-left">GOVERNANCE</div>
                            </div>
                            <div className="fsoon">
                                COMING SOON
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}
export default FourthPage;