import React, { useEffect } from "react";
import TrapFocus, { useTrapFocus } from "./trapFocus";
import SubMenu from "./subMenu";

export default function MenuItem(props) {
  const { fruit } = props;
  const {
    showSubDiv,
    toggleSubDiv,
    instigatorRef,
    focusOnEscape,
    focusOnEscapeDependecy
  } = useTrapFocus();
  useEffect(() => focusOnEscape(instigatorRef), focusOnEscapeDependecy);
  return (
    <div>
      <div className="item" ref={instigatorRef} key={fruit} tabIndex={0}>
        {fruit}
      </div>
      <TrapFocus onEscape={toggleSubDiv} showSubDiv={showSubDiv}>
        <SubMenu />
      </TrapFocus>
    </div>
  );
}
