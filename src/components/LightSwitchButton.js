import { useState } from "react";

function LightSwitchButton() {
  const [light, setLight] = useState('off');

  return (
    <button className="LightSwitchButton">
      {light === "on" && <span className="On"><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="Off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;