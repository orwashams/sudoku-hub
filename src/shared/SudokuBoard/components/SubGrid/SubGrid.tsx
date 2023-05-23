import React, { useCallback } from "react";

import { Cell } from "../Cell";

type Props = {
  numOfCells: number;
  isMouseDown: boolean;
  setIsMouseDown: (s: boolean) => void;
};

const SubGrid = ({ isMouseDown, numOfCells, setIsMouseDown }: Props) => {
  const renderCells = useCallback(() => {
    const cells = [];
    for (let i = 0; i < numOfCells; i++) {
      cells.push(
        <Cell
          key={i}
          isMouseDown={isMouseDown}
          setIsMouseDown={setIsMouseDown}
        />
      );
    }
    return cells;
  }, [numOfCells, isMouseDown, setIsMouseDown]);

  return (
    <section className="grid grid-cols-3 border-2 border-black">
      {renderCells()}
    </section>
  );
};

export default SubGrid;
