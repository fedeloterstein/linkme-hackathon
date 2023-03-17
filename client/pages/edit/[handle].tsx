import { CoolLinks } from "@/components/coolLinks";
import { FollowMe } from "@/components/followMe";
import { Layout } from "@/components/layout";
import { Poaps } from "@/components/poaps";
import { Profile } from "@/components/profile";
import { Works } from "@/components/works";
import {
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Link as LinkC,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
const origin = typeof window === "undefined" ? "" : window.location.origin;
const bgProfile = `${origin}/bg-profile.png`;
import { Spinner } from "@chakra-ui/react";
import { BigLogo } from "@/assets/logos/BigLogo";
import { useContractRead } from "wagmi";
import contractAbi from "../../utils/contractABI.json";
import { useRouter } from "next/router";
import Link from "next/link";
import SmallLogo from "@/assets/logos/SmallLogo";
import XsLogo from "@/assets/logos/XsLogo";
import confetti from "canvas-confetti";

export default function Handle() {
  const [loading, setloading] = useState(true);
  const router = useRouter();
  const [handleId, sethandleId] = useState<any>("");
  
  useEffect(() => {
    if (router.isReady) {
      const { handle } = router.query;
      console.log("listo", handle);
      sethandleId(handle);
      setloading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);


 
  const { data, isError, isLoading } = useContractRead({
    address: "0x47B52e28d9831d95c31b6C14c6fe569357D4E995",
    abi: contractAbi.abi,
    functionName: "ValidHandle",
    args: [handleId],
  });

  if (isLoading || loading) {
    return (
      <Stack
        height={"100vh"}
        justify={"center"}
        align={"center"}
        backgroundImage={bgProfile}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        backgroundColor={"black"}
      >
        <Link href={'/'}><BigLogo /></Link>
      
        <Spinner size="xl" />
      </Stack>
    );
  }

  if (!data === false) {
    return (
      <Stack
        height={"100vh"}
        justify={"center"}
        align={"center"}
        backgroundImage={bgProfile}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        backgroundColor={"black"}
      >
        <BigLogo />
        <Text>El dominio no existe</Text>
        <LinkC
          as={Link}
          p={"0px 20px"}
          color={"white"}
          boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.25)"}
          href={"/"}
        >
          Ir a la Home
        </LinkC>
      </Stack>
    );
  }
  return (
    <Layout isFull>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(12, 1fr)"
        h={"100%"}
        border={"2px solid #E856E0"}
        borderRadius={"30px"}
        backgroundImage={bgProfile}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        backgroundColor={"black"}
      >
        <GridItem
          gridArea={["1 / 1 / 2 / 13", null, "1 / 1 / 3 / 4"]}
          alignSelf={["center", "flex-start"]}
        >
          <Profile handleId={handleId} />
        </GridItem>
        <GridItem gridArea={["2 / 1 / 3 / 13", null, "1 / 4 / 2 / 9"]}>
          <FollowMe />
        </GridItem>
        <GridItem gridArea={["4 / 1 / 5 / 13", null, "2 / 4 / 3 / 9"]}>
          <Works />
        </GridItem>
        <GridItem gridArea={["3 / 1 / 4 / 13", null, "1 / 9 / 2 / 13"]}>
          <Poaps />
        </GridItem>
        <GridItem gridArea={["5 / 1 / 6 / 13", null, "2 / 9 / 3 / 13"]}>
          <CoolLinks />
        </GridItem>
        
      </Grid>
      <Center>
        <HStack>
          <Text
            bgClip="text"
            bgGradient="linear(to-r, rgba(255, 105, 45, 1), rgba(232, 86, 224, 1), rgba(77, 103, 250, 1))"
            fontWeight={700}
            fontSize={"14px"}
            mb={'8px'}
          >
            Make with
          </Text>
          <XsLogo />
        </HStack>
      </Center>
    </Layout>
  );
}

/**
   <Stack border={'2px solid #E856E0'} m={'48px 5px 24px 5px'} w={'100%'} h={'100%'} borderRadius={'30px'}>
        <Profile />
        <FollowMe />
        <Poaps />
        <Works />
        <CoolLinks />
    </Stack>
 */
