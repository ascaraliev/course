console.log("Hello world");
console.log(1,2,3,4,5);
console.log(6,7,8,9,10);


const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", function() {
  output.innerHTML = "hello world";
});