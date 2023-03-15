import { CoolLinks } from "@/components/coolLinks";
import { FollowMe } from "@/components/followMe";
import { Layout } from "@/components/layout";
import { Poaps } from "@/components/poaps";
import { Profile } from "@/components/profile";
import { Works } from "@/components/works";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
const origin = typeof window === "undefined" ? "" : window.location.origin;
const bgProfile = `${origin}/bg-profile.png`;

export default function Handle() {
  return (
    <Layout>
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
          <Profile />
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
