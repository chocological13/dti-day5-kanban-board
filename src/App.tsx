import "./App.css";
import Tasks from "./components/Tasks";
import Label from "./components/Label";
import Tag from "./components/Tag";
import Cards from "./components/Cards";

interface LabelTagProps {
  text: string;
  color?: string;
}

const tags: LabelTagProps[] = [
  { text: "tag 1", color: "white" }, // white tag
  { text: "tag 2", color: "rose" }, // rose tag
  { text: "tag 3", color: "green" }, // green tag
  { text: "tag 4", color: "lavender" }, // lavender tag
  { text: "tag 5", color: "gray" } // gray tag
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
    </div>
  );
}

export default App;
