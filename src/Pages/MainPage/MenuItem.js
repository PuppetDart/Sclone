import {ReactComponent as Home} from "../../icons/home.svg"
import {ReactComponent as Search} from "../../icons/search.svg"
import {ReactComponent as Library} from "../../icons/library.svg"

export default function MenuItem(props){

    var icon;

    switch (props.name) {
        case "Home": icon = <Home />;
            break;
        case "Search": icon = <Search />;
            break;
        case "Library": icon = <Library />;
            break;
    }

    return (
        <div className="menuItem">
            <div>{icon}</div>
            <div>{props.name == "Library" ? "Your " + props.name : props.name}</div>
        </div>
    );
}