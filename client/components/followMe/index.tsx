import { Box, Grid, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const FollowMe = () => {
  return (
    <Stack p={'25px'}>
      <Text fontWeight={700} fontSize={'18px'} mb={'23px'}>🤙 Follow me</Text>
      <SimpleGrid columns={2} spacing={10}>
        <Box bg="tomato" height="166px"></Box>
        <Box bg="tomato" height="166px"></Box>
        <Box bg="tomato" height="166px"></Box>
        <Box bg="tomato" height="166px"></Box>
      </SimpleGrid>
    </Stack>
  );
};
