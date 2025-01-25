import Agenda from "../components/creator-marketing-summit/Agenda";
import BestCreators from "../components/creator-marketing-summit/BestCreators";
import ExcellentWindow from "../components/creator-marketing-summit/ExcellentWindow";
import Hero from "../components/creator-marketing-summit/Hero";
import NoteableSpeakers from "../components/creator-marketing-summit/NoteableSpeakers";
import Partner from "../components/creator-marketing-summit/Partner";
import Registeration from "../components/creator-marketing-summit/Registeration";
import ImageSlider from "../components/How its work/ImageSlider";

const CreatorMarketingSmit = () => {
  return (
    <div className="bg-black pb-20">
      <Hero />
      <Partner />
      <BestCreators />
      <NoteableSpeakers />
      <ExcellentWindow />
      <Agenda />
      <ImageSlider />
      <Registeration />
    </div>
  );
};

export default CreatorMarketingSmit;
