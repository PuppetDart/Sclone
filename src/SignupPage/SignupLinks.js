import ForeignBttn from "../globalComp/ForeignBttn";
import { ReactComponent as Spotify } from "../icons/spotify.svg";
export default function SignupLinks(){
    return(
        <div className="SignupLinks">
                <Spotify />
                <p>Sign up for free to start listening.</p>
                <ForeignBttn icon="facebook" portal="Sign up with Facebook" bgColor="#4267B2" />
                <ForeignBttn icon="google" portal="Sign up with Google" />
            </div>
    );
}