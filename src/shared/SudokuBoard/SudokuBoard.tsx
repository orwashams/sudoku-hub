import React, { useState } from "react";
import { Cell } from "./components";

const ROWS = 9;
const COLS = 9;

const SubGrid = () => {
  return (
    <section className="grid grid-cols-3 border-2 border-black">
      <Cell />

      <Cell />

      <Cell />

      <Cell />

      <Cell />

      <Cell />

      <Cell />

      <Cell />

      <Cell />
    </section>
  );
};

const SudokuBoard: React.FC = () => {
  const [board, setBoard] = useState<Array<Array<number>>>([[]]);

  const renderSubGrids = () => {
    const subGrids = [];
    for (let i = 0; i < ROWS; i++) {
      subGrids.push(<SubGrid key={i} />);
    }
    return subGrids;
  };

  return (
    <div>
      <section className="grid aspect-square w-[50rem] grid-cols-3 rounded-md border-2 border-black">
        {renderSubGrids()}
      </section>
    </div>
  );
};

export default SudokuBoard;
