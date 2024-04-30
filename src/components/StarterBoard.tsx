import React from "react";
import Cards from "./Cards";

interface LabelTagProps {
  text: string;
  color: string;
}

interface CardsProp {
  label?: LabelTagProps;
  avatar?: boolean;
  heading: string;
  body?: string;
  tasks?: string[];
  tags?: LabelTagProps[];
}

interface BoardProps {
  title: string;
  desc: string;
  cards: CardsProp[];
}

// const tags: LabelTagProps[] = [
//   { text: "tag 1", color: "white" }, // white tag
//   { text: "tag 2", color: "rose" }, // rose tag
//   { text: "tag 3", color: "green" }, // green tag
//   { text: "tag 4", color: "lavender" }, // lavender tag
//   { text: "tag 5", color: "gray" } // gray tag
// ];

const StarterBoard: React.FC<BoardProps> = ({ title, desc, cards = [] }) => {
  return (
    <div>
      <h1 className="font-['SF Compact Display'] text-4xl text-left font-extrabold">{title}</h1>
      <p className="font=['SF Compact Display'] text-base text-left">{desc}</p>
      <div className="bg-[#e08888] justify-between grid grid-cols-4 p-4 rounded-md">
        {cards.map((cardData, index) => (
          <Cards key={index} {...cardData} />
        ))}
      </div>
    </div>
  );
};

export default StarterBoard;
