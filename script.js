const secret = document.getElementById('secret');
secret.addEventListener('mouseover', () => { 
    secret.textContent = 'check the source';
});
secret.addEventListener('mouseout', () => { 
    secret.textContent = 'purpx gur fbhepr';
});

function randomGifGenerator() {
    const gifs = [
        "gifs/elmo.gif",
        "gifs/catstealtato.gif",
        "gifs/elmotato.gif",
        "gifs/lifetato2.gif",
        "gifs/tatointensify.gif",
        "gifs/tatoyeet.gif",
        "gifs/tatowiggle.gif",
        "gifs/lifetato3.gif",
        "gifs/elmobob.gif",
        "gifs/fries.gif",
        "gifs/friesagain.gif",
        "gifs/tatoshower.gif",
        "gifs/elmodance.gif",
        "gifs/lifetato.gif",
        "gifs/showmetatosalad.gif",
        "gifs/tatowar.gif",
        "gifs/fryman.gif",
        "gifs/tatogun.gif",
        "gifs/tatoyeeet.gif",
        "gifs/sadtato.gif",
        "gifs/tatosacrifice.gif",
        "gifs/tatopacman.gif",
        "gifs/scaredtatoes.gif",
        "gifs/tatocrackers.gif",
        "gifs/kirbychips.gif",
        "gifs/chipsandsoda.gif",
        "gifs/halftato.gif",
        "gifs/tatonom.gif",
        "gifs/tatosacrifice2.gif",
        "gifs/tatochipinspace.gif",
        "gifs/tatosaladd.gif",
        "gifs/yumyumtatosalad.gif",
        "gifs/potaytoes.gif",
        "gifs/sandintatosalad.gif"
    ];
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    document.getElementById("randomGif").src = randomGif;
}

randomGifGenerator();
setInterval(randomGifGenerator, 4000);

