import TextInput from "../globalComp/TextInput";
import Cb from "../globalComp/Cb";
import ForeignBttn from "../globalComp/ForeignBttn";
export default function LoginForm(props) {
    return (
        <div className="LoginForm">
            <TextInput msg="Email address or username" hintText="Email address or username" />
            <TextInput msg="Password" hintText="Password" />
            <a style={{ fontsize: "20px", display: "inline-block", color: "black", marginTop: "20px"}} href="https://www.google.com/">Forgot your Password?</a>
            <div className="LoginCommand">
                <Cb val="rememberCb" msg="Remember Me"/>
                <ForeignBttn width="120px" portal="LOG IN" bgColor="#1ed760" />
            </div>
        </div>
    );
}