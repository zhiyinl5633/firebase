var quote;
var author;
var input;
var button;

function setup() {
    loadJSON('https://favqs.com/api/qotd', gotData)
    input = createInput();
    button = createButton('submit');
    
}

function gotData(data) {
    println(data);
    console.log(data)
    quote = data.quote.body
    author = data.quote.author
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}

function draw(){
    background(0);
}

function myFunction() {
    var x = document.getElementById("content");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}