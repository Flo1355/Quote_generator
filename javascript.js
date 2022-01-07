var quotes = [
    'Be yourself; everyone else is already taken.',
    'Two things are infinite: the universe and human stupidity; and I m not sure about the universe.',
    'So many books, so little time.',
    'A room without books is like a body without a soul.',
    'You only live once, but if you do it right, once is enough.',
    'Be the change that you wish to see in the world',
    'If you want to know what a man s like, take a good look at how he treats his inferiors, not his equals.',
    'If you tell the truth, you don t have to remember anything.',
]

//2
function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
//3
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

