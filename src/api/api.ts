// src/api/serverStatusApi.ts
import axios from "axios";

const API_URL = "https://api.mcsrvstat.us/3/play.roguemc.org"; // Replace with your actual API URL

export const getServerStatus = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching server status:", error);
    throw error;
  }
};
