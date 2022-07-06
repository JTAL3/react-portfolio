import React from 'react';
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import coverImage from '../../assets/header-images/somethinggreat.jpg';
import profileImage from '../../assets/header-images/avatar.jpg';


import {
  Box,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Button,
  useDisclosure,
  useColorModeValue,
  Text,
  
} from '@chakra-ui/react';

const font = "Arial";



export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    
      <Box bg={useColorModeValue('gray.500', 'gray.500')} px={6}>
        <Flex h={16}>
          
          
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              >
              <Text fontFamily={font}
                color={'white'}
                as='a'
                href='/react-portfolio'
                fontWeight='bold' fontSize='2xl'>Jason Talbert</Text>
                </HStack>
                <Spacer />
              <HStack>
              <Button
              as='a'
              href='/react-portfolio/#about-me'>
                About Me
              </Button>
              <Button
              as='a'
              href='/projects'>
                Projects
              </Button>
              <Button
              as='a'
              href='/react-portfolio/#contact-me'>
                Contact Me
              </Button>
              </HStack>
          
        </Flex>
      </Box>

      
  )
}


export default Header;