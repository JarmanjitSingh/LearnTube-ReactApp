import {
    Container,
    Heading,
    Input,
    Text,
    VStack,
    Button,
    Avatar,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  function SignUp() {
    return (
      <Container h={'100vh'} p={'16'} >
        <form>
          <VStack spacing={'8'} alignItems={'stretch'}>
            <Heading>Signup To Learn Tube</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'}/>
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
                       
            <Button colorScheme={'red'} type={'submit'}>
              Sign Up
            </Button>
            <Text alignSelf={'flex-end'}>
              Already signed up ?
              <Button variant={'link'}>
                  <Link to={'/login'}>Log In</Link></Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  }
  
  export default SignUp;
  