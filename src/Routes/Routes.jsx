import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../pages/dashboard/Dashboard";
import Students from "../pages/students/Students";
import Teachers from "../pages/teachers/Teachers";
import Events from "../pages/events/Events";
import Food from "../pages/food/Food";
import Finance from "../pages/finance/Finance";
import Users from "../pages/users/Users";
import Chat from "../pages/chat/Chat";
import Activity from "../pages/activity/Activity";
import TeacherDetails from "../pages/teacherDetails/TeacherDetails";
import StudentDetails from "../pages/studentDetails/StudentDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/students",
                element: <Students />
            },
            {
                path: '/studentDetails',
                element: <StudentDetails />
            },
            {
                path: "/teachers",
                element: <Teachers />
            },
            {
                path: '/teacherDetails',
                element: <TeacherDetails />
            },
            {
                path: "/events",
                element: <Events />
            },
            {
                path: "/food",
                element: <Food />
            },
            {
                path: "/finance",
                element: <Finance />
            },
            {
                path: "/users",
                element: <Users />
            },
            {
                path: "/chat",
                element: <Chat />
            },
            {
                path: "/activity",
                element: <Activity />
            },
        ]
    },
]);

export default router;