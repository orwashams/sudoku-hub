import { Grid } from "@mantine/core";
import React from "react";
import { Cell } from "../Cell";

const SubGrid = () => {
  return (
    <Grid
      gutter={0}
      className=" aspect-square w-full border-2 border-black"
      justify="center"
    >
      <Grid.Col span={4}>
        <Cell value={1} />
      </Grid.Col>

      <Grid.Col span={4}>
        <Cell value={2} />
      </Grid.Col>

      <Grid.Col span={4}>
        <Cell value={3} />
      </Grid.Col>

      <Grid.Col span={4}>
        <Cell value={4} />
      </Grid.Col>

      <Grid.Col span={4}>
        <Cell value={5} />
      </Grid.Col>
      <Grid.Col span={4}>
        <Cell value={6} />
      </Grid.Col>

      <Grid.Col span={4}>
        <Cell value={7} />
      </Grid.Col>

      <Grid.Col span={4}>
        <Cell value={8} />
      </Grid.Col>

      <Grid.Col span={4}>
        <Cell value={9} />
      </Grid.Col>
    </Grid>
  );
};

export default SubGrid;
