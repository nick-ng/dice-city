import { useState } from "react";

export default function Lobby() {
  return (
    <div>
      <h2>Games</h2>
      <button
        className="button-default"
        onClick={async () => {
          const res = await fetch(`${__API_ORIGIN__}/api/game`, {
            method: "POST",
          });

          console.log("res", res);
        }}
      >
        Host Game
      </button>
    </div>
  );
}
