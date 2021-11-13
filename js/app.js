{ // В этом коде не работает бургер менью и блоки по скроллу ровнно не поподает по

    // window.addEventListener('DOMContentLoaded', function () {

    //     const date = document.getElementById("date");
    //     date.textContent = new Date().getFullYear();
    //     const body = document.querySelector('body');
    //     const navID = document.getElementById("nav");

    //     const navToggle = document.querySelector('.nav-toggle');
    //     const linksContainer = document.querySelector('.links-container');
    //     const links = document.querySelector(".links");

    //     const topOffset = document.querySelector('#nav').offsetHeight;
    //     const headerTop = document.querySelector('#home').offsetHeight;

    //     navToggle.addEventListener('click', () => { // в этом фу-ии мы вычитаем высоту списков и эту высоту даем div контейнеру, так мы можем добитса изменчивой высоту от количество линков
    //         const linksHeight = links.getBoundingClientRect().height;
    //         const containerHeight = linksContainer.getBoundingClientRect().height;
    //         if (containerHeight === 0) {
    //             linksContainer.style.height = `${linksHeight}`;
    //         } else {
    //             linksContainer.style.height = 0;
    //         }
    //     });

    //     document.addEventListener('scroll', () => {
    //         const scrolled = window.scrollY;

    //         if (scrolled >= topOffset) {
    //             navID.classList.add('fixed-nav');
    //         } else if (scrolled <= topOffset) {
    //             navID.classList.remove('fixed-nav');
    //         }

    //         let scrollTop = document.querySelector('.top-link');

    //         if (scrolled >= headerTop) {
    //             scrollTop.classList.add('show-link');
    //         } else if (scrolled <= headerTop) {
    //             scrollTop.classList.remove('show-link');
    //         }

    //     });

    //     document.querySelectorAll('a[href^="#"').forEach(link => {


    //         link.addEventListener('click', function (e) {
    //             e.preventDefault();

    //             let href = this.getAttribute('href').substring(1);

    //             const scrollTarget = document.getElementById(href);
    //             console.log(scrollTarget);
    //             const elementPosition = scrollTarget.getBoundingClientRect().top;
    //             const offsetPosition = elementPosition - topOffset;

    //             window.scrollBy({
    //                 top: offsetPosition,
    //                 behavior: 'smooth'
    //             });
    //         });
    //     });
    // });
}


const date = document.getElementById('date');
date.textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav');
    } else {
        navBar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }

        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height = 0;
    });
});

//=================
//about
//=================

const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id;

    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove('active');
        });

        e.target.classList.add('active');

        articles.forEach(function (article) {
            article.classList.remove('active');
        });

        const tabConent = document.getElementById(id);
        tabConent.classList.add('active');
    }
});