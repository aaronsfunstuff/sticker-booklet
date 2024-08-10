document.addEventListener('DOMContentLoaded', () => {
    const stickers = document.querySelectorAll('.sticker');
    const collectedStickers = JSON.parse(localStorage.getItem('collectedStickers')) || {};

    stickers.forEach(sticker => {
        const id = sticker.getAttribute('data-id');

        if (collectedStickers[id]) {
            sticker.classList.add('collected');
        }

        sticker.addEventListener('click', () => {
            if (!collectedStickers[id]) {
                collectedStickers[id] = true;
                localStorage.setItem('collectedStickers', JSON.stringify(collectedStickers));
                sticker.classList.add('collected');
            }
        });
    });
});
