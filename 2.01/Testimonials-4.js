const quotes = [
    {
        id: 1,
        quote: "Both attractive and higly adaptable. Buy this now. Thank you for making it painless, pleaseent and most of all hassle free!",
    },
    {
        id: 2,
        quote: "You only have to do a few things right in your life so long as you don’t do too many things wrong.",
    },
    {
        id: 3,
        quote: "Every problem is a gift—without problems we would not grow.",
    },
    {
        id: 4,
        quote: "Business opportunities are like buses, there’s always another one coming.",
    },
    {
        id: 5,
        quote: "Play by the rules, but be ferocious",
    },
    {
        id: 6,
        quote: "Success is not final; failure is not fatal: it is the courage to continue that counts.",
    }

]
let currentQuoteIndex = 0;
const quoteElement = document.getElementById('quote');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showCurrentQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex].quote;
}

function showNextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    showCurrentQuote();
}

function showPrevQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    showCurrentQuote();
}

prevButton.addEventListener('click', showPrevQuote);
nextButton.addEventListener('click', showNextQuote);

function autoChangeQuote() {
    showNextQuote();
}

setInterval(autoChangeQuote, 5000);
showCurrentQuote();
