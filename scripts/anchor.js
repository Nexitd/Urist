const anchors = document.querySelectorAll('.anchor__link'),
    getSetvice = document.getElementById("discard-debt");

anchors.forEach(el => {
    el.addEventListener("click", (event) => {
        event.preventDefault();
        const blockID = el.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


getSetvice.addEventListener("click", () => {
    document.getElementById("get-service").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});