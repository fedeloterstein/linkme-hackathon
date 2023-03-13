import { Profile } from '@/components/profile'
import { Container, Stack } from '@chakra-ui/react'
import React from 'react'

export default function Handle() {
  return (
    <Container>
    <Stack border={'2px solid #E856E0'} m={'48px 5px 24px 5px'} w={'100%'} h={'100vh'} borderRadius={'30px'}>
        <Profile />
    </Stack>
    </Container>
  )
}
