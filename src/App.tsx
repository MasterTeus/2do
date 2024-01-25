import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";

import { useState } from "react";
import { TaskProps } from "./types";
import { Empty } from "./components/Empty/Empty";

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  return (
    <div className="body">
      <Header addNewTask={setTasks} />
      {!tasks.length ? <Empty /> : <Body tasks={tasks} changeTask={setTasks} />}
    </div>
  );
}

export default App;
