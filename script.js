
document.addEventListener('DOMContentLoaded', function () {

    //Get All Quotes
const quotes = [
    {
        quote:
            "Code Never Lies, Comments Sometimes Do.",
        author: "Ron Jeffries"
    },
    {
        quote:
            "Programmers are constantly making things more complicated than they need to be because future. Program for Today.",
        author: "David Heinemeier Hansson"
    },
    {
        quote:
            "Code is like humor. When you have to explain it, It's Bad.",
        author: "Cory House"
    },
    {
        quote: "The proper use of comments is to compensate for our failure to express ourself in code.",
        author: "Robert C Martin"
    },
    {
        quote:
            "If You Can't deploy your services independently then they are not microservice. ",
        author: "Daniel Bryant"
    },
    {
        quote:
            "Programming is key concept who want to understand and must have interested of ourself.",
        author: " Code Express"
    },
    {
        quote:
            "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: " Roy T. Bennett"
    },
    {
        quote:
            "It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.",
        author: " Roy T. Bennett"
    }
];

    // GET ELEMENTS
    const button = document.getElementById('btn');
    const content = document.getElementById('quote');
    const author = document.getElementById('author');

    // add click event to the button
    button.addEventListener('click', fetchQuote);

    function fetchQuote() {
        button.innerText = "Loading...";
        button.disabled = true;

        let random = Math.floor(Math.random() * quotes.length);


        setTimeout(()=>{
                document.querySelector('.quote').innerText = quotes[random].quote;
                document.querySelector('#author').innerText = quotes[random].author;
                button.disabled = false;
                button.innerText = "Get New Quote"
        },800);
    }

})
