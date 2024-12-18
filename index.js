document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('#contador');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 1000;
        const increment = target / (duration / 16);

        const updateCounter = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});