import { ReactNode } from "react";

export type TaskProps = {
  id: number;
  title: string;
  status: "TODO" | "PROGRESS" | "DONE";
};

export type CardProps = {
  task: TaskProps;
  changeTask: React.Dispatch<React.SetStateAction<TaskProps[]>>;
};

export type BodyTaskProps = {
  tasks: TaskProps[];
  changeTask: React.Dispatch<React.SetStateAction<TaskProps[]>>;
};

export type ColumnProps = {
  title: string;
  count: number;
  children?: ReactNode;
};
