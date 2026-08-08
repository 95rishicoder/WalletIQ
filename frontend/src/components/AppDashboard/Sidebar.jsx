import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>WalletIQ</h2>
      </div>

      <nav className="sidebar-nav">

        <button>🏠 Dashboard</button>

        <button>💳 Expenses</button>

        <button>💰 Income</button>

        <button>📊 Budgets</button>

        <button>🎯 Savings Goals</button>

        <button>📈 Reports</button>

        <button>🤖 AI Assistant</button>

        <button>⚙️ Settings</button>

      </nav>

      <div className="sidebar-footer">

        <button className="logout-btn">
          🚪 Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;