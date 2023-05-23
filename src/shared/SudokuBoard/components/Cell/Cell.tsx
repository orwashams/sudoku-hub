import React, { useState, useEffect, useCallback } from "react";

import { Text, clsx } from "@mantine/core";

type Props = {
  isMouseDown: boolean;
  setIsMouseDown: (s: boolean) => void;
  value?: number;
};

const Cell = ({ value, isMouseDown, setIsMouseDown }: Props) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const [isHoveredOver, setIsHoveredOver] = useState(false);

  useEffect(() => {
    setIsHighlighted(isHoveredOver && isMouseDown);
    console.log("is Highlighed", isHighlighted);
  }, [isHighlighted, isHoveredOver, isMouseDown]);

  const handleMouseDown = useCallback(() => {
    setIsMouseDown(true);
    console.log("Mouse Down");
  }, [setIsMouseDown]);

  const handleHover = useCallback(() => {
    setIsHoveredOver(true);
    console.log("Mouse hover");
  }, []);

  const handleExit = useCallback(() => {
    setIsHoveredOver(false);
    console.log("Mouse unhovered");
  }, []);

  return (
    <div className="cursor-pointer border border-black">
      <span
        className={clsx(
          "flex aspect-square items-center justify-center rounded-md border-red-400 hover:border-4",
          isHighlighted ? "border-4 " : ""
        )}
        onMouseEnter={handleHover}
        onMouseOut={handleExit}
        onMouseDown={handleMouseDown}
      >
        <Text className="text-7xl">{value}</Text>
      </span>
    </div>
  );
};

export default Cell;
