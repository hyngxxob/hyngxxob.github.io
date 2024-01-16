function getContent(cn) {
    let content;
    switch(cn) {
        case 'kolon' :
            content = kolonContent();
            return content;
            break;
        case 'gentlemonster' :
            content = gentlemonsterContent();
            return content;
        case 'kakaoent' :
            content = kakaoentContent();
            return content;
        case 'kisco' :
            content = kiscoContent();
            return content;
        case 'hanwha' :
            content = hanwhaContent();
            return content;
        case 'hdi' :
            content = hdiContent();
            return content;
        case 'dina' :
            content = dinaContent();
            return content;
        case 'dongwon' :
            content = dongwonContent();
            return content;
        case 'stellasync' :
            content = stellaSyncContent();
            return content;
        default :
            break;
    }
}