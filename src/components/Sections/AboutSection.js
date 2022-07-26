import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Box,
} from '@chakra-ui/react';
import { FaChild, FaArrowCircleRight, FaHands } from 'react-icons/fa';
import { MdFamilyRestroom } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function AboutSection() {
    return (
        <Box bg="#F3F5F7">
            <Container maxW={'100rem'} py={12}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'feature image'}
                            src={
                                'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                            }
                            objectFit={'cover'}
                        />
                    </Flex>
                    <Stack spacing={4}>
                        <Text
                            textTransform={'uppercase'}
                            color={'blue.400'}
                            fontWeight={600}
                            fontSize={'sm'}
                            bg={useColorModeValue('blue.50', 'blue.900')}
                            p={2}
                            alignSelf={'flex-start'}
                            rounded={'md'}>
                            Our Story
                        </Text>
                        <Heading>A non-profit Organization</Heading>
                        <Text color={'gray.500'} fontSize={'lg'} align="justify">
                            KVI is a non profit organization founded in 2008 by Dr. Eyob Kolcha balcha and his friends to operate in Ethiopia and specifically in Addis Ababa, Oromia, and Southern regions with the major objective of transforming the lives of children, women, families, and communities in need socially, economically, physically, emotionally, and politically. We have managed to impact more than 20,000 people since we started. We are currently reregistered by the concerned authority to operate legally in specific areas such as child protection, community empowerment, human rights, and capacity building.
                            {" "}<Link to="/about-us">
                                <Text color="#47A166" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 9 }}>
                                    Learn more <FaArrowCircleRight />
                                </Text>
                            </Link>
                        </Text>
                        <Stack
                            spacing={4}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.300', 'gray.700')}
                                />
                            }>
                            <Feature
                                icon={
                                    <Icon as={FaChild} color={'yellow.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                                text={'Child protection'}
                            />
                            <Feature
                                icon={<Icon as={FaHands} color={'green.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('green.100', 'green.900')}
                                text={'ChildCare Services'}
                            />
                            <Feature
                                icon={
                                    <Icon as={MdFamilyRestroom} color={'purple.500'} w={5} h={5} />
                                }
                                iconBg={useColorModeValue('purple.100', 'purple.900')}
                                text={'Reunification'}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}