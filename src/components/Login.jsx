import {
  Container,
  Heading,
  Input,
  Text,
  VStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container h={'100vh'} p={'16'} >
      <form>
        <VStack spacing={'8'} alignItems={'stretch'}>
          <Heading>Welcome To Learn Tube</Heading>
          <Input
            placeholder="Email"
            type={'email'}
            required
            focusBorderColor="red"
          />
          <Input
            placeholder="Password"
            type={'password'}
            required
            focusBorderColor="red"
          />
          
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={''}>Forgot password?</Link>
            </Button>
          
          <Button colorScheme={'red'} type={'submit'}>
            Log In
          </Button>
          <Text alignSelf={'flex-end'}>
            New User ?
            <Button variant={'link'}>
                <Link to={'/signup'}>Sign Up</Link></Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default Login;
