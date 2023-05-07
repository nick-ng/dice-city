import { useState } from "react";

import { getName } from "../../utils/name-generator.js";

import Lobby from "./lobby.js";

export default function Home() {
  const [name, setName] = useState(getName(Date.now().toString()));

  return (
    <div>
      <h1>Dice City</h1>
      <p>Based on Machi Koro</p>
      <Lobby />
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
