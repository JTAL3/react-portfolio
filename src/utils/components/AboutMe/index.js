import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import {
    Box,
    Container,
    Flex,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export function AboutMe() {
    return (
        <>
        <Container id='contact-me' bg="gray.500" maxW="full" mt={0} centerContent overflow="hidden" padding={6}>
      
                    <h2>          
                        <Box fontSize='2xl' color='white' fontWeight= 'bold' flex='1' textAlign='left' pb={3}>
                            About Me
                        </Box>
                                
                            
                    </h2>
                        <Box  fontSize='lg' pb={7} maxW="80%">
                            Hello! I am Jason. I carry an Associates Degree in Advertising and Graphic Design and have recently completed a Full-Stack Web Development bootcamp at UNCC. I'm passionate about design, creativity, and in my spare time I enjoy sports. My past as an athlete, as well as coach, has taught me a lot about teamwork and development. I look forward to taking the next steps in my Web Development career!
                        
                        </Box>
                    
                    <h2>
                            
                        <Box fontSize='2xl' color='white' fontWeight= 'bold' flex='1' textAlign='left' pb={3}>
                             Current Skills
                        </Box>
                                
                    </h2>
                        <Box  fontSize='lg' pb={7} maxW="80%">
                            Current Knowledge: HTML, CSS, JavaScript, Node.js, NoSQL, React, Express.js, SQL, Git, MVCs, PWAs, APIs, Mongooge and MongoDB and more.
                        </Box>

             

            
            </Container>
        </>

    )
};

export default AboutMe;