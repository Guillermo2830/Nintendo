document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    });
    sr.reveal('.info__page', {
        delay: 200,
        origin: 'top'
    });
    sr.reveal('.img__container', {
        delay: 200,
        origin: 'top'
    });
});