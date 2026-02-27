import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    text: "Working with Guruji Homes was an absolute pleasure. The moment we contacted them, they guided us through the entire buying process with patience and professionalism.",
    name: "Amit",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text: "We had been searching for months, but it wasn't until we worked with Guruji Homes that we truly felt supported. Their team is knowledgeable and professional.",
    name: "Manish",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    text: "What really sets Guruji Homes apart is their genuine care for their clients. From start to finish, they made sure we were informed and comfortable with every decision we made.",
    name: "Neha",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    text: "Excellent service and amazing support throughout our journey. Highly recommended!",
    name: "Rahul",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className=" py-20 px-8 lg:px-0">
      <div className="max-w-7xl mx-auto px-13 text-center overflow-hidden">

        {/* Small Badge */}
        <div className="inline-block bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm mb-6">
          Our Testimonial
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-14">
          Clients Feedback
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="overflow-visible!"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl shadow-md p-8  text-left h-[250px] border border-gray-200">

                <p className="text-gray-600 leading-7 mb-8 line-clamp-4">
                  {item.text}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}