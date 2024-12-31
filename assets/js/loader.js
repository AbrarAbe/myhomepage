document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.preload-link');
    const preloaderLink = document.getElementById('preloaderLink');
    const content = document.getElementById('content');

    const showPreloader = (element) => {
        element.classList.add('show-preloader');
        setTimeout(() => {
            element.classList.remove('show-preloader');
        }, 1000);
    };

    content.classList.remove('hidden');
    
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