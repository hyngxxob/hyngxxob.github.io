document.addEventListener('DOMContentLoaded', function() {
    const userLanguage = navigator.language || navigator.userLanguage;

    let lang;
    if (userLanguage === 'ko') {
        lang = ko;
    } else if (userLanguage === 'en') {
        lang = en;
    } else if (userLanguage === 'ja') {
        lang = ja;
    } else {
        lang = en;
    }

    // 데이터를 HTML에 적용
    if (lang) {
        setTimeout(() =>
            applyTranslationsToHTML(lang)
        , 2500);
    }

    // 데이터를 HTML에 삽입하는 함수
    function applyTranslationsToHTML(data) {
        // 모든 요소에 대해 번역된 텍스트를 찾아 삽입하는 예시
        var elementsWithTranslation = document.querySelectorAll('[data-lang]');
        elementsWithTranslation.forEach(element => {
            var translationKey = element.dataset.lang;
            if (data.hasOwnProperty(translationKey)) {
                if(translationKey === "greeting") {
                    // element.textContent = data[translationKey];
                    const text = data[translationKey];
                    const element = document.getElementById('display'); // 타이핑될 요소
                    typeWriter(text, element, 100); 
                } else {
                    element.textContent = data[translationKey];
                }
            }
        });
    }
});

function typeWriter(text, element, delay = 100) {
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, delay);
}

// const text = "안녕하세요."; // 타이핑할 텍스트
// const element = document.getElementById('typing-effect'); // 타이핑될 요소

// // 함수 호출
// typeWriter(text, element, 100); 