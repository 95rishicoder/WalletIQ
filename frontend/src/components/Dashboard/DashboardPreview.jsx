import BrowserWindow from "../BrowserWindow";

import DashboardHeader from "./DashboardHeader";
import BalanceCard from "./BalanceCard";
import StatsRow from "./StatsRow";
import SpendingChart from "./SpendingChart";
import Transactions from "./Transactions";
import SavingsGoal from "./SavingsGoal";
import MobilePreview from "./MobilePreview";

import PhoneMockup from "../PhoneMockup";

function DashboardPreview() {
  return (
    <section className="dashboard-preview">

      <BrowserWindow>

        <div className="desktop-preview">

          <DashboardHeader />

          <BalanceCard />

          <StatsRow />

          <SpendingChart />

          <div className="dashboard-bottom">

            <Transactions />

            <SavingsGoal />

          </div>

        </div>

      </BrowserWindow>

      <PhoneMockup>

        <MobilePreview />

      </PhoneMockup>

    </section>
  );
}

export default DashboardPreview;