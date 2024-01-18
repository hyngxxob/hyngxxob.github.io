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

    document.getElementById('projectCompLink').addEventListener('click', function () {
        const section = document.getElementById('projectcomp');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('projectPersLink').addEventListener('click', function () {
        const section = document.getElementById('projectpers');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('outsourcingLink').addEventListener('click', function () {
        const section = document.getElementById('outsourcing');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('introNavLink').addEventListener('click', function () {
        const section = document.getElementById('aboutMe');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('historyNavLink').addEventListener('click', function () {
        const section = document.getElementById('history');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('certNavLink').addEventListener('click', function () {
        const section = document.getElementById('cert');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('skillNavLink').addEventListener('click', function () {
        const section = document.getElementById('skill');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('projectCompNavLink').addEventListener('click', function () {
        const section = document.getElementById('projectcomp');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('projectPersNavLink').addEventListener('click', function () {
        const section = document.getElementById('projectpers');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('outsourcingNavLink').addEventListener('click', function () {
        const section = document.getElementById('outsourcing');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('introMobNavLink').addEventListener('click', function () {
        document.getElementById('mobileMenu').style.display = 'none';
        document.body.classList.remove('no-scroll');
        const section = document.getElementById('aboutMe');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('historyMobNavLink').addEventListener('click', function () {
        document.getElementById('mobileMenu').style.display = 'none';
        document.body.classList.remove('no-scroll');
        const section = document.getElementById('history');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('certMobNavLink').addEventListener('click', function () {
        document.getElementById('mobileMenu').style.display = 'none';
        document.body.classList.remove('no-scroll');
        const section = document.getElementById('cert');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('skillMobNavLink').addEventListener('click', function () {
        document.getElementById('mobileMenu').style.display = 'none';
        document.body.classList.remove('no-scroll');
        const section = document.getElementById('skill');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('projectCompMobNavLink').addEventListener('click', function () {
        document.getElementById('mobileMenu').style.display = 'none';
        document.body.classList.remove('no-scroll');
        const section = document.getElementById('projectcomp');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('projectPersMobNavLink').addEventListener('click', function () {
        document.getElementById('mobileMenu').style.display = 'none';
        document.body.classList.remove('no-scroll');
        const section = document.getElementById('projectpers');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('outsourcingMobNavLink').addEventListener('click', function () {
        document.getElementById('mobileMenu').style.display = 'none';
        document.body.classList.remove('no-scroll');
        const section = document.getElementById('outsourcing');
        section.scrollIntoView({ behavior: 'smooth' });
    });


    document.getElementById('mobileLogo').addEventListener('click', () => {
        window.location.reload();
    });

    document.getElementById('mobile-openNav').addEventListener('click', () => {
        document.getElementById('mobileMenu').style.display = 'initial';
        document.getElementById('mobileMenu').classList.add('slide-in-left');
        document.body.classList.add('no-scroll');
    });

    document.getElementById('mobile-closeNav').addEventListener('click', () => {
        document.getElementById('mobileMenu').style.display = 'none';
        document.getElementById('mobileMenu').classList.remove('slide-in-left');
        document.body.classList.remove('no-scroll');
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