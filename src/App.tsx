import { createBrowserRouter, RouterProvider } from "react-router";
import NotFoundPage from "@/pages/NotFoundPage";
import { AppLayout } from "@/layouts/AppLayout";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/login", element: <h1>Login</h1> },
    ],
  },
]);

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
