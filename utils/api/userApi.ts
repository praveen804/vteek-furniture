import axios from "axios";

axios.defaults.withCredentials = true;
import { UserDetailsResponse } from "@/utils/types/interface";

export const fetchUser = async () => {
  try {
    const response = await axios.get<UserDetailsResponse | null>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/getUserDetails`,
      { withCredentials: true }
    );

    if (!response) {
      throw new Error("Failed to fetch user details");
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`,
      {}
    );
    if (!response) {
      throw new Error("Failed to logout");
    }
    return response.data; // Return response data (e.g., success message)
  } catch (err) {
    console.error("Logout failed:", err);
    throw new Error("Failed to logout"); // You can throw an error to be caught later if needed
  }
};
