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
      <SimpleGrid columns={[2, 3]} spacing={5} alignSelf={"flex-start"}>
       <FollowMeCard logo={twitterLogo}/>
       <FollowMeCard logo={notionLogo}/>
       <FollowMeCard logo={ensLogo}/>
       <FollowMeCard logo={lensLogo}/>
       <FollowMeCard logo={telegramLogo}/>
       <FollowMeCard logo={twichLogo}/>
      </SimpleGrid>
    </Stack>
  );
};

const FollowMeCard = ({ logo }: any) => {
  return (
    <Box
      height={"160px"}
      width={"160px"}
      backgroundImage={logo}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
    ></Box>
  );
};
