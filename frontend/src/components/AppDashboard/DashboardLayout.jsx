import "./Dashboard.css";

import Sidebar from "./Sidebar";
import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import PlaidLinkButton from "../PlaidLinkButton";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <Header />

        <main className="dashboard-content">

          <WelcomeSection />

          <div className="plaid-connect-section">
            <PlaidLinkButton />
          </div>

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;