import "./Dashboard.css";

import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Header />

        <main className="dashboard-content">
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;