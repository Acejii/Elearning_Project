import axiosClient from "./axiosClient";

const authAPI = {
  login: (user) => {
    return axiosClient.post("QuanLyNguoiDung/DangNhap", user);
  },

  register: (user) => {
    return axiosClient.post("QuanLyNguoiDung/DangKy", user);
  },
};

export default authAPI;
