import { ReactComponent as Spotify } from "../../icons/spotify.svg"
import MenuItem from "./MenuItem";
export default function Menu() {
    return (
        <div className="mainMenu">
            <Spotify style={{fill: "white", width:"130px"}}/>
            <div className="menuItemGRP">
                <MenuItem name="Home" />
                <MenuItem name="Search" />
                <MenuItem name="Library" />
            </div>
        </div>
    );
}