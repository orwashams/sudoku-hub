import { Box, Button, Text, UnstyledButton } from "@mantine/core";
import React from "react";

type Props = {
  value: number;
};

const Cell = ({ value }: Props) => {
  return (
    <Box
      className="flex aspect-square w-full cursor-pointer items-center justify-center border"
      onClick={() => {
        console.log(value);
      }}
    >
      <Text>{value}</Text>
    </Box>
  );
};

export default Cell;
