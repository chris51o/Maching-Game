// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/373050c8-dd44-43c7-9063-874cae9763af/";
let cards = [
    "card-1.jpg?v=1710350279415",
    "card-2.jpg?v=1710350279801",
    "card-3.jpg?v=1710350280168",
    "card-4.jpg?v=1710350280520",
    "card-5%20copy.jpg?v=1710350280937",
    "card6.jpg?v=1710350282173",
    "card-7.jpg?v=1710350281339",
    "card-8.jpg?v=1710350281777"
];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has" + cards.length + "cards.");
    for (let card of cards) {
        cards.push(card);
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image:url(" +
            url + card + ")' class='card'>"
        );
    }
};
console.log("Now the deck has " + cards.length + "cards.");
buttonDouble.style.color = "siilver";



// Button to Shuffle Cards


// Button to Flip All Cards




// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});