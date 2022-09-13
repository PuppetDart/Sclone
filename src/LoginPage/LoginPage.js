import Navbar from "./Navbar";
import Divider from "../globalComp/Divider";
import LoginLinks from "./LoginLinks";
import LoginForm from "./LoginForm";
import ForeignBttn from "../globalComp/ForeignBttn";
export default function LoginPage() {
    return (
        <>
            <Navbar />
            <div className="LoginBody">
                <LoginLinks />
                <Divider />
                <LoginForm />
                <Divider />
                <p className="msg" style={{ textAlign: "center", fontSize: "16px", fontWeight: "700" }}>Don't have an account?</p>
                <ForeignBttn portal="SIGN UP FOR SPOTIFY" />
            </div>
        </>
    );
}