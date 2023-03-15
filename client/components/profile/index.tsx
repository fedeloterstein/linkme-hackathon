
import { EmailIcon, LinkIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import confetti from "canvas-confetti";
import { ethers } from "ethers";
import React, { useState } from "react";
import { useContractEvent, useContractWrite } from "wagmi";
import contractAbi from "../../utils/contractABI.json";
import { useSendNotification } from "@/hooks/useSendNotification";

const origin = typeof window === "undefined" ? "" : window.location.origin;
const avatar = `${origin}/avatar.png`;

export const Profile = () => {
  const toast = useToast();
  const [loading, setloading] = useState(false);
  const { SendPushNotification } = useSendNotification();

  useContractEvent({
    address: "0x064D63F94A6B5Aaf5E7C74576F473fD3F47a1a1f",
    abi: contractAbi.abi,
    eventName: "NewDonatation",
    listener(_from, _to, _amount: any) {
      setloading(false),
        SendPushNotification(
          "0xd5322d50306678192DfE85ca9D062d3e0D7ACAa9",
          "New Donation LinkMe 0.0014 Matic",
          "Alert Created on LinkMe"
        );
      toast({
        title: "🥳 New Donation",
        description: `${_from} donate to 👻${_to} 🤑 ${ethers.utils.formatEther(
          _amount
        )} Matic 🌱`,
        status: "success",
        duration: 9000,
        isClosable: true,
      }),
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
    },
  });

  const { write } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: "0x064D63F94A6B5Aaf5E7C74576F473fD3F47a1a1f",
    abi: contractAbi.abi,
    functionName: "donate",
    args: ["0x954C869E4e920ca1aE8DaCde6d7C33B279A08d61"],
    overrides: {
      value: ethers.utils.parseEther("0.014"),
    },
  });

  const onClick = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (write) {
      write();
      setloading(true);
    }
  };

  return (
    <Stack alignItems={"center"} m={"28px 68px 64px 68px"}>
      <Box>
        <Avatar mb={"22px"} w={"108px"} h={"108px"} src={avatar}>
          <Stack
            bgColor={"red"}
            h={"24px"}
            w={"24px"}
            position={"absolute"}
            right={"10px"}
            bottom={"10px"}
            borderRadius={"50px"}
            bgGradient={"linear(to-r, #FF692D, #E856E0, #4D67FA)"}
            alignItems={"center"}
            justify={"center"}
          >
            <Text>+</Text>
          </Stack>
        </Avatar>
      </Box>
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
      <Text mb={"14px"} fontWeight={400} fontSize={"14px"}>
        GM! 👋 I am a Product Designer 🇲🇽
      </Text>
      <Button
        leftIcon={<EmailIcon />}
        bgGradient={"linear(to-r, #FF692D, #E856E0, #4D67FA)"}
        borderRadius={"50px"}
        variant={"solid"}
        minW={"200px"}
        m={"22px 12px"}
        onClick={onClick}
        isLoading={loading}
      >
        Leave a Tip 0.014 Matic
      </Button>
    </Stack>
  );
};
