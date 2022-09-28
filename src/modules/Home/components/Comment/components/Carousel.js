import { Swiper, SwiperSlide } from "swiper/react";
import avatar1 from "assets/images/avatar1.jpg";
import avatar2 from "assets/images/avatar2.jpg";
import avatar3 from "assets/images/avatar3.jpg";
import avatar4 from "assets/images/avatar4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import file css cho carousel
import "./carousel.scss";
// import required modules
import { Pagination, Autoplay, Keyboard } from "swiper";
const Carousel = () => {
  return (
    <div className="swiper__wrapper">
      <Swiper
        keyboard={{
          enabled: true,
        }}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        slidesPerGroupSkip={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-wrapper">
            <div className="avatar">
              <img src={avatar1} alt="avatar" />
            </div>

            <div className="introduce">
              <p className="name">Nguyễn Văn Lù</p>
              <p className="location">Hồ Chí Minh</p>
            </div>

            <div className="vertical"></div>

            <div className="response">
              <p>
                “Khóa học dễ hiểu, cơ bản, phù hợp với những bạn nào mới tìm
                hiểu về lập trình. Giảng viên hỗ trợ nhiệt tình, tận tâm, truyền
                đạt dễ hiểu, ngắn gọn, súc tích..”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <div className="avatar">
              <img src={avatar2} alt="avatar" />
            </div>

            <div className="introduce">
              <p className="name">Trần Hoàng Lửa</p>
              <p className="location">Đồng Nai</p>
            </div>

            <div className="vertical"></div>

            <div className="response">
              <p>
                “Khóa học bổ ích, giúp cho học viên rèn được kỹ năng tư duy, nắm
                chắc các kiến thức nền sau mỗi buổi học.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <div className="avatar">
              <img src={avatar3} alt="avatar" />
            </div>

            <div className="introduce">
              <p className="name">Nguyễn Na Mi</p>
              <p className="location">Quảng Bình</p>
            </div>

            <div className="vertical"></div>

            <div className="response">
              <p>
                “Khoá học rất chất lượng, môi trường học dễ tiếp thu. Truyền đạt
                kiến thức vững chắc. Dạy cách tối ưu code và search từ khoá trên
                google rất hiệu quả.”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <div className="avatar">
              <img src={avatar4} alt="avatar" />
            </div>

            <div className="introduce">
              <p className="name">Bùi Văn Lạc</p>
              <p className="location">Khánh Hoà</p>
            </div>

            <div className="vertical"></div>

            <div className="response">
              <p>
                “Khoá học rất hữu ích, tài liệu học đầy đủ, kiến thức đào tạo
                rất sát với thực tế khi đi làm. Giảng viên có kinh nghiệm và
                chuyên môn cao, chỉ dẫn rất nhiệt tình, tận tâm và hiệu quả.”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
