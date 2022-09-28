import UsersAdmin from "modules/Admin/page/UsersAdmin";
import CoursesAdmin from "modules/Admin/page/CoursesAdmin";

export const privateRoutes = [
  { path: "", component: <UsersAdmin /> },
  { path: "courses", component: <CoursesAdmin /> },
];
