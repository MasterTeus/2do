import React from "react";

import file from "../../assets/file.svg";

import "./styles.css";

export const Empty: React.FC = () => {
  return (
    <div className="empty">
      <img src={file} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
