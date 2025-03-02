import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from './Component/DashboardLayout';
const AppRouter = () => {
    const routing = createBrowserRouter([
        {
          path: "/",
          element: <DashboardLayout />,
        }
    ]);
  return (
    <><RouterProvider router={routing} /></>
  )
}

export default AppRouter