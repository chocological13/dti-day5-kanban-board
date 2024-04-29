import React from "react";

interface BoardProps {
  title: string;
  desc: string;
}

const StarterBoard: React.FC<BoardProps> = ({ title, desc }) => {
  return (
    <div>
      <h1 className="font-['SF Compact Display'] text-4xl text-left font-extrabold">{title}</h1>
      <p className="font=['SF Compact Display'] text-base text-left">{desc}</p>
    </div>
  );
};

export default StarterBoard;
