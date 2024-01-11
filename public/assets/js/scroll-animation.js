document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.header-bar');
    const myInfo = document.querySelectorAll('.my-info');
    const imgWrap = document.querySelectorAll('.img-wrap');
    const myInfoItemWrap = document.querySelectorAll('.my-info-item-wrap');
	const specializationItems = document.querySelectorAll('.specialization-wrap');
	const outsourcingItems = document.querySelectorAll('.outsourcing-item-container');
	const myHistoryItems = document.querySelectorAll('.my-history-item-container');
	const graphElements = document.querySelectorAll('.r');
	const percentElements = document.querySelectorAll('.percent');
	const duration = 150; // 애니메이션 지속 시간 (밀리초)

	window.addEventListener('scroll', () => {
		myInfo.forEach(element => {
			const elementPosition = element.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;
			const scrollPosition = window.scrollY || window.pageYOffset;
			
			if (elementPosition < windowHeight ) {
				imgWrap[0].classList.add('slide-in-left');
				myInfoItemWrap[0].classList.add('fade-in');
			}
		});

		myHistoryItems.forEach(element => {
			const elementPosition = element.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;
			const scrollPosition = window.scrollY || window.pageYOffset;
			
			if (elementPosition < windowHeight ) {
				element.classList.add('fade-in-up');
			}
		});

		elementsToAnimate.forEach(element => {
			const elementPosition = element.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;
			const scrollPosition = window.scrollY || window.pageYOffset;
			
			if (elementPosition < windowHeight ) {
				element.classList.add('slide-in-left');
			}
		});

		graphElements.forEach(element => {
			const elementPosition = element.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;
			const scrollPosition = window.scrollY || window.pageYOffset;
			
			if (elementPosition < windowHeight ) {
				element.classList.add('ability-percent');
			}
		});

		specializationItems.forEach(element => {
			const elementPosition = element.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;
			const scrollPosition = window.scrollY || window.pageYOffset;

			if (elementPosition < windowHeight) {

				if (!element.classList.contains('done')) {
					element.classList.add('done');
					const spanElement = element.querySelector('.percent');
					const maxValueClass = Array.from(spanElement.classList).find(cls => cls.startsWith('a'));

					if (maxValueClass) {
						const maxValue = parseInt(maxValueClass.substring(1));
						let currentValue = 0;
						const stepTime = 2000 / maxValue; // 최대값에 따라 각 퍼센트의 증가 시간 계산 (2000ms는 총 시간)

						const interval = setInterval(() => {
							if (currentValue >= maxValue) {
								clearInterval(interval);
							} else {
								currentValue++;
								spanElement.textContent = `${currentValue}%`;
							}
						}, stepTime); // 각 스텝마다 숫자가 증가하는 시간(밀리초)
					}
				}
			}
		});

		outsourcingItems.forEach((element, index) => {
			const elementPosition = element.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;
			const scrollPosition = window.scrollY || window.pageYOffset;

			if (elementPosition < windowHeight) {
				if(index % 2 === 0) {
					element.classList.add('slide-in-left');
				} else {
					element.classList.add('slide-in-right');
				}
			}
		});
	});
});