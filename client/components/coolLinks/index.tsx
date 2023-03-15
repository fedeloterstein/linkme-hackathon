import { addLink } from "@/src/features/coolLinksSlice";
import { addWork } from "@/src/features/worksSlice";
import { Button, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CoolLinks = () => {

  const coolLinks = useSelector((state: any) => state.coolLinks);
  
  return (
    <Stack p={"25px"}>
      <Text fontWeight={700} fontSize={"18px"} mb={"23px"}>
        🔥 Cool Links
      </Text>
      {coolLinks && coolLinks.map((link: any) => (
      <CoolLinkCard link={link} key={link.id}/>
      ))}
      <NewCoolLink />
    </Stack>
  );
};

const CoolLinkCard = ({link}: any) => {  
  return (
    <Stack gap={1}>
      <HStack
        h={"72px"}
        borderRadius={"30px"}
        backgroundColor={link.color}
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
          {link.title}
        </Text>
      </HStack>
    </Stack>
  );
};

const NewCoolLink = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack gap={1}>
      <HStack
        h={"72px"}
        borderRadius={"30px"}
        pl={"24px"}
        border={"2px solid rgba(255, 255, 255, 0.3)"}
        background={"rgba(255, 255, 255, 0.3)"}
        alignItems={"center"}
        justify={"center"}
        onClick={onOpen}
      >
      
      <Text fontSize={"38px"}>+</Text>
      <CoolLinkModal isOpen={isOpen} onClose={onClose} />
      </HStack>
    </Stack>
  );
};

const CoolLinkModal = ({ onClose, isOpen }: any) => {
  const dispatch = useDispatch();
  const [data, setdata] = useState( {
    title: "Check out my CV",
    urlLink: "https://ethglobal.com/",
    color: '#FFD83D'
  },);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addLink(data));
    onClose();
  };
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        minW={"527pxpx"}
        minH={"300px"}
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
      + Add Cool Link
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
          <Input
              name={"color"}
              placeholder="color"
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
              name={"urlLink"}
              placeholder="Paste the Link..."
              mb={"28px"}
              borderRadius={"30px"}
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
