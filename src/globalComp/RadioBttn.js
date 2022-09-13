export default function RadioBttn(props){
    return(
        <div className="RadioBttn">
            <input type="radio" name={props.grp} id={props.grp + "-" +props.val} />
                <label htmlFor={props.grp + "-" +props.val}>{props.msg}</label>
        </div>
    );
}