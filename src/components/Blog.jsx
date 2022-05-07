import { useState, useEffect } from "react";
import client from "../client";
import { useParams, Link } from "react-router-dom";
import SanityBlockContent from "@sanity/block-content-to-react";
import { clientDetails } from "../utils";

const Blog = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == '${slug}']{title,body,mainImage{asset -> {_id, url}, alt},"name": author -> name,
       "authorImage": author -> image}`
      )
      .then((data) => setSinglePost(data[0]));
    setisLoading(false)
  }, [slug]);

  
  return (
    <>
      {isLoading ? (
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
          Loading...
        </h1>
      ) : (
        <section className="px-5 xl:max-w-6xl xl:mx-auto pb-10">
          <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl text-center mt-5 mb-10 ">
            {singlePost.title}
          </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              className="blog__image rounded-t mx-auto my-20"
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
            />
          )}
          <div>
            {/* <img src={singlePost.authorImage} alt={singlePost.name} /> */}
            <p>Author : {singlePost.name}</p>
          </div>

          <div className="block__content">
            <SanityBlockContent
              blocks={singlePost.body}
              projectId={clientDetails.projectId}
              dataset={clientDetails.dataset}
            />
          </div>

          <button className="pt-20">
            <Link
              to="/blog"
              className="py-2 my-4 px-6 rounded shado text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
            >
              See other Articles
            </Link>
          </button>
        </section>
      )}
    </>
  );
};

export default Blog;
