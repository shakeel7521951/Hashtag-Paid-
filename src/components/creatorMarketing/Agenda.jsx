import React from "react";

const Agenda = () => {
  return (
    <div className="mt-7 rounded-[45px] flex flex-col sm:flex-row w-full px-3 sm:px-10 py-20">
      <div className="w-full sm:w-[40%] sm:sticky top-24 mx-auto text-white">
        <h1 className="font-custom text-3xl sm:text-5xl top-20 sm:sticky">Agenda</h1>
        <p className="font-customLight top-36 sm:sticky my-4">
          All day agenda for Creator Marketing Summit North, 2024.
        </p>
        <button className="bg-[#DDE041] rounded-full px-3 py-2 mb-4 top-52 sm:sticky text-black">
          *Agenda is subject to change
        </button>
      </div>
      <div className="w-full sm:w-[80%] flex flex-row flex-wrap gap-5">

        <div className="w-full bg-[#DDE041] p-8 rounded-2xl">
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
            Check in + Breakfast
          </h1>
          <p className="font-customLight text-xl sm:text-3xl">
            9:00am - 10:00am
          </p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
            <h1 className="font-customLight">Session 1</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
          Proof that creator marketing moves business
          </h1>
          <p className="font-customLight text-md sm:text-xl">
          While creator marketing has proved itself as a meaningful strategy, not all brands have embraced its full potential. This panel will delve into exactly how brands can justify a greater investment in creator marketing, and the metrics that make a pivot into a newer industry feel less like a gamble and more like an obvious choice.
          </p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
            <h1 className="font-customLight">Session 2</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
          How creator content is giving every marketing touch point a makeover
          </h1>
          <p className="font-customLight text-md sm:text-xl">
          As more brands look to repurpose creator content for campaigns outside of social platforms, it is clear that creator marketing is no longer a siloed strategy. How are marketers incorporating internet culture and creator content styles throughout their ad campaigns? In this session, panelists will discuss the impact of internet culture and creator trends on advertising strategy, and how marketers can work with—rather than compete against—a growing population of digital creators.
          </p>
        </div>


        <div className="w-full bg-white p-8 rounded-2xl">
            <h1 className="font-customLight">Session 3</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
          Creator economy and the law: How to protect your brand campaign
          </h1>
          <p className="font-customLight text-md sm:text-xl">
          This session will offer guidance on legal considerations such as disclosure requirements, copyright laws, and compliance with advertising standards and regulations. Panelists will also outline strategies for handling potential crises or negative publicity involving influencers, including proactive monitoring and response tactics.
          </p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
            <h1 className="font-customLight">Session 4</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
          Meet the Creator
          </h1>
          <p className="font-customLight text-md sm:text-xl">
          The term “creator” is intentionally ambiguous to encompass the diversity of talent with a digital following, but their distinct backgrounds make one-on-one conversations and features invaluable. In this session, we spotlight a creator’s career path and highlights, as well as best practices for both their peers and brand partners.
          </p>
        </div>

        <div className="w-full bg-[#DDE041] p-8 rounded-2xl">
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
          Lunch + Puppy Yoga with Puppy Sphere
          </h1>
          <p className="font-customLight text-xl sm:text-3xl">
          12:00pm - 1:00pm
          </p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
            <h1 className="font-customLight">Session 5</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
          Beyond campaign diversity: How marketers are approaching DEI with deeper intention
          </h1>
          <p className="font-customLight text-md sm:text-xl">
          Diverse creators do more for marketers than just place their product in front of new consumers—when given the chance, they also give brands the opportunity to create culturally relevant messaging that actually resonates. This session will highlight how brands can develop a deeper understanding of culture by listening to and celebrating diverse voices beyond just tapping into their likeness for social campaigns.
          </p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
            <h1 className="font-customLight">Session 6</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
          Snapchat Keynote
          </h1>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
            <h1 className="font-customLight">Session 5</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
          Meet the Creator
          </h1>
          <p className="font-customLight text-md sm:text-xl">
          The term “creator” is intentionally ambiguous to encompass the diversity of talent with a digital following, but their distinct backgrounds make one-on-one conversations and features invaluable. In this session, we spotlight a creator’s career path and highlights, as well as best practices for both their peers and brand partners.
          </p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
            <h1 className="font-customLight">Session 8</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
          The creator contributions that AI could never replace
          </h1>
          <p className="font-customLight text-md sm:text-xl">
          While the rise of AI in creator marketing has fostered innovation and opportunity, with the wrong use cases, it can also challenge the industry's authenticity. Instead of fearing the implications of AI, creators and brands must instead take advantage of this technology while honing in on the skills that AI can't replicate. This session will offer guidance on framing and implementing AI in creator marketing as a crucial tool, instead of fearing it an industry threat.
          </p>
        </div>

        <div className="w-full bg-[#DDE041] p-8 rounded-2xl">
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
          Creators + Cocktails
          </h1>
          <p className="font-customLight text-xl sm:text-3xl">
          Join us as we bring together Toronto's top marketers & creators for a night of cocktails, connections and collaborations!
          </p>
        </div>

      </div>
    </div>
  );
};

export default Agenda;
