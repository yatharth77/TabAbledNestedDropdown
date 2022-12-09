import React from "react";
import SubMenuItem from "./subMenuItem";

export default function SubMenu(props) {
  const subList = ["red", "green", "yellow"];
  return (
    <div>
      {subList.map((color) => (
        <SubMenuItem color={color} key={color} />
      ))}
    </div>
  );
}
