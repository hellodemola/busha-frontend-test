import { menuData } from "../../utlis/menuData";

function SideBar () {
    return (
        <nav className="sidebar">
            {menuData.map((each, index) => (
             <div key={index}  className="capitalize menu">{each}</div>
            ))}
        </nav>
    )
}

export default SideBar;