import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {} from "swiper/core";
import adsImg from "../../Assets/Imgs/college.jpg";
import "swiper/swiper-bundle.css";
import SwiperCore, {
  Navigation,
  Scrollbar,
  A11y,
  EffectFade,
  Grid,
  Pagination,
} from "swiper";

import "swiper/scss";
import "swiper/css/bundle";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/grid";
import "./Ads.scss";
import AdsCard from "../AdsCard/AdsCard";
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const Ads = () => {
  const ads = [
    { title: "فتح باب القبول لدورة مارس ٢٠٢٣", date: "27 Oct 2022" },

    {
      title: "تقارير فردية وجماعية لرسائل الماجستير و الدكتوراة",
      date: "30 Jan 2023",
    },
    { title: "افاده المجلات لتشكيل مناقشة الدكتوراة", date: "16 Nov 2022" },
    { title: "النشر فى المجلة العلمية للكلية ", date: "27 Oct 2022" },
    {
      title: "امتحان قبول للمتقدمين لرجة الماجستير والكتوراة- قسم مدنى",
      date: "27 Oct 2022",
    },
    { title: "فتح باب القبول لدورة مارس ٢٠٢٣", date: "27 Oct 2022" },
  ];

  return (
    <section className="ads">
      <div className="ads-head my-8">
        <p>الإعلانات</p>
      </div>

      <div className="carousel">
        <Swiper
          modules={[Navigation, Scrollbar, A11y, EffectFade, Grid]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={true}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {ads.map((item) => {
            return (
              <SwiperSlide>
                <AdsCard title={item.title} date={item.date} />
              </SwiperSlide>
            );
          })}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Ads;
