import "./App.css";
import Checkbox from "./components/Tasks";
import Label from "./components/Label";
import Tag from "./components/Tag";

function App() {
  return (
    <div>
      <Label text="labelllllllllllllllllllllllllllllllllllll" color="rose" />
      <Tag text="tagggggg" color="lavender" />
      <Checkbox isDone={false} task="sleep" />
    </div>
  );
}

export default App;
