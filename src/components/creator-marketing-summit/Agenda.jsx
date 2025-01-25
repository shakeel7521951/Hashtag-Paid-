import React from "react";

const Agenda = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full px-3 sm:px-10 py-20 bg-black">
      <div className="w-full sm:w-[40%] sm:sticky top-24 mx-auto text-white">
        <h1 className="font-custom text-3xl sm:text-5xl sm:sticky top-20">
          Agenda
        </h1>
        <p className="font-customLight my-4  sm:sticky top-36">
          Event 8:30am-4:30pm
        </p>
        <p className="rounded-full w-[22rem] sm:sticky top-44 max-sm:w-full">
          In-person agenda for Creator Marketing Summit, 2024.
        </p>
      </div>
      <div className="w-full sm:w-[80%] flex flex-row flex-wrap gap-5">
        <div className="w-full bg-[#DDE041] p-8 rounded-2xl">
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
            Check in + Breakfast
          </h1>
          <p className="font-customLight text-xl sm:text-3xl">
            8:00am - 9:30am
          </p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
          <h1 className="font-customLight">Session 1</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
            The New Age of Influence
          </h1>
          <p className="font-customLight text-md sm:text-xl">
            2024 is the year creators took over, reshaping culture, commerce,
            and technology. In this fast-paced session, we’ll dive into how
            creators aren't just shaping trends—they're building the future.
            We’ll uncover how creators are driving platform innovation,
            revolutionizing industries like media and politics, and becoming the
            go-to voices for audiences worldwide. From AI-powered content and
            emerging social series to seamless social commerce and the rise of
            fully AI-generated influencers, this is the new era of influence.
          </p>
          <p className="mt-5">Speaker:</p>
          <p>Jacqueline Tsekouras</p>
          <img
            src="/src/assets/creators-marketing-summit/paid.svg"
            alt=""
            className="h-8 mt-6"
          />
          <p className="mt-4 text-[2rem]">9:40 - 9:55am</p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
          <h1 className="font-customLight">Session 2</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
            How creator content is giving every marketing touch point a makeover
          </h1>
          <p className="font-customLight text-md sm:text-xl">
            As more brands look to repurpose creator content for campaigns
            outside of social platforms, it is clear that creator marketing is
            no longer a siloed strategy. How are marketers incorporating
            internet culture and creator content styles throughout their ad
            campaigns? In this session, panelists will discuss the impact of
            internet culture and creator trends on advertising strategy, and how
            marketers can work with—rather than compete against—a growing
            population of digital creators.
          </p>
          <p className="mt-5">Speaker:</p>
          <p>Lori Pantel, Elayane Merriwether, Ed Romaine</p>
          <div className="flex items-center gap-9 max-sm:flex-wrap">
            <img
              src="/src/assets/creators-marketing-summit/wella.avif"
              alt=""
              className="h-14 mt-6"
            />
            <img
              src="/src/assets/creators-marketing-summit/voyages.png"
              alt=""
              className="h-14 mt-6"
            />
            <img
              src="/src/assets/creators-marketing-summit/paid.svg"
              alt=""
              className="h-8 mt-6"
            />
          </div>
          <p className="mt-4 text-[2rem]">10:00 - 10:20am</p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
          <h1 className="font-customLight">Session 3</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
            Turo: How Turo is tapping creators to build a bolder brand
          </h1>
          <p className="font-customLight text-md sm:text-xl">
            As car sharing marketplace Turo works to build a bolder reputation,
            it has recognized that some of the most memorable campaigns stem
            from collaborations with creators. Hear from Matthew Kerbel (MK),
            global brand strategy director at Turo, and #paid’s Courtney Sands
            on the power of endorsements from the right creators in building a
            standout brand.
          </p>
          <p className="mt-5">Speaker:</p>
          <p>Matthew Kerbel, Courtney Sands</p>
          <div className="flex items-center gap-9 max-sm:flex-wrap">
            <img
              src="/src/assets/creators-marketing-summit/wella.avif"
              alt=""
              className="h-14 mt-6"
            />
            <img
              src="/src/assets/creators-marketing-summit/paid.svg"
              alt=""
              className="h-8 mt-6"
            />
          </div>
          <p className="mt-4 text-[2rem]">10:20 - 10:40am</p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
          <h1 className="font-customLight">Session 4</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
            What do creators and their communities think of your brand?
          </h1>
          <p className="font-customLight text-md sm:text-xl">
            As more brands look to repurpose creator content for campaigns
            outside of social platforms, it is clear that creator marketing is
            no longer a siloed strategy. How are marketers incorporating
            internet culture and creator content styles throughout their ad
            campaigns? In this session, panelists will discuss the impact of
            internet culture and creator trends on advertising strategy, and how
            marketers can work with—rather than compete against—a growing
            population of digital creators.
          </p>
          <p className="mt-5">Speaker:</p>
          <p>Jazmin Griffith, Sarah Thomas, Chris Allen, Preeya Khanna</p>
          <div className="flex items-center gap-9 max-sm:flex-wrap">
            <img
              src="/src/assets/creators-marketing-summit/wella.avif"
              alt=""
              className="h-14 mt-6"
            />
            <img
              src="/src/assets/creators-marketing-summit/voyages.png"
              alt=""
              className="h-14 mt-6"
            />
            <img
              src="/src/assets/creators-marketing-summit/paid.svg"
              alt=""
              className="h-8 mt-6"
            />
          </div>
          <p className="mt-4 text-[2rem]">10:20 - 10:40am</p>
        </div>

        <div className="w-full bg-[#DDE041] p-8 rounded-2xl">
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">AM Break</h1>
          <img
            src="/src/assets/creators-marketing-summit/coffe.avif"
            alt=""
            className="h-16 my-5"
          />

          <p className="font-customLight text-xl sm:text-3xl">
            11:05 - 11:30am
          </p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
          <h1 className="font-customLight">Session 5</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
            Gen Z: More than a shiny demographic: How brands can truly align
            with youth culture
          </h1>
          <p className="font-customLight text-md sm:text-xl">
            From niche digital communities to the value of heritage over hype,
            join Gen Z analyst Quentin Humphrey as he breaks down the priorities
            and values of the generation every marketer wants to attract.
          </p>
          <p className="mt-5">Speaker:</p>
          <p>Quentin Humphrey</p>
          <div className="flex items-center gap-9 max-sm:flex-wrap">
            <img
              src="/src/assets/creators-marketing-summit/WNG.avif"
              alt=""
              className="h-8 mt-6"
            />
          </div>
          <p className="mt-4 text-[2rem]">11:30 - 11:50am</p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
          <h1 className="font-customLight">Session 6</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
            Snapchat: Brand storytelling with Snapchat's essential characters
          </h1>
          <p className="font-customLight text-md sm:text-xl">
            Snapchat is the OG storytelling platform. Today, Creators still
            count on Snapchat to share the 'behind the scenes' and most
            relatable moments in their everyday lives -- and the Snapchat
            community feels more connected to Creators than ever before, looking
            to creators for inspo, product recommendations, and everyday
            musings. Learn more about why Snapchat is a destination for Creators
            and marketers who want to connect with audiences in meaningful ways,
            and how Creators and brands are collaborating to achieve success on
            the platform.
          </p>
          <p className="mt-5">Speaker:</p>
          <p>Noah Wieseneck</p>
          <div className="flex items-center gap-9 max-sm:flex-wrap">
            <img
              src="/src/assets/creators-marketing-summit/snap.avif"
              alt=""
              className="h-8 mt-6"
            />
          </div>
          <p className="mt-4 text-[2rem]">11:50 - 12:10am</p>
        </div>
        <div className="w-full bg-[#DDE041] p-8 rounded-2xl">
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">Lunch</h1>
          <div className="flex items-center gap-9 max-sm:flex-wrap">
            <img
              src="/src/assets/creators-marketing-summit/snap.avif"
              alt=""
              className="h-8 mt-6"
            />
            <img
              src="/src/assets/creators-marketing-summit/WNG.avif"
              alt=""
              className="h-8 mt-6"
            />
          </div>
          <p className="mt-4 text-[2rem]">12:10 - 1:30pm</p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
          <h1 className="font-customLight">Session 7</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
            How can creators and highly regulated industries coexist?
          </h1>
          <p className="font-customLight text-md sm:text-xl">
            As creator marketing expands to encompass industries from finance to
            healthcare, brands must balance engaging outreach with regulation.
            From promoting cold and flu remedies to investment accounts, learn
            how marketers can create memorable creator content while abiding by
            industry guidelines.
          </p>
          <p className="mt-5">Speaker:</p>
          <p>Eric Yarbough, Tristan Schukraft , Vinnie Butera</p>
          <div className="flex items-center gap-9 max-sm:flex-wrap">
            <img
              src="/src/assets/creators-marketing-summit/snap.avif"
              alt=""
              className="h-8 mt-6"
            />
          </div>
          <p className="mt-4 text-[2rem]">1:30 - 1:55pm</p>
        </div>

        <div className="w-full bg-white p-8 rounded-2xl">
          <h1 className="font-customLight">Session 8</h1>
          <h1 className="text-3xl sm:text-4xl mb-4 font-custom">
            The creator contributions that AI could never replace
          </h1>
          <p className="font-customLight text-md sm:text-xl">
            While the rise of AI in creator marketing has fostered innovation
            and opportunity, with the wrong use cases, it can also challenge the
            industry's authenticity. Instead of fearing the implications of AI,
            creators and brands must instead take advantage of this technology
            while honing in on the skills that AI can't replicate. This session
            will offer guidance on framing and implementing AI in creator
            marketing as a crucial tool, instead of fearing it an industry
            threat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
