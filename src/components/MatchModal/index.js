import React from "react";
import { Modal } from "antd";
import "./matchmodal.scss";
const MatchModal = ({ visible, handleCancel }) => {
    return (
        <Modal visible={visible} footer={false} onCancel={handleCancel}>
            <div className="antd_Modal" >
                <div className="accessModalTitle">
                    Want to  explore high-growth startup opportunities?
                    <span> Let moonhub Experts introduce you!</span>
                </div>
                <div className="accessModalsubtitle">
                    Tell us a bit about the type of roles you’re interested in, stage / sector of company, import criteria, and your timeline. Our team of startup experts will get back to you with matches to startups + opportunities for warm introductions.
                </div>
                <textarea placeholder="Notes here" className="antdModalTextarea" />
                <div className="ChatBtnOut">
                    <div className="ChatBtn">Chat</div>
                </div>
            </div>
        </Modal>
    );
};

export default MatchModal;
