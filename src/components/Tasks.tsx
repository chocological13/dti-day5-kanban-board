import { useState } from "react";
import checked from "../assets/Checked.png";
import unchecked from "../assets/Unchecked.png";

interface ProgProp {
  task: string;
}

const Tasks: React.FC<ProgProp> = ({ task }) => {
  const [status, setStatus] = useState(false);
  return (
    <div className="flex gap-1 items-center my-2" onClick={() => setStatus((prev) => !prev)}>
      <img className="w-4 h-4" src={status ? checked : unchecked} alt="progress" />
      <div className={`${status ? "line-through" : ""} font-['SF Pro Text'] font-medium text-sm text-center`}>{task}</div>
    </div>
  );
};

export default Tasks;
