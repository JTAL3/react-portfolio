
import React, { useRef } from 'react';
import { useState } from 'react';

import { validateEmail } from '../../helpers';

import emailjs from '@emailjs/browser';

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn
} from 'react-icons/md';
import { BsEnvelope, BsPerson } from 'react-icons/bs';

export function ContactForm() {

  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''


  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const form = useRef();

  const handleChange = (e) => {
    if (e.target.name === 'user_email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_8bvlagi', 'template_36gglk4', form.current, 'Qipkbg_kQLx-Nrs3f')
      .then((result) => {
        console.log('Submit Form', formState);
      }, (error) => {
        // show the user an error
      });
  };

  return (
    <Container id='contact-me' bg="black" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          id='contact-form'
          bg="gray.500"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 13, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 13 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 10 }}>
              <WrapItem>
                <Box>
                  <Heading align="center">Contact Me</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.300" fontSize='24' align="center">
                   
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={2} spacing={2} alignItems="flex-start">
                      <Box
                       
                        size="md"
                        height="28px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        align="center"
                        fontSize='22'
                        >
                       <b> Jason Talbert </b>

                      </Box>
                      <Button
                        as='a'
                        href="mailto:jason.talbert.jt@gmail.com"
                        size="md"
                        height="58px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid gray' }}
                        onClick={() => 'mailto:jason.talbert.jt@gmail.com'}
                        leftIcon={<MdEmail color="black" size="20px" />}>
                        jason.talbert.jt@gmail.com
                      </Button>
                      
                    </VStack>
                  </Box>

                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="black">
                    <VStack spacing={5}>
                      <form ref={form} onSubmit={sendEmail}>
                        <FormControl id="name" isRequired>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="black">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input defaultValue={name} onBlur={handleChange} name='user_name' type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="e-mail" isRequired>
                          <FormLabel>E-Mail</FormLabel>
                          <InputGroup borderColor="black">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsEnvelope color="gray.800" />}
                            />
                            <Input
                              defaultValue={email}
                              onBlur={handleChange}
                              name='user_email'
                              size="md"
                              type='text'
                              />
                          </InputGroup>
                      </FormControl>
                      <FormControl id="message" isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          defaultValue={message}
                          onBlur={handleChange}
                          name='message'
                          borderColor="black"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="send-button">
                        <Button
                          mt={3}
                          type='submit'
                          value="Send"
                          onSubmit={sendEmail}
                          variant="solid"
                          bg="gray.500"
                          color="white"
                          align="center"
                          _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </form>
                  </VStack>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </Flex>
    </Container >
  );
}

export default ContactForm;