import React, { useEffect, useState } from 'react';
import { Link as RLink } from 'react-router-dom';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    Skeleton
} from '@chakra-ui/react';
import client from "../client";
import BlockContent from '@sanity/block-content-to-react';

const BlogTags = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag key={Math.random() * Math.PI} size={'md'} variant="solid" bg="#47A166" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

export const BlogAuthor = (props) => {
    const imgUrl = props.authors && props.authors.filter(author => author._id === props.authorRef)[0].imageUrl;
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                objectFit="cover"
                src={imgUrl ? imgUrl : undefined}
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

const BlogPost = (props) => {
    return (
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
            <RLink to={props.slug}>
                <Box w="100%">
                    <Box borderRadius="lg" overflow="hidden">
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                transform="scale(1.0)"
                                src={props.image}
                                alt={props.title}
                                objectFit="contain"
                                width="450px"
                                transition="0.3s ease-in-out"
                                _hover={{
                                    transform: 'scale(1.05)',
                                }}
                            />
                        </Link>
                    </Box>
                    <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
                    <Heading fontSize="xl" marginTop="2">
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            {props.title}
                        </Link>
                    </Heading>
                    <Text as="p" fontSize="md" marginTop="2">
                        <BlockContent blocks={!props.loading && props.body} projectId="82l3omkv" dataset="production" />
                    </Text>
                    <BlogAuthor
                        name={props.author}
                        authorRef={props.authorRef}
                        authors={props.authors}
                        loading={props.loading}
                        date={new Date('2021-04-06T19:01:27Z')}
                    />
                </Box>
            </RLink>
        </WrapItem>
    );
}


const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [authors, setAuthors] = useState({});

    useEffect(() => {
        const getPost = async () => await client.fetch(
            `*[_type == "post"] {
                    title,
                    slug,
                    body,
                    mainImage {
                        asset -> {
                            _id,
                            url
                        },
                        alt
                    },
                    "authorName": author->name,
                    author {
                        _ref
                    }
                }`
        ).then(data => { setPosts(data); setLoading(false); }).catch(err => console.error(err));
        getPost();
        const getAuthor = async () => await client.fetch(`
        *[_type == "author"] {
            "imageUrl": image.asset->url,
            _id
        }`).then(data => { setAuthors({ data }); setLoading(false) }).catch(err => console.error(err));
        getAuthor();
    }, []);

    return (
        <Container maxW={'8xl'} p="12">
            <Box p={5}>
                <Heading as="h1" color="#47A166" pl={6}>Latest Blog</Heading>
                <RLink to={!loading && posts[0].slug.current}>
                    <Box
                        marginTop={{ base: '1', sm: '5' }}
                        mb="12"
                        display="flex"
                        flexDirection={{ base: 'column', sm: 'row' }}
                        justifyContent="space-between">
                        <Box
                            display="flex"
                            flex="1"
                            marginRight="3"
                            position="relative"
                            alignItems="center">
                            <Box
                                width={{ base: '100%', sm: '85%' }}
                                zIndex="2"
                                marginLeft={{ base: '0', sm: '5%' }}
                                marginTop="5%">
                                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                    <Image
                                        borderRadius="lg"
                                        maxWidth="30rem"
                                        boxShadow="md"
                                        src={!loading ? posts[0].mainImage.asset.url : undefined}
                                        alt={!loading ? posts[0].title : "Blog post main cover"}
                                        objectFit="contain"
                                    />
                                </Link>
                            </Box>
                            <Box zIndex="1" width="100%" position="absolute" height="100%">
                                <Box
                                    bgGradient={useColorModeValue(
                                        'radial(green.500 1px, transparent 1px)',
                                        'radial(green.500 1px, transparent 1px)'
                                    )}
                                    backgroundSize="20px 20px"
                                    opacity="1"
                                    height="100%"
                                />
                            </Box>
                        </Box>
                        <Box
                            display="flex"
                            flex="1"
                            flexDirection="column"
                            justifyContent="center"
                            marginTop={{ base: '3', sm: '0' }}>
                            <BlogTags tags={['Engineering', 'Product']} />
                            <Heading marginTop="1">
                                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                    {!loading && posts[0].title}
                                </Link>
                            </Heading>
                            <Text
                                as="p"
                                marginTop="2"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="lg">
                            </Text>
                            <BlockContent blocks={!loading && posts[0].body} projectId="82l3omkv" dataset="production" />
                            <BlogAuthor
                                name={!loading && posts[0].authorName}
                                date={new Date('2021-04-06T19:01:27Z')}
                                authors={!loading && authors.data}
                                authorRef={!loading && posts[0].author._ref}
                            />
                        </Box>
                    </Box>
                </RLink>
            </Box>
            {/* All Blogs */}
            <Heading as="h2" marginTop="5" color="#47A166">
                All blog articles
            </Heading>
            <Divider marginTop="5" />
            <Wrap spacing="30px" marginTop="5">
                {!loading && posts.map(post => (
                    <BlogPost
                        key={post.slug.current}
                        slug={post.slug.current}
                        title={post.title}
                        author={post.authorName}
                        image={post.mainImage && post.mainImage.asset && post.mainImage.asset.url}
                        body={post.body} authorImage={post.authorImage && post.authorImage.asset && post.authorImage.asset.url}
                        loading={loading}
                        authors={authors.data}
                        authorRef={post.author._ref}
                    />
                ))}
            </Wrap>
        </Container>
    );
};

export default Blog;