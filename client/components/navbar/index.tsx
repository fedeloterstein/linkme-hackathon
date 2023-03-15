import PushGradIcon from "@/assets/icons/PushGradIcon";
import PushIcon from "@/assets/icons/PushIcon";
import { WalletIcon } from "@/assets/icons/Walleticon";
import SmallLogo from "@/assets/logos/SmallLogo";
import {
  Button,
  HStack,
  IconButton,
  Modal,
  Link,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import React from "react";
const origin = typeof window === "undefined" ? "" : window.location.origin;
const iphone = `${origin}/iphone.png`;

export const Navbar = () => {
  const { openConnectModal } = useConnectModal();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack h={"118px"} justify={"space-between"}>
      <Link href={"/"}>
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
          onClick={onOpen}
        />
        <NavBarModal isOpen={isOpen} onClose={onClose} />
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

const NavBarModal = ({ onClose, isOpen }: any) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        minW={"527pxpx"}
        minH={"540px"}
        border={"2px solid #E856E0"}
        borderRadius={"30px"}
      >
        <ModalHeader alignSelf={"center"}>
          <Text
            display={"flex"}
            alignItems={"center"}
            gap={3}
            fontWeight={600}
            fontSize={"20px"}
            bgClip="text"
            bgGradient="linear(to-r, rgba(255, 105, 45, 1), rgba(232, 86, 224, 1), rgba(77, 103, 250, 1))"
          >
            <PushIcon /> Receive Notifications
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight={600} fontSize={"14px"}>
            1. Connect your wallet on Push Protocol a go to Channels
          </Text>
          <Text fontWeight={600} fontSize={"14px"}>2. Search for the channel Linkme and click on OPT_IN</Text>
          <Text fontWeight={600} fontSize={"14px"}>3. Done, you will receive the notifications in your Inbox</Text>
          <Image src={iphone} alt='Dan Abramov' />
          <Button
            w={"100%"}
            mb={"28px"}
            bgGradient={"linear(to-r, #FF692D, #E856E0, #4D67FA)"}
            borderRadius={"100px"}
            fontWeight={700}
            fontSize={"14px"}
          >
            + Add
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
