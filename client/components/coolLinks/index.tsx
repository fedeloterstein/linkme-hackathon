import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const CoolLinks = () => {
  return (
    <Stack p={"25px"}>
      <Text fontWeight={700} fontSize={"18px"} mb={"23px"}>
        🔥 Cool Links
      </Text>
      <Stack gap={1}>
        <Box bg="tomato" height="72px" width={'100%'}></Box>
        <Box bg="tomato" height="72px" width={'100%'}></Box>
        <Box bg="tomato" height="72px" width={'100%'}></Box>
        <Box bg="tomato" height="72px" width={'100%'}></Box>
      </Stack>
    </Stack>
  );
};
