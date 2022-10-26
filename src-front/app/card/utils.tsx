import React, { Fragment } from "react";

export const bgColours = {
  blue: "bg-blue-600",
  green: "bg-lime-600",
  red: "bg-rose-600",
  purple: "bg-purple-600",
};

export const getTag = (tag: string) => {
  switch (tag) {
    case "major":
      return <span>🏛️</span>;
    case "cup":
      return <span>☕</span>;
    case "bread":
      return <span>🍞</span>;
    case "wheat":
      return <span>🌾</span>;
    case "cow":
      return <span>🐄</span>;
    case "cog":
      return <span>⚙️</span>;
    case "factory":
      return <span>🏭</span>;
    case "fruit":
      return <span>🍎</span>;
  }
};

export const replaceTags = (s: string) => {
  return (
    <>
      {s.split("%%").map((subStr, i) => {
        const [tag, rest] = subStr.split("%");
        if (!rest) {
          return <Fragment key={`${s}-${i}`}>{tag}</Fragment>;
        }

        return (
          <Fragment key={`${s}-${i}`}>
            {getTag(tag)}
            {rest}
          </Fragment>
        );
      })}
    </>
  );
};
