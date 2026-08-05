import "./BrowserWindow.css";

function BrowserWindow({ children }) {
  return (
    <div className="browser-window">

      <div className="browser-toolbar">

        <div className="browser-dots">

          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>

        </div>

        <div className="browser-address">
          walletiq.com
        </div>

      </div>

      <div className="browser-body">
        {children}
      </div>

    </div>
  );
}

export default BrowserWindow;