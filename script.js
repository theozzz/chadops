function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Contract address copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error(`Section with id "${sectionId}" not found.`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const headerLinks = document.querySelectorAll('header nav ul li a');

    headerLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                console.error(`Section with id "${targetId}" not found.`);
            }
        });
    });
});

const memes = [
    'assets/meme/your_fired.gif',
    'assets/meme/we_got_your_back.gif',
    'assets/meme/rug_spin.gif',
    'assets/meme/legend.gif',
    'assets/meme/giga_chad.gif',
    'assets/meme/bird_mine.gif',
    'assets/meme/yeah_whatever.gif',
    'assets/meme/strong.gif',
    'assets/meme/bye.gif',
    'assets/meme/sending_mountain_finger.gif',
    'assets/meme/gun_chad.gif',
    'assets/meme/saltbae_karma.gif',
    'assets/meme/too_bullish.gif',
    'assets/meme/slap_prison.gif',
    'assets/meme/cigar_dance.gif',
    'assets/meme/simspon_catch.gif',
    'assets/meme/girl_feet_god.gif',
    'assets/meme/heart_finger.gif',
    'assets/meme/dodging_rugs.gif',
    'assets/meme/crushing_rugs.gif',
    'assets/meme/flower_slap_butt.gif',
    'assets/meme/rug_pull_down.gif',
    'assets/meme/pull_hard.gif',
    'assets/meme/one_rug_time.gif',
    'assets/meme/honest_work.webp'
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const memeGrid = document.querySelector('.meme-grid');

    // Populate the grid with memes
    memes.forEach((meme, index) => {
        const img = document.createElement('img');
        img.src = meme;
        img.alt = `Meme ${index + 1}`;
        img.addEventListener('click', () => openOverlay(index));
        memeGrid.appendChild(img);
    });
});

function openOverlay(index) {
    currentIndex = index;
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');
    overlayImage.src = memes[currentIndex];
    overlay.style.display = 'flex';
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

function navigateGif(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % memes.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + memes.length) % memes.length;
    }
    document.getElementById('overlay-image').src = memes[currentIndex];
}

function copyGifUrl() {
    const baseUrl = window.location.origin;
    const gifUrl = `${baseUrl}/${memes[currentIndex]}`;
    navigator.clipboard.writeText(gifUrl).then(() => {
        alert('GIF URL copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy GIF URL: ', err);
    });
}

function randomGif() {
    currentIndex = Math.floor(Math.random() * memes.length);
    document.getElementById('overlay-image').src = memes[currentIndex];
}