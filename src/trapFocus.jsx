import React, { useCallback, useEffect, useState } from "react";

export function useTrapFocus() {
  const [showSubDiv, setSubDiv] = useState(false);
  const instigatorRef = React.createRef();
  const toggleSubDiv = (e) => {
    if (e.type === "click") {
      setSubDiv(!showSubDiv);
    } else if (e.type === "keydown") {
      if (e.keyCode === 13) setSubDiv(!showSubDiv);
      else if (e.keyCode === 27) {
        instigatorRef?.current?.focus();
        setSubDiv(false);
      }
    }
  };

  const focusOnEscape = (instigatorRef) => {
    instigatorRef.current.addEventListener("click", toggleSubDiv);
    instigatorRef.current.addEventListener("keydown", toggleSubDiv);
  };

  const focusOnEscapeDependecy = [instigatorRef, focusOnEscape, toggleSubDiv];
  return {
    showSubDiv,
    toggleSubDiv,
    instigatorRef,
    focusOnEscape,
    focusOnEscapeDependecy
  };
}

export default function TrapFocus(props) {
  const { children: Component, onEscape, showSubDiv } = props;
  const refOuter = React.createRef();
  const refFirstFocusable = React.createRef();
  const refLastFocusable = React.createRef();

  useEffect(() => {
    const focusableElements = refOuter.current?.querySelectorAll("[tabindex]");
    refFirstFocusable.current = focusableElements[0];
    refLastFocusable.current = focusableElements[focusableElements.length - 1];
    refFirstFocusable?.current?.focus();
  });

  const onKeyDown = useCallback(
    (e) => {
      if (
        document.activeElement === refLastFocusable.current &&
        e.key === "Tab" &&
        !e.shiftKey
      ) {
        e.preventDefault();
        refFirstFocusable.current?.focus();
      }
      if (
        document.activeElement === refFirstFocusable.current &&
        e.key === "Tab" &&
        e.shiftKey
      ) {
        e.preventDefault();
        refLastFocusable.current?.focus();
      }

      if (e.key === "Escape") {
        onEscape(e);
        e.stopPropagation();
      }
    },
    [refFirstFocusable, refLastFocusable, onEscape]
  );

  return (
    <div ref={refOuter} onKeyDown={onKeyDown}>
      {showSubDiv ? Component : <div />}
    </div>
  );
}
