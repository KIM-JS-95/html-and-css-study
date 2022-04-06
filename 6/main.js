var mySwiper = new Swiper('.portfolio .swiper-container', {
    // Optional parameters
    direction: 'horizontal',		// 가로 슬라이드
    loop: true,
    slidesPerView: 3,		// 한 영역에 보이는 슬라이드 수
    spaceBetween: 16,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })