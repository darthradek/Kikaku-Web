import type { NextPage } from "next";
import Link from "next/link";
import css from "./index.module.scss";
import { Heading, Box, Text, Button, Center } from '@chakra-ui/react'

const Home: NextPage = () => {
  return <div>
    <Center h='100vh' background='#E1E8EB'>
      <Box maxW='32rem'>
        <Center><Heading mb={4}>Ready to dive in?</Heading></Center>
        <Text fontSize='xl' align='center'>
          Create your account or log in to start planning your projects
        </Text>
        <Center>
          <Link href="/register">
            <Button size='lg' colorScheme='blue' mt='24px' mr='12px' variant='outline'>Sign In</Button>
          </Link>
          <Link href="/login">
            <Button size='lg' colorScheme='blue' mt='24px'>Log in</Button>
          </Link>
        </Center>
      </Box>
    </Center>
  </div>;
};

export default Home;
