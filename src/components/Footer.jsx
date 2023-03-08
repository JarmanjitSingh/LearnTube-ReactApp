import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineSend,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillYoutube,
} from 'react-icons/ai';

function Footer() {
  return (
    <Box bgColor={'red.500'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textAlign={['center', 'start']}> Subscribe to get updates</Heading>
          <HStack borderBottom={'1px solid white'}>
            <Input
              placeholder="Enter Your Email...."
              focusBorderColor={"none"}
              border={'none'}
              outline={'none'}
            />
            <Button
              p={"0"}
              colorScheme={'red'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}  
            > 
              <AiOutlineSend color="white" />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading>LEARN TUBE</Heading>
          <Text> &copy; all rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'}>SOCIAL MEDIA</Heading>
          <HStack>
            <a href="https://www.linkedin.com/in/jarmanjit-singh-029452256" target="_blank"><AiFillLinkedin size={'25'} /></a>
            <a href="https://www.instagram.com/jarmanjit01/" target="_blank"><AiFillInstagram size={'25'} /></a>
            <AiFillFacebook size={'25'} />
            <AiFillYoutube size={'25'} />
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
