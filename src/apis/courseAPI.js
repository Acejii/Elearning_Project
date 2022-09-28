import axiosClient from "./axiosClient";

const courseAPI = {
  getCategory: () => {
    return axiosClient.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },

  getCourses: (courseName) => {
    return axiosClient.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
      params: {
        maNhom: "GP01",
        tenKhoaHoc: courseName,
      },
    });
  },

  getCoursesByCategory: (value) => {
    return axiosClient.get("QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
      params: {
        maDanhMuc: value,
        MaNhom: "GP01",
      },
    });
  },

  registerCourse: (value) => {
    return axiosClient.post("QuanLyKhoaHoc/DangKyKhoaHoc", value);
  },
};

export default courseAPI;
