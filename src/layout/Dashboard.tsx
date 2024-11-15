import Header from "../components/common/Header";
import SideBar from "../components/common/Sidebar";
import { IDashboard } from "../interface/IDashboard.interface";

function Dashboard ({children}: IDashboard) {
    return (
        <>
        <Header />
        <main>
        <div className="wrapper">
        <div className="container">
        <div className="desktop">
        <SideBar />
        </div>
        {children}
        </div>
        </div>
        </main>
        </>
    )
};

export default Dashboard;