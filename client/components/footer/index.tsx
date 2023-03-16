import PublishIcon from "@/assets/icons/PublishIcon";
import PushIcon from "@/assets/icons/PushIcon";
import ShareIcon from "@/assets/icons/ShareIcon";
import SmallLogo from "@/assets/logos/SmallLogo";
import { CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack h={"118px"} justify={"flex-end"} gap={5} mr={5}>
      <ShareModal isOpen={isOpen} onClose={onClose} />
      <Button
        leftIcon={<ShareIcon />}
        border={"2px solid #E856E0"}
        borderRadius={"50px"}
        p={"0px 20px"}
        color={"white"}
        bgColor={"black"}
        boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.25)"}
        onClick={onOpen}
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

const ShareModal = ({ onClose, isOpen }: any) => {
  const toast = useToast();
  const copyUrlProfile = () => {
    navigator.clipboard.writeText(`https://linkme-hackathon.vercel.app/juanma`);
    toast({
      title: "Profile copy",
      description: `https://linkme-hackathon.vercel.app/juanma`,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        minW={"366px"}
        minH={"334px"}
        border={"2px solid #E856E0"}
        borderRadius={"30px"}
      >
        <ModalHeader>
          <Center mt={"25px"}>
            <Text
              display={"flex"}
              alignItems={"center"}
              gap={3}
              fontWeight={600}
              fontSize={"20px"}
              bgClip="text"
              bgGradient="linear(to-r, rgba(255, 105, 45, 1), rgba(232, 86, 224, 1), rgba(77, 103, 250, 1))"
            >
              Share
            </Text>
          </Center>
          <HStack alignSelf={"flex-start"} mt={"22px"}>
            <SmallLogo />
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack
            justify={"space-between"}
            mb={"26px"}
            p={"0 18px"}
            h={"43px"}
            border={"2px solid #E856E0"}
            borderRadius={"30px"}
          >
            <Text
            fontWeight={600}
            fontSize={'14px'}
              bgClip="text"
              bgGradient="linear(to-r, rgba(255, 105, 45, 1), rgba(232, 86, 224, 1), rgba(77, 103, 250, 1))"
            >
              https://linkme-hackathon.vercel.app/juanma
            </Text>
            <CopyIcon color={'#4D67FA'}/>
          </HStack>
          <HStack justify={"space-between"} mb={"33px"}>
            <Text fontWeight={400} fontSize={'14px'}>Unique NFT Avatar</Text>
            <Stack
              w={"159px"}
              h={"41px"}
              borderRadius={"100px"}
              bgGradient="linear(to-r,  rgba(240, 248, 255, 0.79) 0%, rgba(232, 251, 247, 0.31) 57.44%, rgba(252, 254, 255, 0.57) )"
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              justify={"center"}
              align={"center"}
            >
              <Link
                isExternal
                href="https://testnets.opensea.io/es/collection/linkme-2"
                fontWeight={400}
                fontSize={"16px"}
                color={"white"}
              >
                View on OpenSea
              </Link>
            </Stack>
          </HStack>
          <Button
            w={"100%"}
            mb={"28px"}
            bgGradient={"linear(to-r, #FF692D, #E856E0, #4D67FA)"}
            borderRadius={"100px"}
            fontWeight={700}
            fontSize={"14px"}
            onClick={copyUrlProfile}
          >
            <CopyIcon /> Copy Link
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
