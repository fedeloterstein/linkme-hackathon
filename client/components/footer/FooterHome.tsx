import { useTotalDonations } from "@/hooks/useTotalDonations";
import { useTotalProfiles } from "@/hooks/useTotalProfiles";
import { HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

export const FooterHome = () => {

  const {totalProfiles} = useTotalProfiles()
const {totalDonations} = useTotalDonations()
  
  return (
    <HStack
    justify={'space-between'}
    p={'0 79px'}
      h={"69px"}
      bgGradient="linear(to-r, rgba(255, 105, 45, 1), rgba(232, 86, 224, 1), rgba(77, 103, 250, 1))"
    >
      <HStack>
        <Text fontWeight={700} fontSize={'16px'}>🎉Total Linkme  #{totalProfiles ? totalProfiles.toNumber() : null}</Text>
        <Text  fontWeight={700} fontSize={'16px'}>🔥Total Tips {totalDonations ? totalDonations.toNumber() : null}</Text>
      </HStack>
      <Text  fontWeight={700} fontSize={'16px'}>Show us ❤ on Twitter <Link isExternal href="https://twitter.com/espejeljuanma">@juanma</Link>, <Link isExternal href="https://twitter.com/fedeloters">@fedeloters</Link></Text>
    </HStack>
  );
};
