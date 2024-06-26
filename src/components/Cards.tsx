import React from "react";
import Tasks from "./Tasks";
import Tag from "./Tag";
import Avatar from "../assets/Avatar.png";
import Label from "./Label";

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

const Cards: React.FC<CardsProp> = ({ label, heading, body, tasks, avatar, tags }) => {
  const labelTop = label ? (
    <div className="flex items-center mb-4">
      <Label text={label.text} color={label.color} />
    </div>
  ) : null;
  const tasksList = tasks?.map((task) => <Tasks key={task} task={task} />);
  const avatarImg = <img src={Avatar} alt="avatar" />;
  const cardTags = tags?.map((tag) => <Tag key={tag?.text} text={tag?.text} color={tag?.color} />);

  return (
    <div className="grid-cols-4 mr-2">
      <div>
        {labelTop}
        <div className="block rounded-lg bg-[#FAF9F6] p-6 drop-shadow-md text-left max-w-96 my-5">
          {avatar && <div>{avatarImg}</div>}
          <h2 className="font-['SF Compact Text'] text-base font-semibold my-2">{heading}</h2>
          {body && <p className="font-['SF Compact Text'] text-sm font-normal text-[#5A5A65]">{body}</p>}
          {tasksList && <div className="mt-4">{tasksList}</div>}
          {cardTags && <div className="mt-4">{cardTags}</div>}
        </div>
      </div>
    </div>
  );
};

export default Cards;
