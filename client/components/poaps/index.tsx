import PoapIcon from "@/assets/icons/PoapIcon";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Poaps = () => {
  return (
    <Stack p={'25px'}>
      <Text fontWeight={700} fontSize={'18px'} mb={'23px'} display={'flex'}><PoapIcon /> POAPs</Text>
      <SimpleGrid columns={3} spacing={10}>
        <Box bg="purple" height="108px"></Box>
        <Box bg="purple" height="108px"></Box>
        <Box bg="purple" height="108px"></Box>
        <Box bg="purple" height="108px"></Box>
        <Box bg="purple" height="108px"></Box>
        <Box bg="purple" height="108px"></Box>
        <Box bg="purple" height="108px"></Box>
        <Box bg="purple" height="108px"></Box>
      </SimpleGrid>
    </Stack>
  );
};
