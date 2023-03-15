import PushIcon from "@/assets/icons/PushIcon";
import { WalletIcon } from "@/assets/icons/Walleticon";
import SmallLogo from "@/assets/logos/SmallLogo";
import { Button, HStack, IconButton } from "@chakra-ui/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const { openConnectModal } = useConnectModal();
  return (
    <HStack h={"118px"} justify={'space-between'}>
        <Link href={'/'}>
      <SmallLogo />
        </Link>
      <HStack>
        <IconButton
          aria-label="Push Protocol"
          icon={<PushIcon />}
          bgGradient={"linear(to-r, #FF692D, #E856E0, #4D67FA)"}
          borderRadius={"50px"}
          color={"white"}
          boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.25)"}
        />
        <Button
          onClick={openConnectModal}
          leftIcon={<WalletIcon />}
          bgGradient={"linear(to-r, #FF692D, #E856E0, #4D67FA)"}
          borderRadius={"50px"}
          p={"0px 20px"}
          color={"white"}
          boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.25)"}
        >
          Connect Wallet
        </Button>
      </HStack>
    </HStack>
  );
};
