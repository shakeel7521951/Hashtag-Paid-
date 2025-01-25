import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Brands from "./pages/Brands";
import Creators from "./pages/Creators";
import Education from "./pages/Education";
import CreatorMarketing from "./pages/CreatorMarketing";
import MeetTheCreators from "./pages/MeetTheCreators";
import AiPrinciples from "./pages/AiPrinciples";
import Agencies from "./pages/Agencies";
import Event from "./pages/Event";
import Howits from "./components/How its work/Howits";
import HelpCenter from "./pages/help/HelpCenter";
import ConnectSocialMedia from "./pages/help/ConnectSocialMedia";
import OtingCompaign from "./pages/help/OptingCompaign";
import CollobratingCompaign from "./pages/help/CollobratingCompaign";
import GettingPaid from "./pages/help/GettingPaid";
import CreateAccount from "./pages/CreateAccount";
import Podcast from "./pages/Podcast";
import CreatorMarketingSmit from './pages/CreatorMarketingSmit';
import BankNotes from './pages/BankNotes';

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
      {
        path: "/creator-marketing-summit",
        element: <CreatorMarketingSmit />,
      },
      { path: "/education", element: <Education /> },
      { path: "/events", element: <Event /> },
      { path: "/how-it-works", element: <Howits /> },
      { path: "/agencies", element: <Agencies /> },
      {path: "/bank-notes",element:<BankNotes />},
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
  { path: "/help-center", element: <HelpCenter /> },
  { path: "/connect-your-social-media", element: <ConnectSocialMedia /> },
  { path: "/Opting-in-to-a-Campaign", element: <OtingCompaign /> },
  { path: "/collaborating-on-a-compaign", element: <CollobratingCompaign /> },
  { path: "/getting-paid", element: <GettingPaid /> },
  { path: '/pod-cast',element:<Podcast />},
  { path: "/login", element: <Login /> },
  { path: "/create-account", element: <CreateAccount /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
