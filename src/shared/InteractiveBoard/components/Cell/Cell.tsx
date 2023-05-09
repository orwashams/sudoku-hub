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
      <Box className=" flex aspect-square w-full items-center  justify-center rounded-lg border-4 border-transparent hover:border-purple-700">
        <Text>{value}</Text>
      </Box>
    </Box>
  );
};

export default Cell;
