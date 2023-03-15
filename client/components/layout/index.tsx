import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";


export const Layout = ({children}: any) => {
  return <Container maxW="100%" h={'100%'} bgColor={'black'}>
    <Stack m={'10px'}>
    <Navbar />
    {children}
    </Stack>
    <Footer />
    </Container>;
};
