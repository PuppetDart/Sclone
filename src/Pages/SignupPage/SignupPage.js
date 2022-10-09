import SignupLinks from "./SignupLinks";
import SignupForm from "./SignupForm";
import Divider from "../../globalComp/Divider";
export default function SignupPage() {
    return (
        <div className="SignupPage">
            <SignupLinks />
            <Divider width="400px" />
            <SignupForm />
        </div>
    );
}