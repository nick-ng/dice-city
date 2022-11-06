import { Link } from "react-router-dom";

import ItemLayout from "./item-layout.js";
import NameChanger from "./name-changer.js";
import Options from "./options/index.js";

export default function TopBar() {
  return (
    <div className="mb-1 flex justify-between">
      <NameChanger />
      <div className="grow" />
      <Options />
      <ItemLayout>
        <Link to="/">Home</Link>
      </ItemLayout>
      <ItemLayout>
        <a target="_blank" href="https://github.com/nick-ng/dice-city">
          GitHub
        </a>
      </ItemLayout>
    </div>
  );
}
