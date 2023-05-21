import React, {
  type MouseEvent,
  useState,
  useEffect,
  TouchEventHandler,
} from "react";

import { Text, clsx } from "@mantine/core";

type Props = {
  value?: number;
};

const Cell = ({ value }: Props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const [isHighlighted, setIsHighlighted] = useState(false);

  const [isHoveredOver, setIsHoveredOver] = useState(false);

  useEffect(() => {
    setIsHighlighted(isHoveredOver && isMouseDown);
  }, [isHoveredOver, isMouseDown]);

  const handleMouseDown = (event: MouseEvent) => {
    setIsMouseDown(true);
  };

  const handleHoverOver = (event: MouseEvent) => {
    console.log("MouseHover: handle hover");

    setIsHoveredOver(true);
  };

  const handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    setIsHighlighted(false);
  };

  return (
    <div className="cursor-pointer border border-black">
      <span
        className={clsx(
          "flex aspect-square items-center justify-center rounded-md border-red-400 hover:border-4",
          isHighlighted ? "border-4 " : ""
        )}
        onMouseOver={handleHoverOver}
        onMouseDown={handleMouseDown}
        onContextMenu={handleRightClick}
      >
        <Text className="text-7xl">{value}</Text>
      </span>
    </div>
  );
};

export default Cell;
