import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const CoolLinks = () => {
  return (
    <Stack p={"25px"}>
      <Text fontWeight={700} fontSize={"18px"} mb={"23px"}>
        🔥 Cool Links
      </Text>
      <CoolLinkCard color={"white"} />
      <CoolLinkCard color={"#FFD83D"} />
      <CoolLinkCard color={"#33CCFF"} />
      <CoolLinkCard color={"#E856E0"} />
    </Stack>
  );
};

const CoolLinkCard = ({color}: any) => {
  return (
    <Stack gap={1}>
      <HStack
        h={"72px"}
        borderRadius={"30px"}
        backgroundColor={color}
        pl={"24px"}
      >
        <Stack
          border={"2px solid #E856E0"}
          h={"36px"}
          w={"36px"}
          borderRadius={"12px"}
          alignItems={"center"}
          justify={"center"}
          backgroundColor={'white'}
        >
          <Text fontWeight={500} fontSize={"24px"}>
            👻
          </Text>
        </Stack>
        <Text fontWeight={600} fontSize={"20px"} color={"black"}>
          Check out my CV
        </Text>
      </HStack>
    </Stack>
  );
};
