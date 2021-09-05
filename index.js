let request = require('request');

function changeQuote() {
    request("https://api.quotable.io/random", function(error, response, body){
        let bodyJson = JSON.parse(body);
        let randomQuote = bodyJson["content"];
        let author = bodyJson["author"];
        document.getElementById("quote").innerHTML = randomQuote;
        document.getElementById("author").innerText = "- " + author;
    });
}

changeQuote();
setInterval(() => {
    changeQuote();
}, 60000);