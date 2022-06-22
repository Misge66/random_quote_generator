const url = 'https://type.fit/api/quotes';

let quote = document.getElementById('the_qoute')
let qoute_author = document.getElementById("qoute_author");
let button = document.getElementById("click_me_button")


const randomQouteSelector = () => {

  fetch(url)
    .then((response) => response.json())
    .then((quoteData) => {
      console.log(quoteData);

      const randomNum = Math.floor(Math.random() * quoteData.length);
      the_qoute.innerText = quoteData[randomNum].text;
      qoute_author.innerText = '--'+ quoteData[randomNum].author;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}


button.addEventListener('click', randomQouteSelector);

