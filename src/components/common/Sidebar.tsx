import { menuData } from "../../utlis/menuData";

function SideBar () {
    return (
        <nav className="sidebar">
            {menuData.map((each) => (
             <div className="capitalize menu">{each}</div>
            ))}
        </nav>
    )
}

export default SideBar;