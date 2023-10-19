const api_url = 'https://api.quotable.io/random';

const quote = document.getElementById('quote');
const author = document.getElementById('author');

async function getQuote(url) {
    const responce = await fetch(url);
    var data = await responce.json();
    console.log(typeof (responce));
    console.log(responce);
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);


function tweet() {
    window.open(
        'https://twitter.com/intent/tweet?text=' + quote.innerHTML + ' ---By ' + author.innerHTML, 'Sharing the Quote on X', 'width=650,height=400');
}
