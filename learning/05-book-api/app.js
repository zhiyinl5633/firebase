var title

function setup() {
    title = createInput();
    loadJSON("https://www.googleapis.com/books/v1/volumes?q=", gotData)
  
}

function gotData(data) {
title = document.getElementById("userTitle").value;
console.log(title);
}

