import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from "../client";

export default function Blog() {
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
        <div>
            <h1>Blog</h1>
            <h2>You are viewing {posts.length} blog posts</h2>

            <div>
                {posts.map(post => (
                    <article key={post.slug.current}>
                        <img src={post.mainImage.asset.url} alt={post.title} />
                        <h4>{post.title}</h4>
                        <Link to={`/blog/${post.slug.current}`}>Read Full Article</Link>
                    </article>
                ))}
            </div>
        </div>
    )
}
