export default function ContinueWithBttn(props) {
    return (
        <div class="contWithBttn"
            style={{border: props.bgColor === undefined? "1px solid black": null, backgroundColor: props.bgColor === undefined ? null :props.bgColor, color: props.bgColor === undefined ? "grey": "white"}}>
            CONTINUE WITH {props.portal}
        </div>
    );
}