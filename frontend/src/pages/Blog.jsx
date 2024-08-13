import { blog1, blog2, blog3 } from "../assets/blog-book/index";

const Blog = () => {
  return (
    <div className="w-full mt-16 py-12 px-4 lg:px-24">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog post 1 */}
        <article className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <img
            src={blog1}
            alt="Book Cover 1"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Title of Blog Post 1</h2>
          <p className="text-gray-700 mb-4">
            A brief description of the blog post content goes here. This can
            include a summary or teaser to entice readers to click and read
            more.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Read more
          </a>
        </article>

        {/* Blog post 2 */}
        <article className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <img
            src={blog2}
            alt="Book Cover 2"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Title of Blog Post 2</h2>
          <p className="text-gray-700 mb-4">
            A brief description of the blog post content goes here. This can
            include a summary or teaser to entice readers to click and read
            more.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Read more
          </a>
        </article>

        {/* Blog post 3 */}
        <article className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <img
            src={blog3}
            alt="Book Cover 3"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Title of Blog Post 3</h2>
          <p className="text-gray-700 mb-4">
            A brief description of the blog post content goes here. This can
            include a summary or teaser to entice readers to click and read
            more.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Read more
          </a>
        </article>
      </section>
    </div>
  );
};

export default Blog;
