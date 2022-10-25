import React from "react";

export default function Loading() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="animate-spin-loading rounded-full border p-4">
        Loading
      </div>
    </div>
  );
}
