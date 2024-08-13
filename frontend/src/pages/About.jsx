import { about1, about2, about3 } from "../assets/about-books/index";

const About = () => {
  return (
    <div className="w-full mt-16 py-12 px-4 lg:px-24">
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-6">
          We are passionate about books and have been serving book lovers for
          many years. Our bookstore is dedicated to bringing you a wide range of
          books, from bestsellers to rare finds. We believe in the power of
          reading and the impact it has on personal growth and knowledge.
        </p>
        <p className="text-gray-700 mb-6">
          Our mission is to create a space where readers can discover, explore,
          and connect with books they love. Whether you're looking for the
          latest releases or timeless classics, our curated selection has
          something for everyone.
        </p>
        <p className="text-gray-700">
          Thank you for being a part of our journey. We look forward to serving
          you and helping you find the perfect book!
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src={about1}
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">Jane Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img
              src={about2}
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">John Smith</h3>
            <p className="text-gray-600">Chief Editor</p>
          </div>
          <div className="text-center">
            <img
              src={about3}
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">Emily Johnson</h3>
            <p className="text-gray-600">Marketing Director</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
