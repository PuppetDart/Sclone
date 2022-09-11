import ContinueWithBttn from "./ContinueWithBttn";
export default function LoginLinks(){
    return(
        <div class="LoginLinks">
        <p class="LoginLinks__msg">To continue, log in to Spotify.</p>
        <ContinueWithBttn portal="FACEBOOK" bgColor="#4267B2"/>
        <ContinueWithBttn portal="APPLE" bgColor="black"/>
        <ContinueWithBttn portal="GOOGLE"/>
        <ContinueWithBttn portal="PHONE NUMBER"/>
        </div>
    );
}