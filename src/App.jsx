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
import AiPrinciples from "./pages/AiPrinciples";
import Event from "./pages/Event";
import Howits from './components/How its work/Howits';
import Agencies from "./pages/Agencies";
import HelpCenter from "./pages/help/HelpCenter";
import ConnectSocialMedia from './pages/help/ConnectSocialMedia';
import OtingCompaign from "./pages/help/OptingCompaign";
import CollobratingCompaign from './pages/help/CollobratingCompaign';
import GettingPaid from "./pages/help/GettingPaid";

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
      { path: "/events", element: <Event /> },
      {path:"/how-it-works",element:<Howits />},
      {path:"/agencies",element:<Agencies />},
      {path:"/help-center",element:<HelpCenter />},
      {path:"/connect-your-social-media",element:<ConnectSocialMedia />},
      {path:'/Opting-in-to-a-Campaign',element:<OtingCompaign />},
      {path:'/collaborating-on-a-compaign',element:<CollobratingCompaign />},
      {path:'/getting-paid',element:<GettingPaid />},
      {
        path: "/creator-marketing-summit-north",
        element: <CreatorMarketing />,
      },
      {
        path: "/ai-principles",
        element: <AiPrinciples />,
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
