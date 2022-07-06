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

const font = "'Rock Salt', cursive";
// const styles = theme = ({
//   introText: {
//     fontFamily: font,
//     color: "white"
//     }
//   }
// );


export function Hero() {
  return (

      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={coverImage}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <HStack maxW={'3xl'} align={'flex-start'} justify-content={'space-around'} spacing={6}>
            <VStack direction={'row'} align={'flex-start'} spacing={10}>
              <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                Welcome! I'm
              </Text>
              <Text
                fontFamily={font}
                color={'white'}
                fontWeight={400}
                lineHeight={1.4}
                fontSize={useBreakpointValue({ base: '5xl', md: '7xl' })}>
                Jason Talbert
              </Text>
              <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                and I'm a Full Stack Web Developer.
              </Text>
            </VStack>
            <Image
              borderRadius='full'
              boxSize='300px'
              objectFit={'cover'}
              src={profileImage}
              alt='Jason Talbert'></Image>
          </HStack>
        </VStack>
      </Flex>

  )
}


export default Hero;