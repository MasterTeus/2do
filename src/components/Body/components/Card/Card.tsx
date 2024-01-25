import React from "react";

import stash from "../../../../assets/stash.svg";
import next from "../../../../assets/next.svg";
import previous from "../../../../assets/previous.svg";
import done from "../../../../assets/done.svg";

import "./styles.css";
import { CardProps } from "../../../../types";

export const Card: React.FC<CardProps> = ({ task, changeTask }) => {
  const moveTaskBetweenColumn = (type: "PREVIOUS" | "NEXT") => {
    const isTodo = task.status === "TODO";
    const isDone = task.status === "DONE";

    const statusNext = isTodo ? "PROGRESS" : "DONE";
    const statusPrevious = isDone ? "PROGRESS" : "TODO";

    const stutusTask = type === "NEXT" ? statusNext : statusPrevious;

    changeTask((oldTasks) => {
      const taskOutCurrentTask = oldTasks.filter((t) => t.id !== task.id);

      return [
        {
          ...task,
          status: stutusTask,
        },
        ...taskOutCurrentTask,
      ];
    });
  };

  const dropTask = () => {
    changeTask((oldTasks) => {
      const taskOutCurrentTask = oldTasks.filter((t) => t.id !== task.id);

      return [...taskOutCurrentTask];
    });
  };

  return (
    <div
      className="card"
      style={{
        borderColor:
          task.status === "DONE" ? "var(--Purple)" : "var(--Gray-400)",
      }}
    >
      <p className="title">{task.title}</p>

      <div className="actions">
        {task.status === "DONE" && (
          <button className="btnCheck">
            <img src={done} height={16} />
            <p>Concluída</p>
          </button>
        )}

        {task.status !== "TODO" && (
          <button
            onClick={() => moveTaskBetweenColumn("PREVIOUS")}
            className="btnPrevious"
          >
            <img src={previous} height={14} />
            <p>{task.status === "DONE" ? "Progress" : "Backlog"}</p>
          </button>
        )}

        {task.status !== "DONE" && (
          <button
            onClick={() => moveTaskBetweenColumn("NEXT")}
            className="btnNext"
          >
            <img src={next} height={14} />
            <p>{task.status === "TODO" ? "Progress" : "Done"}</p>
          </button>
        )}

        <button onClick={dropTask} className="btnDelete">
          <img src={stash} height={14} />
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
};
