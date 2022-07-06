import React from 'react';


import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';


const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.300', 'whiteAlpha.300'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.500', 'gray.900')}
      color={useColorModeValue('white', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'1xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2022 Jason Talbert</Text>
        <Stack direction={'row'} spacing={2}>
          <SocialButton label={'Github'} href={'https://github.com/JTAL3'}>
            <FaGithub size={30}/>
          </SocialButton>
          <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/jasontalbert/'}>
            <FaLinkedin size={30}/>
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;