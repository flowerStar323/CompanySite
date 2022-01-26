import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../scss/ChoosePage.scss";
class ChoosePage extends React.Component {
    constructor() {
        super();
        this.state = {
            ChooseValue: ''
        }
    }
    Check = (e) => {
        const pro = document.getElementById('pro');
        const com = document.getElementById('com');
        console.log(e);
        if (e == "pro") {
            this.setState({ ChooseValue: 'pro' });
            com.style.background = "#777777";
            pro.style.background = "#2d74ff ";
        } else if (e == "com") {
            this.setState({ ChooseValue: 'com' });
            com.style.background = "#2d74ff";
            pro.style.background = "#777777";
        }
    }
    render() {
        const { ChooseValue } = this.state;
        return (
            <div className="CCroot">
                <div className="CCmaindiv">
                    <Link to="/">
                        <div className="CBackBtnOut">
                            <FaChevronLeft className="CBackBtn" />
                        </div>
                    </Link>
                    <Link to={ChooseValue == 'pro' ? '/intro' : '/introcompany'}>
                        <div className="CNextBtnOut">
                            <FaChevronRight className="CNextBtn" />
                        </div>
                    </Link>
                    <div className="CCtitle">I'm a:</div>
                    <div className="CProfessionalDiv" id="pro">
                        <input type="radio" name="chooselevel" className="Ccheck-radio" onClick={() => this.Check('pro')} />
                        <div className="CradioText">
                            <p>Professional</p>
                            I want to meet startups, join Connect community & earn $.
                        </div>
                    </div>
                    <div className="CProfessionalDiv" id="com">
                        <input type="radio" name="chooselevel" className="Ccheck-radio" onClick={() => this.Check('com')} />
                        <div className="CradioText">
                            <p>Company Representative</p>
                            I want to grow a recruiting network to hire top talent.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ChoosePage; 