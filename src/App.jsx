import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Brands from "./pages/Brands";
import Creators from "./pages/Creators";
import Education from "./pages/Education";
import CreatorMarketing from "./pages/CreatorMarketing";
import MeetTheCreators from "./pages/MeetTheCreators";
import Event from './pages/Event';

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
      { path: "/meet-the-creators", element: <MeetTheCreators /> },
      { path: "/education", element: <Education /> },
      {path:"/events", element:<Event />},
      {
        path: "/creator-marketing-summit-north",
        element: <CreatorMarketing />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
