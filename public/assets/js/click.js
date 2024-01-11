document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('moreBtn').addEventListener('click', function () {
        const section = document.getElementById('aboutMe');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('introLink').addEventListener('click', function () {
        const section = document.getElementById('aboutMe');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('historyLink').addEventListener('click', function () {
        const section = document.getElementById('history');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('certLink').addEventListener('click', function () {
        const section = document.getElementById('cert');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('skillLink').addEventListener('click', function () {
        const section = document.getElementById('skill');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('projectLink').addEventListener('click', function () {
        const section = document.getElementById('project');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('outsourcingLink').addEventListener('click', function () {
        const section = document.getElementById('outsourcing');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('top').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.getElementById('langKo').addEventListener('click', () => {
        window.sessionStorage.setItem("lang", "ko");
        window.location.reload();
    });

    document.getElementById('langEn').addEventListener('click', () => {
        window.sessionStorage.setItem("lang", "en");
        window.location.reload();
    });

    document.getElementById('langJa').addEventListener('click', () => {
        window.sessionStorage.setItem("lang", "ja");
        window.location.reload();
    });
});