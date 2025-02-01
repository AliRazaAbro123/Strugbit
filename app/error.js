"use client";
import React from "react";

function Error({ error, reset }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center bg-red-100 text-red-700">
      <h1 className="text-3xl font-semibold">Oops! Something went wrong.</h1>
      <p className="mt-2 text-lg">Error: {error?.message || "Unknown error occurred."}</p>
      <button
        onClick={reset} // Reset function provided by Next.js to retry
        className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}

export default Error;