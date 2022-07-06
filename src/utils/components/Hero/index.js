import React from 'react';
import coverImage from '../../assets/header-images/somethinggreat.jpg';
import profileImage from '../../assets/header-images/avatar.jpg';

import {
  Flex,
  HStack,
  Button,
  useDisclosure,
  Text,
  VStack,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';

const font = "Arial";

export function Hero() {
  return (

      <Flex
        w={'full'}
        h={'40vh'}
        backgroundImage={coverImage}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}>
          <HStack maxW={'4xl'} align={'flex-start'} justify-content={'space-around'} spacing={6}>
            <VStack direction={'row'} align={'flex-start'} spacing={3}>
              <Text
                color={'grey'}
                fontWeight={700}
                lineHeight={1}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                I'm
              </Text>
              <Text
                fontFamily={font}
                color={'white'}
                fontWeight={400}
                lineHeight={1}
                fontSize={useBreakpointValue({ base: '5xl', md: '7xl' })}>
                Jason Talbert
              </Text>
              <Text
                color={'grey'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                and I'm a Full Stack Web Developer.
              </Text>
            </VStack>
            <Image
              borderRadius='full'
              boxSize='200px'
              objectFit={'cover'}
              src={profileImage}
              alt='Jason Talbert'></Image>
          </HStack>
        </VStack>
      </Flex>

  )
}


export default Hero;