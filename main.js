// alert("message");

// let submit = document.querySelector(".submit");

function data() {
  var userInput = document.getElementById("user-name");
  var val = document.getElementById("pw");
  var userName = "admin";
  var password = "123";
  var userValue = userInput.value;
  var inp = val.value;
  // console.log(password);
  // console.log(inp);
  // console.log(userName);
  // console.log(userValue);
  // console.log(typeof password);
  // console.log(typeof inp);
  // console.log(typeof userName);
  // console.log(typeof userValue);
  if (userValue === userName && inp === password) {
    console.log("welcome");
    // var resultContainer = document.createElement("p");
    // console.log(resultContainer);
    // var resultValue = document.createTextNode("Welcome");
    // console.log(resultValue);
    // resultContainer.appendChild(resultValue);
    // resultContainer.classList.add("style");
    // var divContainer = document.getElementById("result");
    // document.body.appendChild(resultContainer, divContainer);
    // console.log(divContainer);
    // divContainer.appendChild(resultContainer);
    // document.body.appendChild(divContainer);
  } else {
    // var resContainer = document.createElement("p");
    // var resValue = document.createTextNode("not registered");
    // resContainer.appendChild(resValue);
    // var divContainer = document.getElementById("result");
    // resContainer.classList.add("style");
    // divContainer.appendChild(resContainer);
    // document.body.appendChild(divContainer);
    console.log("not registered");
  }
}
//=============================================================================
// Part Two

let dataInput = document.getElementById("text");
let mainContainer = document.getElementById("container");
let submit = document.getElementById("submit");
submit.onclick = function add() {
  var span = document.createElement("span");
  var spanTxt = document.createTextNode(dataInput.value);
  span.appendChild(spanTxt);
  span.classList.add("span-style");
  span.classList.add("span");
  var doneBtn = document.createElement("button");
  var doneBtnText = document.createTextNode("Done");
  doneBtn.appendChild(doneBtnText);
  doneBtn.className = "done";
  var deleteBtn = document.createElement("button");
  var deleteBtntext = document.createTextNode("Delete");
  deleteBtn.appendChild(deleteBtntext);
  deleteBtn.classList.add("delete");
  var textContainer = document.createElement("div");
  textContainer.classList.add("text-con-style");
  textContainer.classList.add("text-con");
  textContainer.appendChild(span);
  textContainer.appendChild(doneBtn);
  textContainer.appendChild(deleteBtn);
  mainContainer.insertBefore(textContainer, container.children[0]);
  dataInput.value = "";
};

document.addEventListener("click", (e) => {
  if (e.target.className == "done") {
    console.log("done");
    e.target.parentNode.style.backgroundColor = "#73f073";
  } else if (e.target.classList == "delete") {
    e.target.parentNode.remove();
  }
});
