/* Where we are putting the cards */
const $main = document.querySelector('main');

/* Finding the input elements and putting them into variables */
const $sortInputs = document.querySelectorAll('input[name=sort]');
const $placeInputs = document.querySelectorAll('input[name=place]');


/* The variable to store the data */
let data; 

/* Function to sort the data */
function sort(e) {
  if (this.value === 'up') {
    data.sort((a, b) => a.commonName > b.commonName ? -1 : 1);
  } else {
    data.sort((a, b) => a.commonName > b.commonName ? 1 : -1);
  }
  
  bindData(data);
}

/* Function to filter the data */
function filter(e) {
  let filteredData;
  if(this.value === 'all') {
    filteredData = data;
  } else {
    filteredData = data.filter(item => item.region === this.value);
  }
  bindData(filteredData);
}

/* Function to bind a card */
function bindItem(item) {
  /* Creating a new div element */
  const div = document.createElement('div');

  /* Injecting data into the template of our card */
  const card = `
  <img src='${item.image}' draggable="false">
  <h3 class="h3">${item.name}</h3>
  <h3><a href="${item.link.startsWith("https://") ? item.link: "https://projects.ruiwenge2.repl.co" + item.link}" target="_blank">Open</a></h3>`;
    
  /* Injecting the template into our div*/
  div.innerHTML = card;
  
  /* Adding the card to the main element */
  $main.appendChild(div);
}

/* Function to bind all the cards to the data */
function bindData(data) {
  
  /* Clearing out the contents in the main section */
  $main.innerHTML = '';
  
  /* Looping through each card and binding it to html */
  data.forEach(bindItem);

}

async function fetchData() {
  /* Making the request for `data.json` */
  const response = await fetch('/static/projects.json');
    
  /* Converting the data into a `Javascript Object` */
  const json = await response.json();

  /* Storing the data into our variable */
  data = json;
  
  /* Calling Bind Data */
  bindData(data)
}

/* Looping through each element and adding a click event listener */
$sortInputs.forEach(input => input.addEventListener('click', sort));
$placeInputs.forEach(input => input.addEventListener('click', filter));

fetchData();