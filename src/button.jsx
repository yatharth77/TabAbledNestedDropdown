import React, { useEffect } from "react";
import Menu from "./menu";
import TrapFocus, { useTrapFocus } from "./trapFocus";

export default function Button() {
  const {
    showSubDiv,
    toggleSubDiv,
    instigatorRef,
    focusOnEscape,
    focusOnEscapeDependecy
  } = useTrapFocus();
  useEffect(() => focusOnEscape(instigatorRef), focusOnEscapeDependecy);
  return (
    <div className="dropdown">
      <button className="dropdown-btn" ref={instigatorRef}>
        clicke me
      </button>
      <TrapFocus onEscape={toggleSubDiv} showSubDiv={showSubDiv}>
        <Menu show={showSubDiv} toggleShow={toggleSubDiv} />
      </TrapFocus>
    </div>
  );
}
