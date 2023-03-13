import { EmailIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const Profile = () => {
  return (
    <Stack alignItems={"center"} m={"28px 68px 64px 68px"} h={"392px"}>
      <Avatar mb={"22px"} w={"108px"} h={"108px"} />
      <HStack>
        <Heading
          mb={"3px"}
          fontWeight={600}
          fontSize={"14px"}
          bgGradient="linear(to-r, rgba(255, 105, 45, 1), rgba(232, 86, 224, 1), rgba(77, 103, 250, 1))"
          bgClip={"text"}
        >
          Juanma.me
        </Heading>
        <LinkIcon />
      </HStack>
      <Text mb={'14px'} fontWeight={400} fontSize={'14px'}>GM! 👋 I'm a Product Designer 🇲🇽</Text>
      <Button
        leftIcon={<EmailIcon />}
        bgGradient={"linear(to-r, #FF692D, #E856E0, #4D67FA)"}
        borderRadius={"50px"}
        variant={"solid"}
        minW={"200px"}
        m={"22px 12px"}
      >
        Leave a Tip 0.16 Matic
      </Button>
    </Stack>
  );
};
