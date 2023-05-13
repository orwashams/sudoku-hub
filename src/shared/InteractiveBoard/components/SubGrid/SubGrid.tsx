import React from "react";

import { Cell } from "../Cell";

type Props = {
  ids?: Array<string>;
};
const SubGrid = ({ ids }: Props) => {
  return (
    <section className="grid grid-cols-3 border-2 border-black">
      <Cell id={ids?.[0]} />

      <Cell id={ids?.[1]} />

      <Cell id={ids?.[2]} />

      <Cell id={ids?.[3]} />

      <Cell id={ids?.[4]} />

      <Cell id={ids?.[5]} />

      <Cell id={ids?.[6]} />

      <Cell id={ids?.[7]} />

      <Cell id={ids?.[8]} />
    </section>
  );
};

export default SubGrid;
