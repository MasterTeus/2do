import React, { useState } from "react";

import Logo2Dou from "../../assets/logo.svg";
import PlusIcon from "../../assets/plus.svg";

import "./styles.css";
import { TaskProps } from "../../types";

export const Header: React.FC<{
  addNewTask: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}> = ({ addNewTask }) => {
  const [titleTask, setTitleTask] = useState("");

  const addtask = () => {
    addNewTask((oldTasks) => [
      { id: Math.random(), title: titleTask, status: "TODO" },
      ...oldTasks,
    ]);
    setTitleTask("");
  };

  return (
    <div className="backgroundHeader">
      <img src={Logo2Dou} />

      <div className="inputWrapper">
        <input
          value={titleTask}
          onChange={(e) => setTitleTask(e.target.value)}
          className="input"
          placeholder="Adicione uma nova tarefa"
        />
        <button onClick={addtask}>
          <p>Criar</p>
          <img src={PlusIcon} />
        </button>
      </div>
    </div>
  );
};
