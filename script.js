// Character data
const characters = [
    { name: "Persephone", image: "image/persephone.jpg", details: "Goddess of spring." },
    { name: "Hades", image: "image/hades.jpg", details: "God of the underworld." },
    { name: "ZEUS", image: "image/dionysus.jpg", details: "God of wine and festivity." },
    { name: "Posiedon", image: "image/athena.jpg", details: "Goddess of wisdom." },
    { name: "Eros", image: "image/persephone.jpg", details: "Goddess of spring." },
    { name: "Hermes", image: "image/hades.jpg", details: "God of the underworld." },
    { name: "Apollo", image: "image/dionysus.jpg", details: "God of wine and festivity." },
    { name: "Atermis", image: "image/athena.jpg", details: "Goddess of wisdom." },
    { name: "Demeter", image: "image/persephone.jpg", details: "Goddess of spring." },
    { name: "Ares", image: "image/hades.jpg", details: "God of the underworld." },
    // Add more characters as needed
];

// Function to display characters
function displayCharacters() {
    const characterList = document.querySelector('.character-list');
    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}" />
            <h3>${character.name}</h3>
            <p>${character.details}</p>
        `;
        characterList.appendChild(card);
    });
}

// Carousel data
const manhwas = [
    { title: "Leviathan", image: "image/leviathan.jpg" },
    { title: "Tower of God", image: "image/tower-of-god.jpg" },
    { title: "Levelling up the gods", image: "image/levelling-up-the-gods.jpg" },
    { title: "Existence", image: "image/existence.jpg" },
    { title: "The Breaker", image: "image/the breaker.jpg" },
    { title: "The First Hunter", image: "image/the-first-hunter.jpg" },
    { title: "Noblesse", image: "image/noblesse.jpg" },
    { title: "Ultimate Outcast", image: "image/ultimate-outcast.jpg" },
    { title: "Unholy Blood", image: "image/unholy-blood.jpg" },
    { title: "dice-the Club that changes everything", image: "image/dice-the club that changes everything.jpg" },
    // Add more manhwas as needed
];

// Function to display carousel items
function displayCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    manhwas.forEach(manhwa => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.style.backgroundImage = `url(${manhwa.image})`;
        item.innerHTML = `<h4>${manhwa.title}</h4>`;
        carouselContainer.appendChild(item);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayCharacters();
    displayCarousel();
});