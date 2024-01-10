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
        applyTranslationsToHTML(lang);
    }

    // 데이터를 HTML에 삽입하는 함수
    function applyTranslationsToHTML(data) {
        // 모든 요소에 대해 번역된 텍스트를 찾아 삽입하는 예시
        var elementsWithTranslation = document.querySelectorAll('[data-lang]');
        elementsWithTranslation.forEach(element => {
            var translationKey = element.dataset.lang;
            if (data.hasOwnProperty(translationKey)) {
                element.textContent = data[translationKey];
            }
        });
    }
});