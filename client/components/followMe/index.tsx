import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const origin = typeof window === "undefined" ? "" : window.location.origin;
const twitterLogo = `${origin}/redes/twitter.png`;
const ensLogo = `${origin}/redes/ens.png`;
const notionLogo = `${origin}/redes/notion.png`;
const telegramLogo = `${origin}/redes/telegram.png`;
const twichLogo = `${origin}/redes/twich.png`;
const lensLogo = `${origin}/redes/lens.png`;

export const FollowMe = () => {
  return (
    <Stack p={"25px"}>
      <Text fontWeight={700} fontSize={"18px"} mb={"23px"}>
        🤙 Follow me
      </Text>
      <SimpleGrid columns={[2, 3]} spacing={10}>
        <Box
          height={"166px"}
          width={"166px"}
          backgroundImage={twitterLogo}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        ></Box>
        <Box
          height={"166px"}
          width={"166px"}
          backgroundImage={ensLogo}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        ></Box>
        <Box
          height={"166px"}
          width={"166px"}
          backgroundImage={notionLogo}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        ></Box>
        <Box
          height={"166px"}
          width={"166px"}
          backgroundImage={telegramLogo}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        ></Box>
        <Box
          height={"166px"}
          width={"166px"}
          backgroundImage={lensLogo}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        ></Box>
        <Box
          height={"166px"}
          width={"166px"}
          backgroundImage={twichLogo}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
        ></Box>
      </SimpleGrid>
    </Stack>
  );
};
