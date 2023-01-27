import Swiper, {Navigation, Autoplay} from "swiper";

Swiper.use([Navigation, Autoplay]);

export default function slider() {
  const reviewsSlider = new Swiper('.reviews__slider', {
    speed: 1000,
    simulateTouch: false,
    spaceBetween: 20,
    navigation: {
      nextEl: '.reviews__slider-btn--next',
      prevEl: '.reviews__slider-btn--prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}