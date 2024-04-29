import React, { useState } from "react";
import { colorMap } from "./colorMap";

interface LabelTagProps {
  text: string;
  color?: string;
}

const Label: React.FC<LabelTagProps> = ({ text, color }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [editText, setEditText] = useState(text);

  // when click will set isClicked to true and make label into an input field
  const handleClick = () => setIsClicked(true);

  // function to handle changes made in the input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setEditText(e.target.value);
  };

  // function to quit the editting mode
  const handleBlur = () => setIsClicked(false);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleBlur();
    }
  };

  const labelClass = `flex justify-center px-3 py-1 rounded-[20px] flex-col items-center gap-2.5 inline-flex ${color ? colorMap[color] : ""}`;
  const textClass = ` text-neutral-600 text-base font-semibold font-['SF Compact Text']`;

  //   return (
  //     <div className={labelClass}>
  //       <div className={textClass}>{text}</div>
  //     </div>
  //   );

  return (
    <div className={labelClass} onClick={handleClick}>
      {isClicked ? <input type="text" className={textClass} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyDown} /> : <div className={textClass}>{editText}</div>}
    </div>
  );
};

export default Label;
