import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const builders = [
  { id: 1, image: "https://gurujihomes.in/our.png" },
  { id: 2, image: "https://gurujihomes.in/our2.png" },
  { id: 3, image: "https://gurujihomes.in/our3.webp" },
  { id: 4, image: "https://th.bing.com/th/id/R.57ffc4d192a6ae05244a6b8196bcaa5c?rik=I2bmor6iX4VBMQ&riu=http%3a%2f%2fsocietycity.in%2fres%2fimages%2famolik.png&ehk=C0YmEqxbmdqUvwibDzyNhKkn8Y9qpOKn3KpnX3uaV%2bM%3d&risl=&pid=ImgRaw&r=0" },
  { id: 5, image: "https://gurujihomes.in/our3.png" },
  { id: 6, image: "https://gurujihomes.in/our3.png" },
];

const OurBuilders = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-xl md:text-4xl font-bold mb-10">
          Our Builders
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {builders.map((builder) => (
            <SwiperSlide key={builder.id}>
              <div className="bg-white rounded-xl shadow-md p-3 flex items-center justify-center h-32">
                <img
                  src={builder.image}
                  alt="builder logo"
                  className="max-h-16 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default OurBuilders;
