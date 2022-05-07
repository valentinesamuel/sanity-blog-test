import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'post'] {title,slug,body,mainImage{asset -> {_id,url},alt}}`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="px-5 my-5">
        <div className="px-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:max-w-8xl ">
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h4 className="text-xl mt-2">{post.title}</h4>
              <button className="mt-5 mb-10">
                <Link
                  className="py-2 px-6 rounded shado text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                  to={`/blog/${post.slug.current}`}
                >
                  Read Full Article
                </Link>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogList;
