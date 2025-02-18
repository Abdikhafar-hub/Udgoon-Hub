import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
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

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("http://localhost:5000/api/user/refresh-token", { refreshToken });

        if (response.status === 200) {
          localStorage.setItem("token", response.data.accessToken);
          axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;
          return API(originalRequest); 
        }
      } catch (err) {
        console.error("Refresh token failed:", err);
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login"; 
      }
    }
    return Promise.reject(error);
  }
);

export default API;
