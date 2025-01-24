import Apledge from "../components/ai-principles/Apledge";
import Hero from "../components/ai-principles/hero";
import Principle1 from "../components/ai-principles/Principle1";
import Principle2 from "../components/ai-principles/Principle2";
import Principle3 from "../components/ai-principles/Principle3";
import Principle4 from "../components/ai-principles/Principle4";
import Principle5 from "../components/ai-principles/Principle5";
import Principle6 from "../components/ai-principles/Principle6";
import Principle7 from "../components/ai-principles/Principle7";
import Principle8 from "../components/ai-principles/Principle8";
import Section1 from "../components/ai-principles/Section1";
import Section2 from "../components/ai-principles/Section2";

const AiPrinciples = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <div className="bg-black">
        <Section2 />
      </div>
      <Principle1 />
      <Principle2 />
      <Principle3 />
      <Principle4 />
      <Principle5 />
      <Principle6 />
      <Principle7 />
      <Principle8 />
      <Apledge />
    </div>
  );
};

export default AiPrinciples;
