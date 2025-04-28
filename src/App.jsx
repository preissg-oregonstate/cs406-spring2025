import "./index.css";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import MainLayout from "./layouts/MainLayout";
import GamePage from "./pages/GamePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        // Default route for ("/")
        index: true,
        element: <HomePage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
      {
        path: "leaderboards",
        element: <LeaderboardPage />,
      },
      {
        path: "/games/:gameName",
        element: <GamePage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
