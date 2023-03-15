import PushIcon from "@/assets/icons/PushIcon";
import { addFollowMe } from "@/src/features/followsMeSlice";
import {
  Box,
  Button,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const origin = typeof window === "undefined" ? "" : window.location.origin;
const logo1 = `${origin}/works/work1.png`;
const logo2 = `${origin}/works/work2.png`;

export const Works = () => {
  return (
    <Stack p={"25px"}>
      <Text fontWeight={700} fontSize={"18px"} mb={"23px"}>
        🏆 Work
      </Text>
      <SimpleGrid
        columns={[2, 2, 3]}
        spacing={[1, 10]}
        alignSelf={["center", "center", "flex-start"]}
      >
        <WorksCard logo={logo2} />
        <WorksCard logo={logo1} />
        <NewWorksCard />
      </SimpleGrid>
    </Stack>
  );
};

const WorksCard = ({ logo }: any) => {
  return (
    <Stack
      h={"350px"}
      w={"166px"}
      backgroundImage={logo}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      p={"20px"}
    >
      <Stack
        border={"2px solid #E856E0"}
        h={"36px"}
        w={"36px"}
        borderRadius={"12px"}
        alignItems={"center"}
        justify={"center"}
        backgroundColor={"white"}
        mb={"178px"}
        position={"relative"}
      >
        <Text fontWeight={500} fontSize={"24px"}>
          👻
        </Text>
      </Stack>
      <Heading fontWeight={800} fontSize={"24px"}>
        Title
      </Heading>
      <Text fontWeight={500} fontSize={"12px"}>
        Description
      </Text>
    </Stack>
  );
};

const NewWorksCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      h={"350px"}
      w={"166px"}
      p={"20px"}
      border={"2px solid rgba(255, 255, 255, 0.3)"}
      borderRadius={"30px"}
      background={"rgba(255, 255, 255, 0.3)"}
      alignItems={"center"}
      justify={"center"}
      onClick={onOpen}
    >
      <Text fontSize={"48px"}>+</Text>
      <WorksModal isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
};

const WorksModal = ({ onClose, isOpen }: any) => {
  const dispatch = useDispatch();
  const [data, setdata] = useState({
    name: "@juanma",
    urlImage: "/redes/lens.png",
    urlLink: "https://ethglobal.com/",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addFollowMe(data));
    onClose();
  };
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        minW={"527pxpx"}
        minH={"500px"}
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
      + Add Work
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
          <Input
              name={"urlImage"}
              placeholder="Url Background image"
              mb={"28px"}
              borderRadius={"30px"}
              onChange={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
            />
            <Input
              name={"title"}
              placeholder="Title"
              mb={"28px"}
              borderRadius={"30px"}
              onChange={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
            />
            <Input
              name={"description"}
              placeholder="Description..."
              mb={"28px"}
              borderRadius={"30px"}
              onChange={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
            />
              <Input
              name={"linkUrl"}
              placeholder="Paste the Link..."
              mb={"28px"}
              borderRadius={"30px"}
              onChange={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
            />
            <Input
              placeholder="Paste the Link..."
              mb={"28px"}
              borderRadius={"30px"}
              name={"urlLink"}
              onChange={(e) =>
                setdata({ ...data, [e.target.name]: e.target.value })
              }
            />
            <Button
              w={"100%"}
              mb={"28px"}
              bgGradient={"linear(to-r, #FF692D, #E856E0, #4D67FA)"}
              borderRadius={"100px"}
              fontWeight={700}
              fontSize={"14px"}
              type={"submit"}
            >
              + Add
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
