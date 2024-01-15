function getLanguage() {
    const currLang = window.sessionStorage.getItem("lang");
    let userLanguage;
    if(currLang) {
        userLanguage = currLang;
    } else {
        userLanguage = navigator.language || navigator.userLanguage;
    }

    let lang;
    if (userLanguage === 'ko') {
        lang = ko;
        document.body.style.fontFamily = "'NanumSquareNeo'";
    } else if (userLanguage === 'en') {
        lang = en;
        document.body.style.fontFamily = "'Raleway', 'NanumSquareNeo'";
    } else if (userLanguage === 'ja') {
        lang = ja;
        document.body.style.fontFamily = "'Noto Sans JP', 'NanumSquareNeo'";
    } else {
        lang = en;
        document.body.style.fontFamily = "'Raleway', 'NanumSquareNeo'";
    }

    return lang;
}