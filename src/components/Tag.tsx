import React from "react";
import { colorMap } from "./colormap";

interface LabelTagProps {
  text: string;
  color: string;
}

const Tag: React.FC<LabelTagProps> = ({ text, color }) => {
  return (
    <div className={`${color && colorMap[color]} flex-auto rounded py-1 px-2.5 inline-flex justify-center mr-1`}>
      <div className="font-['SF Compact Text'] text-sm font-medium text-center">{text}</div>
    </div>
  );
};

export default Tag;
