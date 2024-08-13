import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Profile from "../../assets/Profile.avif";
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug text-gray-800">
        Our Customers
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {["Mark Ping", "Jane Doe", "John Smith"].map((name, index) => (
          <SwiperSlide
            key={index}
            className="shadow-2xl bg-white py-8 px-6 md:mx-5 rounded-xl border border-gray-200"
          >
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-lg"></i>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-5 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis quos quis animi sapiente perferendis ducimus? Aliquid
                voluptates adipisci, assumenda, tenetur aperiam totam
                repellendus doloremque dolor voluptate nam ut inventore aliquam.
              </p>
              <div className="flex flex-col items-center">
                <img
                  alt={`avatar of ${name}`}
                  src={Profile}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <h5 className="text-lg font-semibold text-gray-900">{name}</h5>
                <p className="text-sm text-gray-500">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
