import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const origin = typeof window === "undefined" ? "" : window.location.origin;
const logoTwitter = `${origin}/redes/twitter.png`;
const logoLens = `${origin}/redes/lens.png`;
const logoDiscord = `${origin}/redes/discord.png`;
const logoCustom = `${origin}/redes/custom.png`;

export const FollowMe = () => {
  const followMeLinks = useSelector((state: any) => state.followMe);

  return (
    <Stack p={"25px"}>
      <Text fontWeight={700} fontSize={"18px"} mb={"23px"}>
        🤙 Follow me
      </Text>

      <SimpleGrid
        columns={[2, 2, 3]}
        spacing={5}
        alignSelf={["center", "center", "flex-start"]}
      >
        {followMeLinks &&
          followMeLinks.map((link: any) => (
            <FollowMeCard
              logo={`${origin}${link.urlImage}`}
              key={link.id}
              name={link.name}
            />
          ))}
        <NewFollowMe />
      </SimpleGrid>
    </Stack>
  );
};

const FollowMeCard = ({ logo, name }: any) => {
  return (
    <Box
      height={"160px"}
      width={"160px"}
      backgroundImage={logo}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
    >
      <Text
        position={"relative"}
        left={"12px"}
        top={"120px"}
        fontWeight={500}
        fontSize={"12px"}
        dropShadow={"rgba(0, 0, 0, 0.25)"}
      >
        {name}
      </Text>
    </Box>
  );
};

const NewFollowMe = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      height={"160px"}
      width={"160px"}
      border={"2px solid rgba(255, 255, 255, 0.3)"}
      background={"rgba(255, 255, 255, 0.3)"}
      alignItems={"center"}
      justify={"center"}
      borderRadius={"30px"}
      onClick={onOpen}
    >
      <>
        <Text fontSize={"48px"}>+</Text>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent
            maxW={"366px"}
            maxH={"421px"}
            border={"2px solid #E856E0"}
            borderRadius={"30px"}
          >
            <ModalHeader alignSelf={"center"}>
              <Text
                fontWeight={600}
                fontSize={"20px"}
                bgClip="text"
                bgGradient="linear(to-r, rgba(255, 105, 45, 1), rgba(232, 86, 224, 1), rgba(77, 103, 250, 1))"
              >
                + Add Link
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <HStack mb={"19px"} justify={"space-between"}>
                <Text fontWeight={700} fontSize={"14px"}>
                  🔥Trend Links on Web3
                </Text>
                <Link
                  fontWeight={700}
                  fontSize={"14px"}
                  bgClip="text"
                  bgGradient="linear(to-r, rgba(255, 105, 45, 1), rgba(232, 86, 224, 1), rgba(77, 103, 250, 1))"
                >
                  View all
                </Link>
              </HStack>
              <HStack justify={"space-between"} mb={"28px"}>
                <Stack justify={"center"} alignItems={"center"}>
                  <Box
                    backgroundImage={logoTwitter}
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    bgPosition="center"
                    h={"64px"}
                    w={"64px"}
                  ></Box>
                  <Text fontWeight={500} fontSize={"10px"}>
                    TWITTER
                  </Text>
                </Stack>
                <Stack justify={"center"} alignItems={"center"}>
                  <Box
                    backgroundImage={logoLens}
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    bgPosition="center"
                    h={"64px"}
                    w={"64px"}
                  ></Box>
                  <Text fontWeight={500} fontSize={"10px"}>
                    LENS
                  </Text>
                </Stack>{" "}
                <Stack justify={"center"} alignItems={"center"}>
                  <Box
                    backgroundImage={logoDiscord}
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    bgPosition="center"
                    h={"64px"}
                    w={"64px"}
                  ></Box>
                  <Text fontWeight={500} fontSize={"10px"}>
                    DISCORD
                  </Text>
                </Stack>{" "}
                <Stack justify={"center"} alignItems={"center"}>
                  <Box
                    backgroundImage={logoCustom}
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    bgPosition="center"
                    h={"64px"}
                    w={"64px"}
                  ></Box>
                  <Text fontWeight={500} fontSize={"10px"}>
                    CUSTOM
                  </Text>
                </Stack>
              </HStack>
              <Input placeholder="@user" mb={"28px"} borderRadius={'30px'}/>
              <Input placeholder="Paste the Link..." mb={"28px"} borderRadius={'30px'}/>
              <Button w={"100%"} mb={"28px"} bgGradient={"linear(to-r, #FF692D, #E856E0, #4D67FA)"}  borderRadius={'100px'} fontWeight={700} fontSize={'14px'}>
                + Add
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </Stack>
  );
};
