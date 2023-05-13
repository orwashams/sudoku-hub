import React, { type MouseEvent, useState, useEffect } from "react";

import { Text } from "@mantine/core";

type Props = {
  value?: number;
  id?: string;
};

const Cell = ({ value, id }: Props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const [highlight, setHighlighted] = useState("");

  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e: Event) => {
      // prevent the right-click menu from appearing
      e.preventDefault();
    };

    // attach the event listener to
    // the document object
    document.addEventListener("contextmenu", handleContextMenu);

    // clean up the event listener when
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const handleClick = (event: MouseEvent) => {
    if (event.button === 0) {
      // Left-click
      setIsMouseDown(true);
      setHighlighted("bg-slate-200");
    }
    if (event.button === 2) {
      setIsMouseDown(true);
      setHighlighted("");
    }
  };

  return (
    <div
      className="cursor-pointer border border-black"
      onMouseDown={handleClick}
    >
      <span
        id={id}
        className={`flex aspect-square items-center justify-center   hover:bg-slate-200 ${highlight} `}
      >
        <Text className="text-7xl">{value}</Text>
      </span>
    </div>
  );
};

export default Cell;
