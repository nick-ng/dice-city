import { useState, useRef, useEffect } from "react";

import { useOptions } from "~front/hooks/options-context.js";

import ItemLayout from "./item-layout.js";

export default function NameChanger() {
  const {
    options: { playerName },
    setOptions,
  } = useOptions();

  const nameInputRef = useRef<HTMLInputElement>(null);

  const [editName, setEditName] = useState(!playerName);
  const [tempName, setTempName] = useState(playerName || "");

  useEffect(() => {
    if (!playerName) {
      setTimeout(() => {
        nameInputRef.current?.focus();
      });
    }
  }, []);

  return (
    <ItemLayout>
      {editName ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (tempName) {
              setOptions({
                playerName: tempName,
              });
              setEditName(false);
            }
          }}
        >
          <input
            className="rounded-l border border-r-0 border-gray-600 px-2 dark:border-gray-300 dark:bg-gray-600"
            ref={nameInputRef}
            type="text"
            onChange={(e) => {
              setTempName(e.target.value);
            }}
            value={tempName}
            placeholder="Enter your name"
            required
          />
          <button className="rounded-r border border-gray-600 px-2 py-0 dark:border-gray-300">
            Save
          </button>
        </form>
      ) : (
        <>
          <span className="mr-2">{playerName || ""}</span>
          <button
            className="rounded border border-gray-600 px-2 py-0 dark:border-gray-300"
            onClick={() => {
              setEditName(true);
              setTimeout(() => {
                if (nameInputRef.current) {
                  const nameInput = nameInputRef.current;
                  nameInput.focus();
                  nameInput.setSelectionRange(0, nameInput.value.length);
                }
              });
            }}
          >
            Change Name
          </button>
        </>
      )}
    </ItemLayout>
  );
}
