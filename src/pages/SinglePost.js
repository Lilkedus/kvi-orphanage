import BlockContent from "@sanity/block-content-to-react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { slug } = useParams();

    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"] {
                title,
                body,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                "authorName": author -> name,
            }`
        ).then(data => { setSinglePost(data[0]); setIsLoading(false) }).catch(err => console.error(err));
    }, [slug]);

    return (
        <>
            {isLoading ? <h1>Loading...</h1> : (
                <Container maxW={'8xl'} p="12">
                    <Flex flexDirection="column" p={5} alignItems={["center", "center", "center", "start"]}>
                        <Heading as="h1" color="#47A166" pl={6}>{!isLoading && singlePost.title}</Heading>
                        <Flex
                            alignItems={["center", "center", "center", "center"]}
                            flexDirection={['column', 'column', 'column', 'row']}
                            marginTop={{ base: '1', sm: '5' }}
                            mb="12"
                        >
                            <Image src={!isLoading ? singlePost.mainImage.asset.url : undefined} alt={!isLoading ? singlePost.title : "Blog post main cover"} width={["full", "full", "full", "full"]} height="450px" objectFit="cover" />
                            <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="start"
                                marginLeft="12"
                            >
                                <Text fontWeight="semibold" fontSize="3xl">By {!isLoading && singlePost.authorName}</Text>
                                <Text fontSize="xl">
                                    <BlockContent blocks={!isLoading && singlePost.body} projectId="82l3omkv" dataset="production" />
                                </Text>
                                <Link to="/blog">
                                    <Button my={5}>
                                        Read more articles
                                    </Button>
                                </Link>
                            </Box>
                        </Flex>
                    </Flex>
                </Container>
            )
            }
        </>
    );
}