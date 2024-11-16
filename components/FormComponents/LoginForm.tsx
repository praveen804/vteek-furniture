/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastError, ToastSuccess } from "@/utils/ReactToastify";

axios.defaults.withCredentials = true;

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        { email, password }
      );
      const data = response.data;

      if (data.success) {
        ToastSuccess("Login successful");
        setEmail("");
        setPassword("");
        router.push("/user");
      } else {
        setError("Login failed. Please check your credentials.");
        ToastError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      ToastError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-indigo-600 text-white py-2 rounded-lg transition duration-200 ${
            loading ? "cursor-not-allowed opacity-50" : "hover:bg-indigo-700"
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Register Link */}
      <p className="text-center text-gray-600 mt-4">
        Don&#39;t have an account?{" "}
        <Link href="/register">
          <span className="text-indigo-600 hover:underline">Register here</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
