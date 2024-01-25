import React from "react";

import "./styles.css";
import { ColumnProps } from "../../../../types";

export const Column: React.FC<ColumnProps> = ({ title, count, children }) => {
  return (
    <div className="columnWrapper">
      <div className="columnName">
        <p>{title}</p>
        <div className="dot">
          <p>{count}</p>
        </div>
      </div>

      <div className="columnShape">{children}</div>
    </div>
  );
};
