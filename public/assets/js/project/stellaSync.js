function stellaSyncContent() {
    const picwrap = document.createElement('div');
    const picinner = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');
    const img5 = document.createElement('img');
    const img6 = document.createElement('img');
    const img7 = document.createElement('img');
    const img8 = document.createElement('img');
    const leftbtn = document.createElement('button');
    const rightbtn = document.createElement('button');
    
    picwrap.classList.add('slider-container');
    picinner.classList.add('slider');

    img1.src = "public/assets/img/snapshot/ticketSolution/login.png";
    img1.classList.add('slide');
    img1.style.width = '100%';
    img2.src = "public/assets/img/snapshot/ticketSolution/home.png";
    img2.classList.add('slide');
    img2.style.width = '100%';
    img3.src = "public/assets/img/snapshot/ticketSolution/ticket.png";
    img3.classList.add('slide');
    img3.style.width = '100%';
    img4.src = "public/assets/img/snapshot/ticketSolution/bp-contact.png";
    img4.classList.add('slide');
    img4.style.width = '100%';
    img5.src = "public/assets/img/snapshot/ticketSolution/bp-customer.png";
    img5.classList.add('slide');
    img5.style.width = '100%';
    img6.src = "public/assets/img/snapshot/ticketSolution/bp-employee.png";
    img6.classList.add('slide');
    img6.style.width = '100%';
    img7.src = "public/assets/img/snapshot/ticketSolution/slackGeneral.png";
    img7.classList.add('slide');
    img7.style.width = '100%';
    img8.src = "public/assets/img/snapshot/ticketSolution/viewmaster.png";
    img8.classList.add('slide');
    img8.style.width = '100%';

    leftbtn.classList.add('arrow', 'left');
    rightbtn.classList.add('arrow', 'right');
    
    picinner.appendChild(img1);
    picinner.appendChild(img2);
    picinner.appendChild(img3);
    picinner.appendChild(img4);
    picinner.appendChild(img5);
    picinner.appendChild(img6);
    picinner.appendChild(img7);
    picinner.appendChild(img8);

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

    picinner.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
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