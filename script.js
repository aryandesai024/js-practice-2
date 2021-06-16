document.addEventListener('DOMContentLoaded', function () {

    const quotes = [
    {
        quote:
            "Code Never Lies, Comments Sometimes Do.",
        author: "Ron Jeffries"
    },
    {
        quote:
            "You never really understand a person until you consider things from his point of view. Until you climb inside of his skin and walk around in it.",
        author: "Harper Lee"
    },
    {
        quote:
            "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
        author: "Ernest Hemingway"
    },
    {
        quote:
            "I was never afraid of failure; for I would sooner fail than not be among the greatest.",
        author: "John Keats"
    },
    {
        quote:
            "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.",
        author: "Henry David Thoreau"
    },
];
    // GET ELEMENTS
    const button = document.getElementById('btn');
    const content = document.getElementById('quote');
    const author = document.getElementById('author');

    // add click event to the button
    button.addEventListener('click', fetchQuote);

    // function to call the api and set new quote
        function fetchQuote() {
        button.innerText = "Loading...";
        button.disabled = true;

        let random = Math.floor(Math.random() * quotes.length);


        setTimeout(()=> {
                document.querySelector('.quote').innerText = quotes[random].quote;
                document.querySelector('#author').innerText = quotes[random].author;
                button.disabled = false;
                button.innerText = "Get New Quote"
        }, 800);
    }

})