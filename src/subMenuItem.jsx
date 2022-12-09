import React from "react";

export default function SubMenuItem(props) {
  const { color } = props;
  return (
    <div
      className="subitem"
      tabIndex={0}
      key={color}
      style={{ color: `${color}` }}
    >
      {color}
    </div>
  );
}
