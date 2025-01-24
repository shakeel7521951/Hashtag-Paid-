import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Brands from "./pages/Brands"; 
import Creators from "./pages/Creators";
import Howits from "./components/How its work/Howits";
import Paid from "./components/How its work/Paid";

const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-7xl">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/brands", element: <Brands /> },
      { path: "/creators", element: <Creators /> },
      { path: "/how-it-works", element: <Howits /> },
      {path:"/otterbox-symmetrys-creator-approved-phone-protection",element:<Paid/>}
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
