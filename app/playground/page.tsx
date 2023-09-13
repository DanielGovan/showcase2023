import Link from "next/link";
import React from "react";

const Playground = () => {
  return (
    <div className="flex text-white h-screen bg-gray-800 p-8">
      <Link
        href="/playground/tailwind"
        className="underline underline-offset-2"
      >
        Tailwind CSS
      </Link>
    </div>
  );
};

export default Playground;
