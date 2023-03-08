import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let location = useLocation()
  useEffect(()=>{
    if(location.pathname === '/'){
      document.title = "Learn Tube - Home"
    }
    else if(location.pathname === '/videos'){
      document.title = "Learn Tube - Videos"
    }
    else if(location.pathname === '/Login'){
      document.title = "Learn Tube - Login"
    }
    else if(location.pathname === '/Signup'){
      document.title = "Learn Tube - Signup"
    }
    else{
      document.title = "Learn Tube"
    }
  }, [location])
  return (
    <>
      <Button
        pos={'fixed'}
        zIndex={'10'}
        top={'4'}
        left={'4'}
        borderRadius={'full'}
        colorScheme={'red'}
        onClick={onOpen}
      >
        <BiMenuAltLeft />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Learn Tube</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'red'}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'red'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'red'}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'red'}>
                <HashLink to={'/#courses'}>Courses</HashLink>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'8'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'red'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button onClick={onClose} colorScheme={'red'} variant={'outline'}>
                <Link to={'/Signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
