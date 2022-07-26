// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import client from "../client";

// export default function Blog() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         client.fetch(
//             `*[_type == "post"] {
//                 title,
//                 slug,
//                 body,
//                 mainImage {
//                     asset -> {
//                         _id,
//                         url
//                     },
//                     alt
//                 }
//             }`
//         ).then(data => setPosts(data)).catch(err => console.error(err));
//     }, []);


//     return (
//         <div>
//             <h1>Blog</h1>
//             <h2>You are viewing {posts.length} blog posts</h2>

//             <div>
//                 {posts.map(post => (
//                     <article key={post.slug.current}>
//                         <img src={post.mainImage && post.mainImage.asset && post.mainImage.asset.url} alt={post.title} />
//                         <h4>{post.title}</h4>
//                         <Link to={`/blog/${post.slug.current}`}>Read Full Article</Link>
//                     </article>
//                 ))}
//             </div>
//         </div>
//     )
// }



import React, { useEffect, useState } from 'react';
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
    VStack,
} from '@chakra-ui/react';
import client from "../client";

const BlogTags = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" bg="#47A166" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

export const BlogAuthor = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                </Text>
                <BlogAuthor
                    name={props.author}
                    date={new Date('2021-04-06T19:01:27Z')}
                />
            </Box>
        </WrapItem>
    );
}


const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client.fetch(
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
                    }
                }`
        ).then(data => setPosts(data)).catch(err => console.error(err));
    }, []);

    return (
        <Container maxW={'8xl'} p="12">
            <Box p={5}>
                <Heading as="h1" color="#47A166" pl={6}>Latest Blog</Heading>
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
                                    src={
                                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                    }
                                    alt="some good alt text"
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
                                Blog article title
                            </Link>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </Text>
                        <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
                    </Box>
                </Box>
            </Box>
            {/* All Blogs */}
            <Heading as="h2" marginTop="5">
                All blog articles
            </Heading>
            <Divider marginTop="5" />
            <Wrap spacing="30px" marginTop="5">
                <BlogPost author="John Doe" title="New Donation" image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" />
                <BlogPost author="John Doe" title="New Donation" image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" />
                <BlogPost author="John Doe" title="New Donation" image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" />
                {posts.map(post => (
                    <BlogPost key={post.slug.current} title={post.title} author={post.authorName} image={post.mainImage && post.mainImage.asset && post.mainImage.asset.url} />
                ))}
            </Wrap>

        </Container>
    );
};

export default Blog;