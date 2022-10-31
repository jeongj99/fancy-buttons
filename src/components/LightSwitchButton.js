import { useState } from "react";

function LightSwitchButton() {
  return (
    <button className="LightSwitchButton">
      <span className="On"><i>💡</i> I'm on!</span>
      <span className="Off"><i>💡</i> I'm off!</span>
    </button>
  );
}

export default LightSwitchButton;