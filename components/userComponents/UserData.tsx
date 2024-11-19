"use client";
import { useGetUserData } from "@/hooks/useGetUserData";
import React from "react";

const UserData = () => {
const {error,isLoading,user}=useGetUserData();

  return (
    <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center">
      {isLoading ? (
        <p className="text-gray-700 text-lg">Loading user data...</p>
      ) : error ? (
        <p className="text-red-500 text-lg">Error: {error}</p>
      ) : user ? (
        <div className="bg-white shadow-md rounded p-6 max-w-md w-full">
          <h1 className="text-2xl font-semibold mb-4">User Details</h1>
          <p className="text-gray-800">
            <strong>UserId:</strong> {user.result._id}
          </p>
          <p className="text-gray-800">
            <strong>Name:</strong> {user.result.name}
          </p>
          <p className="text-gray-800">
            <strong>Email:</strong> {user.result.email}
          </p>

          {user.result.phone && (
            <p className="text-gray-800">
              <strong>Phone:</strong> {user.result.phone}
            </p>
          )}
        </div>
      ) : (
        <p className="text-gray-700 text-lg">No user data available.</p>
      )}
    </div>
  );
};

export default UserData;
