console.log("testing the test");

//fetch the data from the api
//this is an asynchronous function (async/await)
async function getFoxes() {
  //we are telling out browser to wait for this data, instead of giving us a promise
  const response = await fetch("https://randomfox.ca/floof");
  console.log(response);

  //translate (parse) the response into JSON format
  const data = await response.json();
  console.log(data);

  //filter the data (data wrangling) with dot notation, if necessary
  const wrangledData = data.image;
  console.log(wrangledData);

  //I want to use this data outside this function
  return wrangledData;
}

//select the element that will contain my fox images
const mainContainer = document.getElementById("main-container");

//create an element to contain my foxes
function foxContainer(foxImg) {
  const newFox = document.createElement("img");
  newFox.src = foxImg;
  console.log(foxImg);
  newFox.alt = "fox image";
  mainContainer.appendChild(newFox);
}

//display my foxes on the page
async function displayFoxes() {
  //getFoxes contains my foxes images
  const myWrangledFoxes = await getFoxes();
  foxContainer(myWrangledFoxes);
}

displayFoxes();
