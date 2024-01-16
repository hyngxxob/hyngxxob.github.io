function hdiContent() {
    const picwrap = document.createElement('div');
    const picinner = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');
    const leftbtn = document.createElement('button');
    const rightbtn = document.createElement('button');
    
    picwrap.classList.add('slider-container');
    picinner.classList.add('slider');

    img1.src = "public/assets/img/snapshot/hdi/pricepage_1.png";
    img1.classList.add('slide');
    img1.style.width = '100%';
    img2.src = "public/assets/img/snapshot/hdi/pricepage_2.png";
    img2.classList.add('slide');
    img2.style.width = '100%';
    img3.src = "public/assets/img/snapshot/hdi/pricepage_3.png";
    img3.classList.add('slide');
    img3.style.width = '100%';
    img4.src = "public/assets/img/snapshot/hdi/pricepage_4.png";
    img4.classList.add('slide');
    img4.style.width = '100%';

    leftbtn.classList.add('arrow', 'left');
    rightbtn.classList.add('arrow', 'right');
    
    picinner.appendChild(img1);
    picinner.appendChild(img2);
    picinner.appendChild(img3);
    picinner.appendChild(img3);

    picwrap.appendChild(leftbtn);
    picwrap.appendChild(rightbtn);

    picwrap.appendChild(picinner);

    let currentIndex = 0;

    function showSlide(index) {
        currentIndex = index;
        const translateValue = -index * 100 + '%';
        picinner.style.transform = 'translateX(' + translateValue + ')';
    }

    function nextSlide() {
        // if (currentIndex < slides.length - 1) {
        if (currentIndex < picinner.childElementCount - 1) {
            showSlide(currentIndex + 1);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        }
    }

    // 터치 제스처
    let touchStartX = 0;
    let touchEndX = 0;

    // picinner.addEventListener('touchstart', (event) => {
    //     touchStartX = event.touches[0].clientX;
    // });

    // picinner.addEventListener('touchend', (event) => {
    //     touchEndX = event.changedTouches[0].clientX;
    //     handleGesture();
    // });

    // function handleGesture() {
    //     const gestureDistance = touchEndX - touchStartX;

    //     if (gestureDistance > 50) {
    //         prevSlide();
    //     } else if (gestureDistance < -50) {
    //         nextSlide();
    //     }
    // }

    // 터치 제스처를 사용한 슬라이딩
    picinner.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
    });

    picinner.addEventListener('touchmove', (event) => {
        event.preventDefault(); // 스와이프 동작 중에 기본 스크롤 방지
    });

    picinner.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].clientX;
        handleGesture();
    });

    function handleGesture() {
        const gestureDistance = touchEndX - touchStartX;

        if (gestureDistance > 50) {
        prevSlide();
        } else if (gestureDistance < -50) {
        nextSlide();
        }
    }

    // 좌우 슬라이드 이동 버튼
    leftbtn.addEventListener('click', ()=> {
        prevSlide();
    });

    rightbtn.addEventListener('click', ()=> {
        nextSlide();
    });
    
    return picwrap;
}