import { Button, Heading, Stack, VStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const videosArr = [
  {
    title:
      'Introduction to React Js + Installation #1',
    description:
      'Complete react course: In this react course, we will see how to use react using projects. React is an amazing library for creating user interfaces',
    link: 'https://www.youtube.com/embed/-mJFZp84TIY',
    number: 1
  },
  {
    title:
      'Creating our first react app using create-react-app #2',
    description:
      'Complete react course: In this react course, we will see how to use react using projects. React is an amazing library for creating user interfaces',
    link: 'https://www.youtube.com/embed/hnVOvvbQrwA',
    number: 2
  },
  {
    title: 'JavaScript Refresher #3',
    description:
      'Complete react course: In this react course, we will see how to use react using projects. React is an amazing library for creating user interfaces',
    link: 'https://www.youtube.com/embed/kFe-RRaOy48',
    number: 3
  },
  {
    title: 'Understanding JSX #4',
    description:
      'Complete react course: In this react course, we will see how to use react using projects. React is an amazing library for creating user interfaces',
    link: 'https://www.youtube.com/embed/JvC7aA24m4Q',
    number: 4
  },
  {
    title: 'Project 1: Setup + Adding Bootstrap to React #5',
    description:
      'Complete react course: In this react course, we will see how to use react using projects. React is an amazing library for creating user interfaces',
    link: 'https://www.youtube.com/embed/wa0IVAIqbo0',
    number: 5
  },
  {
    title:
      'Understanding Props and PropTypes in React #6',
    description:
      'Complete react course: In this react course, we will see how to use react using projects. React is an amazing library for creating user interfaces',
    link: 'https://www.youtube.com/embed/xvm3X1oyTL8',
    number: 6
  },
  {
    title:
      'Understanding State & Handling Events in React #7',
    description:
      'Complete react course: In this react course, we will see how to use react using projects. React is an amazing library for creating user interfaces',
    link: 'https://www.youtube.com/embed/leBpCqU8wdg',
    number: 7
  },
  {
    title: 'Adding more Logic to TextUtils #8',
    description:
      'Complete react course: In this react course, we will see how to use react using projects. React is an amazing library for creating user interfaces',
    link: 'https://www.youtube.com/embed/7BsjAdjx2Z0',
    number: 8
  },
];

function Videos() {
  const [videoSrc, SetVideoSrc] = useState(
    {
        title: "Introduction to React Js + Installation #1",
        description: "Complete react course: In this react course, we will see how to use react using projects. React is an amazing library for creating user interfaces",
        link: 'https://www.youtube.com/embed/-mJFZp84TIY',
        number: 1
    }

  );
  return (
    <Stack direction={['column', 'row']} height={'100vh'}>
      <VStack w={'100%'} p={'4'}>
        <iframe
          style={{ width: '100%', height: '80%' }}
          src={videoSrc.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <VStack alignItems={'flex-start'} p={'4'} w={'full'} overflowY={'auto'}>
          <Heading>{videoSrc.title}</Heading>
          <Text>
            {videoSrc.description}
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'4'}
        gap={'8'}
        overflowY={'auto'}
      >
        <Heading textAlign={'center'}>React Course</Heading>

        {videosArr.map((element, index) => {
          return (
            <Button
              key={index}
              variant={'ghost'}
              colorScheme={'red'}
              onClick={() => SetVideoSrc(element)}
            >
              Lecture-{element.number}
            </Button>
          );
        })}
      </VStack>
    </Stack>
  );
}

export default Videos;
