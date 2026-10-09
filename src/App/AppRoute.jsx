import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import DashBoardPage from "../Features/DashBoard/UI/Pages/DashBoardPage";
import DetailPage from "../Features/DashBoard/UI/Pages/DetailPage";
import QuestionPage from "../Features/DashBoard/UI/Pages/QuestionPage";
import ProgressPage from "../Features/DashBoard/UI/Pages/ProgressPage";
const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <DashBoardPage />,
        },

        {
          path: "detail",
          element: <DetailPage />,
        },


          {
          path: "question",
          element: <QuestionPage />,

        },

          {
          path: "progress",
          element: <ProgressPage />,
        },

      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoute;
