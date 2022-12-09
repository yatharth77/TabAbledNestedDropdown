import React from "react";
import MenuItem from "./menuItem";

export default function Menu(props) {
  const list = ["apple", "banana", "orange", "guava"];
  return (
    <div className="header">
      <div>
        {list.map((fruit, i) => {
          return <MenuItem fruit={fruit} key={fruit} />;
        })}
      </div>
    </div>
  );
}
