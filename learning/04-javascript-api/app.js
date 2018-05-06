var input;
var button;
var url;
var showImage;
var image;
var secImage;




function setup() {
   input = createInput();
   button = createButton('submit');
}

function gotData(data) {
    image = data.image.medium;
    localStorage.setItem("globalImage", image.toString());
    // console.log(image);
    document.getElementById("showImage").src = image.toString();
}

function result() {
    input = document.getElementById("userInput").value;
    url = 'https://api.tvmaze.com/singlesearch/shows?q='
    loadJSON(url + input, gotData);
}

