import { Link } from "react-router-dom";
import {
    Box,
    Button,
    Flex,
    Image,
    Heading,
    Stack,
    Text
} from "@chakra-ui/react";
import AboutPage from "./AboutPage";

export default function Homepage({
    title,
    subtitle,
    image,
    ctaLink,
    ctaText,
}) {
    return (
        <div>
            <Flex
                align="center"
                justify={{ base: "center", md: "space-around", xl: "space-between" }}
                direction={{ base: "column-reverse", md: "row" }}
                wrap="no-wrap"
                minH="70vh"
                px={8}
                mb={16}
            >
                <Stack
                    spacing={4}
                    w={{ base: "80%", md: "40%" }}
                    align={["center", "center", "flex-start", "flex-start"]}
                >
                    <Heading
                        as="h1"
                        size="xl"
                        fontWeight="bold"
                        color="#086F42"
                        textAlign={["center", "center", "left", "left"]}
                    >
                        Welcome to Kingdom Vision International (KVI)!
                    </Heading>
                    <Heading
                        as="h2"
                        size="md"
                        color="#086F42"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight={1.5}
                        textAlign={["center", "center", "left", "left"]}
                    >
                        The Kingdom Vision International non-profit organization was established in 2008 to improve the lives of children, families, and communities on a social, physical, economic, emotional, and political level.
                    </Heading>
                    <Link to="/donate">
                        <Button
                            bg="#47A166"
                            color="white"
                            borderRadius="8px"
                            py="4"
                            px="4"
                            lineHeight="1"
                            size="md"
                        >
                            Donate now
                        </Button>
                    </Link>
                    <Text
                        fontSize="xs"
                        mt={2}
                        textAlign="center"
                        color="#086F42"
                        opacity="0.6"
                    >
                        Paypal, Mastercard, & Commerical Bank
                    </Text>
                </Stack>
                <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                    {/* <Image src="https://source.unsplash.com/collection/404339/800x600" size="100%" rounded="1rem" shadow="2xl" /> */}
                    <Image src="https://i.postimg.cc/13RHQw83/image.png" size="100%" rounded="1rem" shadow="2xl" />
                </Box>
            </Flex>
            <AboutPage />
        </div>
    );
}