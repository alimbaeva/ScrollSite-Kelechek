

window.addEventListener('DOMContentLoaded', function () {

    const date = document.getElementById("date");
    date.textContent = new Date().getFullYear();
    const body = document.querySelector('body');
    const navID = document.getElementById("nav");

    const navToggle = document.querySelector('.nav-toggle');
    const linksContainer = document.querySelector('.links-container');
    const links = document.querySelector(".links");

    const topOffset = document.querySelector('#nav').offsetHeight;
    const headerTop = document.querySelector('#home').offsetHeight;

    navToggle.addEventListener('click', () => { // в этом фу-ии мы вычитаем высоту списков и эту высоту даем div контейнеру, так мы можем добитса изменчивой высоту от количество линков
        const linksHeight = links.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        if (containerHeight === 0) {
            linksContainer.style.height = `${linksHeight}`;
        } else {
            linksContainer.style.height = 0;
        }
    });

    document.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        if (scrolled >= topOffset) {
            navID.classList.add('fixed-nav');
        } else if (scrolled <= topOffset) {
            navID.classList.remove('fixed-nav');
        }

        let scrollTop = document.querySelector('.top-link');

        if (scrolled >= headerTop) {
            scrollTop.classList.add('show-link');
        } else if (scrolled <= headerTop) {
            scrollTop.classList.remove('show-link');
        }

    });

    document.querySelectorAll('a[href^="#"').forEach(link => {


        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);
            console.log(scrollTarget);
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});
