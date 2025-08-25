import { axiosInstance } from "./axios";
import Cookies from "js-cookie";

export const signup = async (signupData) => {
  try {
    const response = await axiosInstance.post("/auth/signup", signupData);
    const { token } = response.data;
    Cookies.set("authToken", token, {
      expires: 7,
      secure: true,
      sameSite: "Strict",
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const login = async (loginData) => {
  try {
    const response = await axiosInstance.post("/auth/login", loginData);
    const { token } = response.data;
    Cookies.set("authToken", token, {
      expires: 7,
      secure: true,
      sameSite: "Strict",
    });
    return response.data;

    // Navigate to another page or update state
  } catch (error) {
    return error;
  }
};
export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  Cookies.remove("authToken");
  return response.data;
};

export const getAuthUser = async () => {
  try {
    // Axios will automatically send the cookie with this request
    const response = await axiosInstance.get("/auth/me");
    return response.data;
  } catch (error) {
    console.log("Error in getAuthUser:", error);
    return error;
  }
};

export const completeOnboarding = async (userData) => {
  const response = await axiosInstance.post("/auth/onboarding", userData);
  return response.data;
};

export async function getUserFriends() {
  const response = await axiosInstance.get("/users/friends");
  return response.data;
}

export async function getRecommendedUsers() {
  const response = await axiosInstance.get("/users");
  return response.data;
}

export async function getOutgoingFriendReqs() {
  const response = await axiosInstance.get("/users/outgoing-friend-requests");
  return response.data;
}

export async function sendFriendRequest(userId) {
  const response = await axiosInstance.post(`/users/friend-request/${userId}`);
  return response.data;
}

export async function getFriendRequests() {
  const response = await axiosInstance.get("/users/friend-requests");
  return response.data;
}

export async function acceptFriendRequest(requestId) {
  const response = await axiosInstance.put(
    `/users/friend-request/${requestId}/accept`
  );
  return response.data;
}

export async function getStreamToken() {
  const response = await axiosInstance.get("/chat/token");
  return response.data;
}
