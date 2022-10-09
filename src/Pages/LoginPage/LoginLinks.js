import ForeignBttn from "../../globalComp/ForeignBttn";
export default function LoginLinks(){
    return(
        <div className="LoginLinks">
        <ForeignBttn icon="facebook" portal="CONTINUE WITH FACEBOOK" bgColor="#4267B2"/>
        <ForeignBttn icon="apple" portal="CONTINUE WITH APPLE" bgColor="black"/>
        <ForeignBttn icon="google" portal="CONTINUE WITH GOOGLE"/>
        <ForeignBttn portal="CONTINUE WITH PHONE NUMBER"/>
        </div>
    );
}