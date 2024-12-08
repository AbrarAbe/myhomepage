document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.preload-link');
    const preloaderLink = document.getElementById('preloaderLink');

    const showPreloader = (element) => {
        element.classList.add('show-preloader');
        setTimeout(() => {
            element.classList.remove('show-preloader');
        }, 1000);
    };

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            showPreloader(preloaderLink);
            setTimeout(() => {
                window.location.href = link.href;
            }, 500);
            event.preventDefault();
        });
    });
});