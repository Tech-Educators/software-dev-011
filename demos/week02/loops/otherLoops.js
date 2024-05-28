//other types of loops

//for..of --> simplified for loop with no access to the index in the loop
let subjects = ["Maths", "Science", "French"];
//length: 3
//index: 0, 1, 2

for (let subject of subjects) {
  console.log(subject);
}

//array method forEach() --> we are adding each array item onto the DOM
subjects.forEach(function (subject, index) {
  let myPTag = document.createElement("p");
  myPTag.textContent = subject;
  div.appendChild(myPTag);
});
