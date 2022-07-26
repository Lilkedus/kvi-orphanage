import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../client";

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
        ).then(data => setSinglePost(data[0])).catch(err => console.error(err));
        setIsLoading(false);
    }, [slug]);

    return (
        <>
            {isLoading ? <h1>Loading...</h1> : (
                <section>
                    <h1>{singlePost.title}</h1>
                    {singlePost.mainImage && singlePost.mainImage.asset &&
                        <img src={singlePost.mainImage.asset.url} alt={singlePost.title} />
                    }
                    <p>By {singlePost.authorName}</p>

                    <button>
                        <Link to="/blog">Read more articles</Link>
                    </button>
                </section>
            )
            }
        </>
    )
}
