import React from 'react';

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  VStack,
  Button,
  HStack,
} from '@chakra-ui/react';

import { Wrap, WrapItem } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

import PROJ1 from '../../assets/project-images/datamammoth.jpg';
import PROJ2 from '../../assets/project-images/weather-dashboard.png';
import PROJ3 from '../../assets/project-images/work-scheduler.png';
import PROJ4 from '../../assets/project-images/Pick-a-Flic.jpg';
import PROJ5 from '../../assets/project-images/budget-tracker.png';
import PROJ6 from '../../assets/project-images/runbuddy.jpg';

export function Project() {
  return (
    <Center py={12} ps={6} bg={'blue.50'}>
      <Flex>
        <Wrap justify='center' spacing={10}>
          <WrapItem>
            <Box
              id="projects"
              role={'group'}
              p={6}
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Box
                rounded={'lg'}
                pos={'relative'}
                height={'230px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${PROJ1})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={PROJ1}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  HTML/CSS
                </Text>
                <Heading color={'#04054B'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Data Mammoth
                </Heading>
                <HStack pt={5}>
                  <Button
                  as='a'
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  href='https://felixa-github.github.io/Data-Mammoth/'>
                      Deployed App
                  </Button>
                  <Button
                  as='a'
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  href='https://github.com/JTAL3/Data-Mammoth'>
                      GitHub Repo
                  </Button>
                </HStack>
              </Stack>
              
            </Box>
          </WrapItem>
          {/* <Spacer /> */}
          <WrapItem>
            <Box
              role={'group'}
              p={6}
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Box
                rounded={'lg'}
                pos={'relative'}
                height={'230px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage:`url(${PROJ2})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={PROJ2}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  HTML/CSS
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Weather-Dashboard
                </Heading>
                <HStack pt={5}>
                  <Button
                  as='a'
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  href='https://jtal3.github.io/weather-dashboard/'>
                      Deployed App
                  </Button>
                  <Button
                  as='a'
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  href='https://github.com/JTAL3/weather-dashboard'>
                      GitHub Repo
                  </Button>
                </HStack>
              </Stack>
            </Box>
          </WrapItem>
          {/* <Spacer /> */}
          <WrapItem>
            <Box
              role={'group'}
              p={6}
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Box
                rounded={'lg'}
                pos={'relative'}
                height={'230px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${PROJ3})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={PROJ3}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  HTML/CSS/JavaScript
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Work-Scheduler
                </Heading>
                <HStack pt={5}>
                  <Button
                  as='a'
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  href='https://jtal3.github.io/work-scheduler/'>
                      Deployed App
                  </Button>
                  <Button
                  as='a'
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  href='https://github.com/JTAL3/work-scheduler'>
                      GitHub Repo
                  </Button>
                </HStack>
              </Stack>
            </Box>
          </WrapItem>
          {/* <Spacer /> */}
          <WrapItem>
            <Box
              role={'group'}
              p={6}
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Box
                rounded={'lg'}
                pos={'relative'}
                height={'230px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${PROJ4})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={PROJ4}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                 HTML/CSS/JavaScript/PWA
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Pick-a-Flic
                </Heading>
                <HStack pt={5}>
                  <Button
                  as='a'
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  href='https://jtal3.github.io/Pick-a-Flic/'>
                      Deployed App
                  </Button>
                  <Button
                  as='a'
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  href='https://github.com/JTAL3/Pick-a-Flic'>
                      GitHub Repo
                  </Button>
                </HStack>
              </Stack>
            </Box>
          </WrapItem>
          {/* <Spacer /> */}
          <WrapItem>
            <Box
              role={'group'}
              p={6}
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Box
                rounded={'lg'}
                pos={'relative'}
                height={'230px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${PROJ5})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={PROJ5}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                HTML/CSS/JavaScript/APIs
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Budget-Tracker
                </Heading>
                <HStack pt={5}>
                  <Button
                  as='a'
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  href='https://morning-oasis-30859.herokuapp.com/'>
                      Deployed App
                  </Button>
                  <Button
                  as='a'
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  href='https://github.com/JTAL3/budget-tracker'>
                      GitHub Repo
                  </Button>
                </HStack>
              </Stack>
            </Box>
          </WrapItem>
          {/* <Spacer /> */}
          <WrapItem>
            <Box
              role={'group'}
              p={6}
              maxW={'330px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Box
                rounded={'lg'}
                pos={'relative'}
                height={'230px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${PROJ6})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(25px)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={PROJ6}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                HTML/CSS/JavaScript/MVC
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  Run Buddy
                </Heading>
                <HStack pt={5}>
                  <Button
                  as='a'
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  href='https://lernantino.github.io/run-buddy/'>
                      Deployed App
                  </Button>
                  <Button
                  as='a'
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}
                  href='https://github.com/JTAL3/run-buddy'>
                      GitHub Repo
                  </Button>
                </HStack>
              </Stack>
            </Box>
          </WrapItem>
        </Wrap>
      </Flex>
    </Center>

  );
}

export default Project;