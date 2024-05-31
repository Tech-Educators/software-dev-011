console.log("🥚");

//element to store image values --> src and alt minimum
let images = [
  {
    src: "value",
    alt: "value",
    width: "value",
    height: "value",
  },
  { src: "value", alt: "value", width: "value", height: "value" },
  { src: "value", alt: "value", width: "value", height: "value" },
];

//!stretch goal (completely optional): carousel or arrow keys
//global variable to store the current img index for the big image
//let currentIndex = 0;

//select the DOM elements that contain our images with a document method
//select the thumbnail-container
//select the large-image-container

//function to create my thumbnail images --> action
function createThumbnails(parameter) {
  //a loop to create multiple images --> forEach /for loop
  thumbnailContainer.forEach((thumbnail) => {
    //a document method that creates a DOM element (img)
    //assign a value to the img attributes (eg. img.src = "value")
    //(optional) assign a class name to the img element (.className property)
    //append the new elements to the DOM using a document method
    //add an event listener for each image
    //parameter.addEventListener("click", function (){
    // })
  });
}

// createThumbnails(argument --> images)

function createLargeImage(parameter) {
  //problem -->  the images appear one after the other (innerHTML = "")
  //create an image element
  //(optional) add a classname
  //set the src value
  //set the alt value
  //append the large image to the DOM
}
