import { EMAIL_PASS_REFFERALCODE, NAME_TITLE_LINKEDIN, ABOUTME } from "../actions/actionType";
import { ServerURL } from '../config/port';
import { notification } from "antd";
import axios from "axios";
const jwt = require("jsonwebtoken");

// sign up
export const Setemail_pass_code = (email, password, code) => dispatch => {
    return dispatch({
        type: EMAIL_PASS_REFFERALCODE,
        payload: { email, password, code }
    });
};
export const Setname_title_linkedin_photo = (name, title, linkedin, photo) => dispatch => {
    return dispatch({
        type: NAME_TITLE_LINKEDIN,
        payload: { name, title, linkedin, photo }
    });
}
export const Setaboutme = (about) => dispatch => {
    return dispatch({
        type: ABOUTME,
        payload: about
    });
}
export const Send_signdata = (data, history) => dispatch => {
    console.log(22, data);
    return axios.post(`${ServerURL}/signup`, { data }).then(e => {

    }).catch(err => notification.warning({ message: "Warning!", description: err.response.data }))
}