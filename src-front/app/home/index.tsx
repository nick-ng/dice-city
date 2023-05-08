import { useState } from "react";

import { getName } from "../../utils/name-generator.js";

import GameBrowser from "./game-browser.js";

export default function Home() {
  const [name, setName] = useState(getName(Date.now().toString()));

  return (
    <div>
      <h1>Dice City</h1>
      <p>Based on Machi Koro</p>
      <GameBrowser />
      <pre>{name}</pre>
      <button
        className="button-default"
        onClick={() => {
          setName(getName(Date.now().toString()));
        }}
      >
        New Name
      </button>
    </div>
  );
}
