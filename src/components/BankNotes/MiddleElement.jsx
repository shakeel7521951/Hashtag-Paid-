import React from "react";
import Card from "../BankNotes/shared/Card";

import image from "../../assets/applayout Images/middle.jpg";

const MiddleElement = ({ className }) => {
  return (
    <div className={className}>
      <Card
        src={image}
        className="w-full sm:h-28 md:h-96 lg:h-[28rem] object-cover rounded-t-lg"
        des="November 14, 2024 | Emmy Liederman"
        title="Creators help McDonald’s turn promos and pop-ups into headlines"
        subheading="The brand PR strategy blends creator and media partnerships"
        textClassName="text-center sm:text-left"
      />
    </div>
  );
};

export default MiddleElement;
