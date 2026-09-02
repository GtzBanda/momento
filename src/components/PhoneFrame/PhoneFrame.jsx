import "./PhoneFrame.css";

function PhoneFrame({ children }) {
  return (
    <div className="app-background">
      <div className="phone-frame">
        <div className="phone-screen">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PhoneFrame;