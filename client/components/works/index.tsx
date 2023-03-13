import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Works = () => {
  return (
    <Stack p={'25px'}>
      <Text fontWeight={700} fontSize={'18px'} mb={'23px'}>🏆 Work</Text>
      <SimpleGrid columns={2} spacing={10}>
        <Box bg="blue" h={'350px'} w={'166px'}></Box>
        <Box bg="blue" h={'350px'} w={'166px'}></Box>
      </SimpleGrid>
    </Stack>
  );
};
