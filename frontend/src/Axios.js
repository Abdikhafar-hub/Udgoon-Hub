import axios from "axios";

const API = axios.create({
  baseURL: "https://udgoon-hub.onrender.com/api",
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if ((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          console.error("❌ No refresh token found. Logging out...");
          handleLogout();
          return Promise.reject(error);
        }

        const response = await axios.post("https://udgoon-hub.onrender.com/api/user/refresh-token", { refreshToken });

        if (response.status === 200) {
          console.log("✅ Access token refreshed successfully.");
          localStorage.setItem("token", response.data.accessToken);
          API.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;
          return API(originalRequest); 
        }
      } catch (err) {
        console.error("❌ Refresh token failed or expired:", err);
        handleLogout();
      }
    }

    return Promise.reject(error);
  }
);


const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login"; 
};

export default API;
