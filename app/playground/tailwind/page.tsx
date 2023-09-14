import React from "react";

const TailwindPlayground = () => {
  return (
    <div className="flex text-gray-100 h-screen">
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center"
          >
            {i}
          </div>
        ))}
      </div>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className=" px-3 h-12 flex items-center shadow-md">
          Tailwind CSS
        </div>
        <div className="text-gray-300 p-3 flex-1 overflow-y-scroll space-y-2">
          <p className="text-white">channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <div key={i}>Channel {i}</div>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="p-3 shadow-md">General</div>
        <div className="p-3 flex-1 space-y-4 overflow-y-scroll">
          {[...Array(40)].map((_, i) => (
            <div key={i}>
              Message {i} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Laboriosam quisquam possimus labore provident corrupti
              adipisci ea est molestias, nostrum fuga?
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TailwindPlayground;
