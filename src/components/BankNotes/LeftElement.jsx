import React from "react";
import Card from "../../components/BankNotes/shared/Card";
import image from "../../assets/applayout Images/left.jpg";
import image1 from "../../assets/applayout Images/left2.jpg";

const LeftElement = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* First Card */}
      <Card
        src={image}
        des="November 19, 2024 | Emmy Liederman"
        title="How Metaverse platform brings creators away from touching grass?"
      />

      {/* Second Card */}
      <Card
        src={image1}
        des="October 31, 2024 | Emmy Liederman"
        title="Rawlings taps high school athletes to bring baseball closer to drop culture"
        additional="w-full"
        imgClassName="h-48 sm:h-56 lg:h-64"
      />
    </div>
  );
};

export default LeftElement;
