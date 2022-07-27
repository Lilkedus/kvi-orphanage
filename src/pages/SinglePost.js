import BlockContent from "@sanity/block-content-to-react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";
import {
    Box,
    Button,
    Container,
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

    console.log(singlePost);

    return (
        <>
            {isLoading ? <h1>Loading...</h1> : (
                // <section>
                //     <h1>{!isLoading && singlePost.title}</h1>
                //     <img src={!isLoading && singlePost.mainImage.asset.url} alt={!isLoading && singlePost.title} />
                //     <p>By {!isLoading && singlePost.authorName}</p>
                //     <BlockContent blocks={!isLoading && singlePost.body} projectId="82l3omkv" dataset="production" />

                //     <button>
                //         <Link to="/blog">Read more articles</Link>
                //     </button>
                // </section>
                <Container maxW={'8xl'} p="12">
                    <Box p={5}>
                        <Heading as="h1" color="#47A166" pl={6}>{!isLoading && singlePost.title}</Heading>
                        <Box
                            display="flex"
                            marginTop={{ base: '1', sm: '5' }}
                            mb="12"
                        >
                            <Image src={!isLoading ? singlePost.mainImage.asset.url : undefined} alt={!isLoading ? singlePost.title : "Blog post main cover"} width="250px" height="250px" />
                            <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="start"
                                marginLeft="12"
                            >
                                <Text fontWeight="semibold" fontSize="2xl">By {!isLoading && singlePost.authorName}</Text>
                                <BlockContent blocks={!isLoading && singlePost.body} projectId="82l3omkv" dataset="production" />
                                <Link to="/blog">
                                    <Button fontStyle="italic">
                                        Read more articles
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            )}
        </>
    );
}