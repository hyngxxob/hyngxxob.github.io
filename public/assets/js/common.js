$(document).ready(function() {
    let slide = 0;
    const totalSlides = $('.slide').length;

    // Next 버튼 클릭 시
    $('.next').on('click', function() {
      slide = (slide + 1) % totalSlides;
      updateSlidePosition();
    });

    // Prev 버튼 클릭 시
    $('.prev').on('click', function() {
      slide = (slide - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    });

    // Bullet 클릭 시
    $('.bullet').on('click', function() {
      slide = $(this).index();
      updateSlidePosition();
    });

    // Bullet 생성
    for (let i = 0; i < totalSlides; i++) {
      $('.bullets').append('<div class="bullet"></div>');
    }
    $('.bullet').eq(slide).addClass('active');

    // 슬라이드 위치 업데이트
    function updateSlidePosition() {
      $('.slide-container').css('transform', `translateX(-${slide * 100}%)`);
      $('.bullet').removeClass('active');
      $('.bullet').eq(slide).addClass('active');
    }
});
