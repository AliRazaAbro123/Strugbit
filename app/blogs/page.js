"use client"
import React from 'react'
import { useRouter } from "next/navigation";


// export const metadata = {
//   title: "Blogs | Strugbits Employee",
// };

const Blogs = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/"); // Redirect to the home page
  };

  return (
    <div className="blogs-container">
      <div className="popup-content">
        <h1>Page Under Maintenance</h1>
        <p>We're currently working on this page. Please check back later.</p>
        <button onClick={handleGoHome} className="home-button">
          Go Home
        </button>
      </div>
      {/* Styling for the page */}
      <style jsx>{`
        .blogs-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f5f5f5;
        }
        .popup-content {
          text-align: center;
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .popup-content h1 {
          font-size: 24px;
          color: #ff6e4e;
          margin-bottom: 10px;
        }
        .popup-content p {
          font-size: 16px;
          color: #333;
          margin-bottom: 20px;
        }
        .home-button {
          background-color: #ff6e4e;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
        }
        .home-button:hover {
          background-color: #e55a3b;
        }
      `}</style>
    </div>
  );
};

export default Blogs;
