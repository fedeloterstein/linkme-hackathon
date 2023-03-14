import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const origin = typeof window === "undefined" ? "" : window.location.origin;
const logo1 = `${origin}/works/work1.png`;
const logo2 = `${origin}/works/work2.png`;

export const Works = () => {
  return (
    <Stack p={"25px"}>
      <Text fontWeight={700} fontSize={"18px"} mb={"23px"}>
        🏆 Work
      </Text>
      <SimpleGrid columns={[2, 2, 3]} spacing={[1, 10]} alignSelf={["center", "center","flex-start"]}>
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
        position={'relative'}
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
  return (
    <Stack
      h={"350px"}
      w={"166px"}
      p={"20px"}
      border={'2px solid rgba(255, 255, 255, 0.3)'}
      borderRadius={'30px'}
      background={'rgba(255, 255, 255, 0.3)'}
      alignItems={"center"}
      justify={"center"}
    >
     <Text fontSize={'48px'}>+</Text>
    </Stack>
  );
};