import React from "react";

import { SubGrid } from "./components";

const array2D = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["10", "11", "12", "13", "14", "15", "16", "17", "18"],
  ["19", "20", "21", "22", "23", "24", "25", "26", "27"],
  ["28", "29", "30", "31", "32", "33", "34", "35", "36"],
  ["37", "38", "39", "40", "41", "42", "43", "44", "45"],
  ["46", "47", "48", "49", "50", "51", "52", "53", "54"],
  ["55", "56", "57", "58", "59", "60", "61", "62", "63"],
  ["64", "65", "66", "67", "68", "69", "70", "71", "72"],
  ["73", "74", "75", "76", "77", "78", "79", "80", "81"],
];

const InteractiveBoard = () => {
  return (
    <div>
      <section className="grid aspect-square w-[50rem] grid-cols-3  rounded-md border-2 border-black">
        <SubGrid ids={array2D[0]} />

        <SubGrid ids={array2D[1]} />

        <SubGrid ids={array2D[2]} />

        <SubGrid ids={array2D[3]} />

        <SubGrid ids={array2D[4]} />

        <SubGrid ids={array2D[5]} />

        <SubGrid ids={array2D[6]} />

        <SubGrid ids={array2D[7]} />

        <SubGrid ids={array2D[8]} />
      </section>
    </div>
  );
};

export default InteractiveBoard;
