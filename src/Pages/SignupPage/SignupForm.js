import TextInput from "../../globalComp/TextInput";
import RadioBttn from "../../globalComp/RadioBttn";
import ForeignBttn from "../../globalComp/ForeignBttn";
import Cb from "../../globalComp/Cb"
export default function SignupForm() {
    return (
        <form className="SignupForm">

            <TextInput msg="What's your email?" hintText="Enter your email" />
            <TextInput msg="Confirm your email" hintText="Enter your email again" />
            <TextInput msg="Create a password" hintText="Create a password" />
            <TextInput msg="What should we call you?" hintText="Enter a profile name" />

            <fieldset className="InputGrp">
                <legend>What's your date of birth?</legend>
                <div className="DOB" style={{ display: "flex", gap: "15px" }}>
                    <TextInput msg="Year" hintText="YYYY" />
                    <TextInput msg="Month" hintText="Month" />
                    <TextInput msg="Day" hintText="Day" />
                </div>
            </fieldset>

            <fieldset className="genderSelection">
                <legend>What's your gender?</legend>
                <div className="genderRadios">
                    <RadioBttn val="male" grp="gender" msg="Male" />
                    <RadioBttn val="female" grp="gender" msg="Female" />
                    <RadioBttn val="notBinary" grp="gender" msg="Non-Binary" />
                    <RadioBttn val="other" grp="gender" msg="Other" />
                    <RadioBttn val="notSay" grp="gender" msg="Prefer not to say" />
                </div>
            </fieldset>
            
            <Cb val="marketingMailCb" msg="I would prefer not to receive marketing messages from Spotify" />
            <Cb val="dataAccessCb" msg="Share my registration data with Spotify's content providers for marketing purposes." />

            <div className="signupCommand">
                <p>By clicking on sign-up, you agree to Spotify's Terms and Conditions of Use.
                    <br /><br />
                To learn more about how Spotify collects, uses, shares and protects your personal data, please see Spotify's Privacy Policy.</p>
                <ForeignBttn width="120px" portal="Sign up" bgColor="#1ed760"/>
                <span>Have an account? <a href="">Log in.</a></span>
            </div>
        </form>
    );
}