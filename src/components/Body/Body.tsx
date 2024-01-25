import React, { useMemo } from "react";

import "./styles.css";
import { Column } from "./components/Column/Column";
import { Card } from "./components/Card/Card";
import { BodyTaskProps } from "../../types";

export const Body: React.FC<BodyTaskProps> = ({ tasks, changeTask }) => {
  const backlogTasks = useMemo(() => {
    return tasks.filter((task) => task.status === "TODO");
  }, [tasks]);

  const progressTasks = useMemo(() => {
    return tasks.filter((task) => task.status === "PROGRESS");
  }, [tasks]);

  const doneTasks = useMemo(() => {
    return tasks.filter((task) => task.status === "DONE");
  }, [tasks]);

  return (
    <div className="bodyWrapper">
      <div className="columnManage">
        <Column title="Backlog" count={backlogTasks.length}>
          {backlogTasks.map((task) => (
            <Card changeTask={changeTask} key={task.id} task={task} />
          ))}
        </Column>

        <Column title="in Progress" count={progressTasks.length}>
          {progressTasks.map((task) => (
            <Card changeTask={changeTask} key={task.id} task={task} />
          ))}
        </Column>

        <Column title="Done" count={doneTasks.length}>
          {doneTasks.map((task) => (
            <Card changeTask={changeTask} key={task.id} task={task} />
          ))}
        </Column>
      </div>
    </div>
  );
};
