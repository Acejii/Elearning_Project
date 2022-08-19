import Home from "../pages/home/Home";
import User from "../pages/user/User";
import Course from "../pages/course/Course";
import UserManagement from "../pages/userManagement/UserManagement";
import CourseManagement from "../pages/courseManagement/CourseManagement";
import RegisterUserManagement from "../pages/registerUserManagement/RegisterUserManagement";

export const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/user", component: <User /> },
  { path: "/course", component: <Course /> },
];

export const privateRoutes = [
  { path: "/user/management", component: <UserManagement /> },
  { path: "/course/management", component: <CourseManagement /> },
  { path: "/register-user/management", component: <RegisterUserManagement /> },
];
