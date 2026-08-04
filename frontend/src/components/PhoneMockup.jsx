function PhoneMockup({ children }) {
  return (
    <div className="phone-frame">

      <div className="phone-notch"></div>

      <div className="phone-screen">

        {children}

      </div>

    </div>
  );
}

export default PhoneMockup;