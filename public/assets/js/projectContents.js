function getContent(cn) {
    let content;
    switch(cn) {
        case 'kolon' :
            // const text = document.createElement('span');
            // text.textContent = 'kolon';
            // return text;
            break;
        case 'gentlemonster' :
            break;
        case 'kakaoent' :
            break;
        case 'kisco' :
            break;
        case 'hanwha' :
            break;
        case 'hdi' :
            break;
        case 'dina' :
            break;
        case 'dongwon' :
            break;
        case 'stellasync' :
            content = stellaSyncContent();
            return content;
        default :
            break;
    }
}