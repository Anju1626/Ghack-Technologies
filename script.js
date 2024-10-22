// Character data
const characters = [
    { name: "Persephone", image: "images/persephone.jpg", details: "Goddess of spring." },
    { name: "Hades", image: "images/hades.jpg", details: "God of the underworld." },
    { name: "ZEUS", image: "images/dionysus.jpg", details: "God of wine and festivity." },
    { name: "Posiedon", image: "images/athena.jpg", details: "Goddess of wisdom." },
    { name: "Eros", image: "images/persephone.jpg", details: "Goddess of spring." },
    { name: "Hermes", image: "images/hades.jpg", details: "God of the underworld." },
    { name: "Apollo", image: "images/dionysus.jpg", details: "God of wine and festivity." },
    { name: "Atermis", image: "images/athena.jpg", details: "Goddess of wisdom." },
    { name: "Demeter", image: "images/persephone.jpg", details: "Goddess of spring." },
    { name: "Ares", image: "images/hades.jpg", details: "God of the underworld." },
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
    { title: "Leviathan", image: "images/leviathan.jpg" },
    { title: "Tower of God", image: "images/tower-of-god.jpg" },
    { title: "Levelling up the gods", image: "images/levelling-up-the-gods.jpg" },
    { title: "Existence", image: "images/existence.jpg" },
    { title: "The Breaker", image: "images/the breaker.jpg" },
    { title: "The First Hunter", image: "images/the-first-hunter.jpg" },
    { title: "Noblesse", image: "images/noblesse.jpg" },
    { title: "Ultimate Outcast", image: "images/ultimate-outcast.jpg" },
    { title: "Unholy Blood", image: "images/unholy-blood.jpg" },
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