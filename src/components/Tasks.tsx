import { useState } from "react";
import checked from "../assets/Checked.png";
import unchecked from "../assets/Unchecked.png";

interface ProgProp {
  isDone: boolean;
  task: string;
}

const Checkbox: React.FC<ProgProp> = ({ isDone, task }) => {
  const [status, setStatus] = useState(isDone);
  return (
    <div className="flex gap-1 items-center" onClick={() => setStatus((prev) => !prev)}>
      <img className="w-4 h-4" src={status ? checked : unchecked} alt="progress" />
      <div className={`${status ? "line-through" : ""} font-['SF Pro Text'] font-medium text-sm text-center`}>{task}</div>
    </div>
  );
};

export default Checkbox;
