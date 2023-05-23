import React, { useState } from "react";
import { SubGrid } from "./components";

const ROWS = 9;
const COLS = 9;
const NUMBER_OF_CELLS = 9;

const SudokuBoard: React.FC = () => {
  const [board, setBoard] = useState<Array<Array<number>>>([[]]);

  const [isMouseDown, setIsMouseDown] = useState(false);

  const renderSubGrids = () => {
    const subGrids = [];
    for (let i = 0; i < ROWS; i++) {
      subGrids.push(
        <SubGrid
          key={i}
          isMouseDown={isMouseDown}
          numOfCells={NUMBER_OF_CELLS}
          setIsMouseDown={setIsMouseDown}
        />
      );
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
