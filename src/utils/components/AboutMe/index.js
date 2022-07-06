import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export function AboutMe() {
    return (
        <>
            <Box id='about-me' w="full" >

                <Accordion defaultIndex={[0]} allowMultiple p='5' shadow='dark-lg'>
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'blue.900', color: 'white' }}>
                                <Box fontSize='2xl' fontWeight= 'bold' flex='1' textAlign='left'>
                                    About Me
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  fontSize='xl' pb={4}>
                            Hello! I am Jason. I carry an Associates Degree in Advertising and Graphic Design and have recently completed a Full-Stack Web Development bootcamp at UNCC. I'm passionate about design, creativity, and in my spare time I enjoy sports. My past as an athlete, as well as coach, has taught me a lot about teamwork and development. I look forward to taking the next steps in my Web Development career!
                        </AccordionPanel>
                    </AccordionItem>

                
                        
                    <AccordionItem>
                        <h2>
                            <AccordionButton _expanded={{ bg: 'blue.900', color: 'white' }}>
                                <Box fontSize='2xl' fontWeight= 'bold' flex='1' textAlign='left'>
                                    My Skills
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel  fontSize='xl' pb={4}>
                            My skills include: HTML, CSS, JavaScript, Node.js, Express.js, SQL, Git, NoSQL, React, MVCs, PWAs, APIs, Mongooge and MongoDB amoung verious other frameworks and libraries.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>

            
        </>

    )
};

export default AboutMe;