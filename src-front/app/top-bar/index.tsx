import React from "react";

import NameChanger from "./name-changer";

export default function TopBar() {
  return (
    <div className="flex justify-between">
      <NameChanger />
      <div className="grow" />
      <div>
        <a target="_blank" href="https://github.com/nick-ng/dice-city">
          GitHub
        </a>
      </div>
    </div>
  );
}
