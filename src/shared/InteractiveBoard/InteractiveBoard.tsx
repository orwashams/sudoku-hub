import React from "react";

import { Container, Grid } from "@mantine/core";
import { SubGrid } from "./components";

const InteractiveBoard = () => {
  return (
    <Container>
      <Grid
        gutter={0}
        className="flex aspect-square w-full rounded-md border-2 border-black"
      >
        <Grid.Col span={4}>
          <SubGrid />
        </Grid.Col>

        <Grid.Col span={4}>
          <SubGrid />
        </Grid.Col>

        <Grid.Col span={4}>
          <SubGrid />
        </Grid.Col>

        <Grid.Col span={4}>
          <SubGrid />
        </Grid.Col>

        <Grid.Col span={4}>
          <SubGrid />
        </Grid.Col>

        <Grid.Col span={4}>
          <SubGrid />
        </Grid.Col>

        <Grid.Col span={4}>
          <SubGrid />
        </Grid.Col>

        <Grid.Col span={4}>
          <SubGrid />
        </Grid.Col>

        <Grid.Col span={4}>
          <SubGrid />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default InteractiveBoard;
