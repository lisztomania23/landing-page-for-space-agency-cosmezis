const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('no-webkit-fill');
            setTimeout(() => {
                entry.target.classList.add('no-webkit-fill');
            }, 1000);
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hidden-hero-text, .hiddenimg, .hiddenhero');
hiddenElements.forEach((el) => observer.observe(el));