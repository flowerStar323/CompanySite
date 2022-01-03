import React from "react";
import { Link } from "react-router-dom";
import "../scss/FirstPage.scss";
import Sample from "../assets/first.mp4";
class FirstPage extends React.Component {
    render() {
        return (
            <div className="root">
                <video className='videoTag' autoPlay loop muted>
                    <source src={Sample} type='video/mp4' />
                </video>
                <div className="title">
                    <div className="eter">ETERNAL</div>
                    <div className="dao">DAO</div>
                </div>
                <div className="mainDiv">
                    <div className="logo">
                        <img src="img/mainLogo.png" width="550px" draggable="false" />
                    </div>
                    <div className="Btn">
                        <button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="ButtonText">
                                BUY ETN
                            </span>
                        </button>
                        <button className="middleBtn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="ButtonText">
                                LAUNCH APP
                            </span>
                        </button>
                        <button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className="ButtonText">
                                DOCUMENTS
                            </span>
                        </button>
                    </div>

                </div>
                <div className="footer">
                    <div className="socialItem">
                        <div><img src="img/twitter.png" width="40px" /></div>
                        <div><img src="img/medium.png" width="40px" /></div>
                        <div><img src="img/discord.png" width="40px" /></div>
                        <div><img src="img/telegram.png" width="40px" /></div>
                    </div>
                    <div className="footereter">ETERNALDAO © 2021</div>
                </div>

            </div>
        )
    }
}
export default FirstPage;