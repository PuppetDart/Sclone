export default function Cb(props){
    return(
        <div className="Cb">
            <input type="checkbox" id={props.val} />
            <label htmlFor={props.val}>{props.msg}</label>
        </div>
    );
}