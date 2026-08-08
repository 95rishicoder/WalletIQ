import "./Dashboard.css";

import Sidebar from "./Sidebar";
import Header from "./Header";
import WelcomeSection from "./WelcomeSection";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Header />

        <main className="dashboard-content">

          <WelcomeSection />

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;