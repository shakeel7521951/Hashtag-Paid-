const NoteableSpeakers = () => {
  return (
    <div className="bg-black h-fit w-full py-20">
      <div className="bg-[#f2f0eb] w-full h-fit rounded-[4rem] py-16">
        <p className="font-custom text-center  text-5xl md:text-6xl">
          Notable Speakers From
        </p>
        <div className="flex flex-wrap gap-8 w-[80%] mx-auto text-center items-center justify-center mt-14">
          {[
            "tiktok.avif",
            "caudile.avif",
            "paid.svg",
            "pepsi.avif",
            "snap.avif",
            "starface.avif",
            "donitos.png",
            "meta.avif",
            "uber.avif",
            "voyages.png",
            "urban-outfitters.avif",
            "verizon.avif",
            "wng.avif",
            "wella.avif",
            "youtube.avif",
            "warner.avif",
          ].map((item) => (
            <>
              <img
                src={`/src/assets/creators-marketing-summit/${item}`}
                alt=""
                className="h-[5rem] w-[8rem] object-contain leading-none"
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteableSpeakers;
