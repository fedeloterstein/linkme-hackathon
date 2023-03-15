import PublishIcon from "@/assets/icons/PublishIcon";
import ShareIcon from "@/assets/icons/ShareIcon";
import { Button, HStack } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <HStack h={"118px"} justify={"flex-end"} gap={5} mr={5}>
      <Button
        leftIcon={<ShareIcon />}
        border={"2px solid #E856E0"}
        borderRadius={"50px"}
        p={"0px 20px"}
        color={"white"}
        bgColor={"black"}
        boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.25)"}
      >
        Share
      </Button>
      <Button
        leftIcon={<PublishIcon />}
        bgGradient={"linear(to-r, #FF692D, #E856E0, #4D67FA)"}
        borderRadius={"50px"}
        p={"0px 20px"}
        color={"white"}
        boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.25)"}
      >
        Publish
      </Button>
    </HStack>
  );
};
