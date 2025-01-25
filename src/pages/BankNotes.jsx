import React from "react";

// import AppLayout from "./components/Layouts/AppLayout";
import AppLayout from '../components/BankNotes/AppLayout';
// import MarketingSection from "./Pages/MarketingSection";
import MarketingSection from '../components/BankNotes/BankNotes/MarketingSection';
// import SocialPlatform from "./Pages/SocialPlatform";
import SocialPlatform from '../components/BankNotes/BankNotes/SocialPlatform';
// import Creators from "./Pages/Creators";
import Creators from '../components/BankNotes/BankNotes/Creators';
// import NewsLetter from "./Pages/NewsLetter";
import NewsLetter from '../components/BankNotes/BankNotes/NewsLetter';

const App = () => {
  return (
    <>
      <AppLayout />
      <MarketingSection />
      <SocialPlatform />
      <Creators />
      <NewsLetter />
    </>
  );
};

export default App;
