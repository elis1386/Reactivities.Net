import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import HomePage from "../features/activities/home/HomePage";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../features/activities/form/ActivityForm";
import ActivityDetailPage from "../features/activities/details/ActivityDetailPage";
import Notfound from "../features/activities/errors/Notfound";
import Errors from "../features/activities/errors/Errors";
import ServerError from "../features/activities/errors/ServerError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "activities", element: <ActivityDashboard /> },
      { path: "activities/:id", element: <ActivityDetailPage /> },
      { path: "createActivity", element: <ActivityForm key={"create"} /> },
      { path: "edit/:id", element: <ActivityForm /> },
      { path: "errors", element: <Errors /> },
      { path: "not-found", element: <Notfound /> },
      { path: "server-error", element: <ServerError /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
