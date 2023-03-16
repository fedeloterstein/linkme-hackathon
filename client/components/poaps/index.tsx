
import PoapIcon from "@/assets/icons/PoapIcon";
import { Box, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const origin = typeof window === "undefined" ? "" : window.location.origin;
const poap1 = `${origin}/poaps/poap1.png`;
const poap2 = `${origin}/poaps/poap2.png`;
const poap3 = `${origin}/poaps/poap3.png`;
const poap4 = `${origin}/poaps/poap4.png`;
const poap5 = `${origin}/poaps/poap5.png`;
const poap6 = `${origin}/poaps/poap6.png`;
const poap7 = `${origin}/poaps/poap7.png`;
const poap8 = `${origin}/poaps/poap8.png`;
const poapLogo = `${origin}/poapLogo.png`;

export const Poaps = () => {
  return (
    <Stack p={'25px'}>
      <Text fontWeight={700} fontSize={'18px'} mb={'23px'} display={'flex'}><Image alt={'poap logo'} src={poapLogo} w={'31px'} h={'31px'}/> POAPs</Text>
      <SimpleGrid columns={3} spacing={5} alignSelf={'flex-start'}>
        <Box   height={"108px"}
          width={"108px"}
          backgroundImage={poap1}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"></Box>
            <Box   height={"108px"}
          width={"108px"}
          backgroundImage={poap2}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"></Box>
               <Box   height={"108px"}
          width={"108px"}
          backgroundImage={poap3}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"></Box>
               <Box   height={"108px"}
          width={"108px"}
          backgroundImage={poap4}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"></Box>
               <Box   height={"108px"}
          width={"108px"}
          backgroundImage={poap5}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"></Box>
               <Box   height={"108px"}
          width={"108px"}
          backgroundImage={poap6}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"></Box>
               <Box   height={"108px"}
          width={"108px"}
          backgroundImage={poap7}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"></Box>
               <Box   height={"108px"}
          width={"108px"}
          backgroundImage={poap8}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"></Box>
      </SimpleGrid>
    </Stack>
  );
};
