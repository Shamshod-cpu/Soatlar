
  const backgroundColors = ['#FFCDD2', '#C8E6C9', '#BBDEFB', '#FFF9C4', '#D1C4E9'];

    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    // Смена фона при переключении слайда
    swiper.on('slideChange', function () {
      const colorIndex = swiper.realIndex % backgroundColors.length;
      document.body.style.backgroundColor = backgroundColors[colorIndex];
    });

    // Установка начального цвета фона
    document.body.style.backgroundColor = backgroundColors[0];