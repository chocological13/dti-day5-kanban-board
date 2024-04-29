import React from "react";
import { colorMap } from "./colorMap";

interface LabelTagProps {
  text: string;
  color?: string;
}

const Label: React.FC<LabelTagProps> = ({ text, color }) => {
  const labelClass = `flex justify-center px-3 py-1 rounded-[20px] flex-col items-center gap-2.5 inline-flex ${color ? colorMap[color] : ""}`;
  const textClass = ` text-neutral-600 text-base font-semibold font-['SF Pro Text']`;

  return (
    <div className={labelClass}>
      <div className={textClass}>{text}</div>
    </div>
  );
};

export default Label;
