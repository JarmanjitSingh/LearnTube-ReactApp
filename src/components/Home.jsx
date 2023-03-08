import { Box, Button, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img5 from '../assets/5.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxWidth={'container.xl'} minH={'100vh'} p={['4', '16']}>
        <Heading
          w={'fit-content'}
          margin={'auto'}
          borderBottom={'2px solid black'}
          id='courses'
        >
          Best Courses
        </Heading>
        <Stack
          direction={['column', 'row']}
          p={'10'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'4'}
        >
          <Image
            src={img5}
            alt="graphics"
            h={['300px', '500px']}
            w={['300px', '500px']}
            objectFit={'cover'}
            filter={'hue-Rotate(100deg)'}
          />
          <Text
            letterSpacing={'10'}
            lineHeight={'150%'}
            p={'5'}
            textAlign={'justify'}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            excepturi, atque odio eos possimus officiis provident
            necessitatibus? Eum omnis quae totam quibusdam. Qui, saepe cum
            placeat nam iure dolor alias, aperiam odio inventore ex pariatur
            quidem magni fugiat sequi a dolores recusandae et dignissimos.
            Dolore ut laudantium voluptatibus voluptatum officiis! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam fugit
            excepturi unde autem alias. Fuga minima voluptatibus voluptate.
            Voluptatem ex vero aspernatur mollitia necessitatibus sapiente
            exercitationem asperiores. Quas laudantium maiores accusamus vel
            illo, eos fugiat nulla inventore deserunt provident quo saepe
            laboriosam sapiente ipsum modi quae sit quidem consequuntur hic
            rerum eaque repellendus rem. Minima, deleniti fugit itaque repellat
            dicta adipisci atque minus consequuntur rem similique aperiam labore
            tenetur nemo suscipit expedita, aliquid cumque, odio aut voluptatum.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};


const MyCarousel = () => {
  return (
    <Carousel
        interval={1500}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
      >
        <Stack direction={['column', 'row']} w={'full'} h={['80vh','100vh']} p={'16'}>
          <Box w={['100%', '50%']} h={['50vh', '100vh']} display={'flex'} alignItems={'center'}><Image src={img2} h={'60%'} borderRadius={['0 100px 0 100px','0 230px 0 230px']} objectFit={'cover'}  /></Box>
          <Box w={['100%', '50%']} h={['50vh', '100vh']} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}><Heading>WELCOME TO LEARN TUBE</Heading><Text>The Online Learning Plateform ...</Text></Box>
        </Stack>
        <Stack direction={['column', 'row']} w={'full'} h={['80vh','100vh']} p={'16'}>
          <Box w={['100%', '50%']} h={['50vh', '100vh']} display={'flex'} alignItems={'center'}><Image src={img3} borderRadius={['0 100px 0 100px','0 200px 0 200px']}   /></Box>
          <Box w={['100%', '50%']} h={['50vh', '100vh']} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}><Heading>RIGHT PLATFORM TO LEARN</Heading><Text>REACT | ANGULAR | VUE</Text><Button m={'6'}><Link to='/videos'>Start Now &rarr;</Link></Button></Box>
        </Stack>
      </Carousel>

  );
};

export default Home;
