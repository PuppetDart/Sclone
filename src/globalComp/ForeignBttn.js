import { ReactComponent as Facebook } from '../icons/facebook.svg';
import { ReactComponent as Google } from '../icons/google.svg';
import { ReactComponent as Apple } from '../icons/apple.svg';

export default function ForeignBttn(props) {
    var icon;
    switch (props.icon) {
        case "facebook": icon = <Facebook />;
            break;
        case "google": icon = <Google />;
            break;
        case "apple": icon = <Apple />;
            break;
        default: icon = "";
    }
    return (
        <div className="ForeignBttn"
            style={{
                width: props.width,
                border: props.bgColor === undefined ? "1px solid black" : null,
                backgroundColor: props.bgColor === undefined ? null : props.bgColor,
                color: props.bgColor === undefined ? "grey" : "white"
            }}>
            {icon}
            {props.portal}
        </div>
    );
}