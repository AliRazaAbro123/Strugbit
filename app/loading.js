import React from "react";

function Loading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-2xl bg-gray-100">
      {/* Spinning Loader */}
      <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Fading Text Animation */}
      <h1 className="mt-4 text-gray-700 animate-pulse" aria-live="polite">
        Loading... Please wait
      </h1>
    </div>
  );
}

export default Loading;
