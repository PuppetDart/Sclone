export default function TextInput(props){
    return(
        <div className="TextInput">
            <p>{props.msg}</p>
            <input type="text" placeholder={props.hintText}/>
        </div>
    );
}