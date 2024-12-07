import Context from "./Context";
import Header from "./Header";
import SettingsPanel from "./SettingsPanel";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div >
            <div className="px-2 py-0">
                <Header />
            </div>
            <div className="lg:grid grid-cols-12 p-6 bg-slate-100 rounded-md gap-4">
                <div className="col-span-2 ">
                    <Sidebar />
                </div>
                <div className="col-span-8">
                    <Context />
                </div>
                <div className="col-span-2">
                    <SettingsPanel></SettingsPanel>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
