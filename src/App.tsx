import "./App.css";
import Tasks from "./components/Tasks";
import Label from "./components/Label";
import Tag from "./components/Tag";
import Cards from "./components/Cards";
import StarterBoard from "./components/StarterBoard";

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

const tags: LabelTagProps[] = [
  { text: "tag 1", color: "white" }, // white tag
  { text: "tag 2", color: "rose" }, // rose tag
  { text: "tag 3", color: "green" }, // green tag
  { text: "tag 4", color: "lavender" }, // lavender tag
  { text: "tag 5", color: "gray" } // gray tag
];

const cardData: CardsProp[] = [
  {
    label: { text: "Not started", color: "gray" },
    heading: "Take Coco to a vet",
    tags: [{ text: "Due 4/11", color: "rose" }]
  },
  {
    label: { text: "In progress", color: "gray" },
    heading: "Taxes 😒",
    tasks: ["Accountant contract", "Request work payslips", "Cancel VAT ID"]
  }
];

function App() {
  return (
    <div>
      <Label text="labelllllllllllllllllllllllllllllllllllll" color="rose" />
      <Tag text="tagggggg" color="lavender" />
      <Tasks task="sleep" />
      <Cards heading="Card title" body="A description of a task" />
      <Cards avatar heading="Card title" body="A description of a task" />
      <Cards avatar heading="Card title" body="A description of a task" tasks={["sleep", "eat", "drink water"]} />
      <Cards avatar heading="Card title" body="A description of a task" tasks={["sleep", "eat", "drink water"]} tags={tags} />
      <Cards label={{ text: "yes", color: "rose" }} avatar heading="Card title" body="A description of a task" tasks={["sleep", "eat", "drink water"]} tags={tags} />
      <StarterBoard title="Starter Board" desc="This is starter board" cards={cardData} />
    </div>
  );
}

export default App;
