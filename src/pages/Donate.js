import React from 'react'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { BsPaypal, BsLock, BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";

export default function Donate() {
    return (
        <Flex w="100%" h="55vh" justifyContent="center" alignItems="center">
            <Heading></Heading>
            <Flex w="container.sm" justifyContent="center" alignItems="center" border="1px" borderColor="gray.200" borderRadius="md" p="6">
                <Accordion allowToggle width="full">
                    <a href="https://www.paypal.com" target="_blank">
                        <AccordionItem rounded="md" p="4">
                            <AccordionButton>
                                <Flex justifyContent="space-evenly" alignItems="center" w="full">
                                    <Flex flex='1' textAlign='left' alignItems="center" gap="2" fontSize="xl" fontWeight="semibold">
                                        <BsPaypal />Paypal
                                    </Flex>
                                    <Text fontSize="sm" color="#47A166" fontWeight="bold" mx="4"><BsLock /></Text>
                                </Flex>
                                <BsFillArrowRightCircleFill />
                            </AccordionButton>
                        </AccordionItem>
                    </a>


                    <AccordionItem rounded="md" p="4">
                        <h2>
                            <AccordionButton>
                                <Flex justifyContent="space-evenly" alignItems="center" w="full">
                                    <Flex flex='1' textAlign='left' alignItems="center" gap="2" fontSize="xl" fontWeight="semibold">
                                        <FaRegMoneyBillAlt fontSize={30} />Banking Information
                                    </Flex>
                                    <Text fontSize="sm" color="#47A166" fontWeight="bold" mx="4"><BsLock /></Text>
                                </Flex>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} lineHeight={6} style={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "1rem" }} fontStyle="italic">
                            <div>
                                Comercial Bank of Ethiopia (CBE) - Bole branch
                                <br />
                                101010101010
                            </div>
                            <div>
                                Dashen Bank -  CMC branch
                                <br />
                                101010101010
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </Flex>
    )
}
