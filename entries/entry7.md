# Entry 7: MVP 2.0
Okay... so for this week, there's a good news and a bad news. The bad news is that our restaurant MVP didn't turn out the way we wanted it and seems to be missing the **Viable** part. But the good news is, we came up with a plan B. So... this was how the week went. At the beginning of the week, we tried googling for restaurant APIs and we found the [Yelp API](https://www.yelp.com/developers/documentation/v3) and [Zomato API](https://developers.zomato.com/api). So when we found these APIs, we tried implementing the API through Javascript, like how we did in the previous week with the Tvmaze API(refer to entry 6 for more info). However, things didn't go the way we wanted. Since these APIs requires authentication, it made things more challenging. First, we tried setting up ```node.js``` files for the Yelp API. After googling, we found the npm file(aka the ```node.js```), but after numerous attempts, we still couldn't get it to work like we anticipated. Therefore, we thought that instead of wasting time on figuring out something that seems too difficult for us to manage in a short amount of time, we decided to come up with a plan B. So for our plan B, we decided to use an API that does not require authentication. We found a [book API](https://developers.google.com/books/docs/v1/getting_started) that we decided we will be working with to build our MVP. Although changing our API made things a little easier, but challenges are still ahead.

---
Rather than just returning the user with a single result from the API, we decided to store the data into an array. In order to do that, we must iterate over the list of data. Unlike ruby, the syntax for iteration in Javascript is:

``` javascript
for (condition) {
}
```

For our project, we want to return the user with the titles and images of the book they searched(as of now). To do that we did:

```javascript
function gotDataOne(data) {
    for (var i = 0; i < data.items.length; i++) {
        //book title, SET TO VARAIBLE
        bookTitles.push(data.items[i].volumeInfo.title)
        //imageLinks, SET TO VARAIBLE
        bookImages.push(data.items[i].volumeInfo.imageLinks.thumbnail)
        //book author
        //console.log(data.items[i].volumeInfo.authors)
        // for(var x = 0; x < data.items[i].volumeInfo.authors.length; x++){
        //     console.log(data.items[x].volumeInfo.authors)
        // }
    }
    var data = {
        input: title,
        titleResult: bookTitles,
        imageResult: bookImages
    }
    var ref = database.ref('resultPage')
    ref.push(data)

}
```

Since now we are dealing with an array, getting the data from one html page to another would be slightly different. In addition to local storage(mentioned in entry 6), here's what we did:

```javascript
var JSONreadyTitles = JSON.stringify(bookTitles) localStorage.setItem("bookTitles", JSONreadyTitles);
var JSONreadyImages = JSON.stringify(bookImages)
localStorage.setItem("bookImages", JSONreadyImages);
```

**Note**: ```bookTitles``` and ```bookImages``` are names of the arrays that store the results. 

**Reference**
* https://www.youtube.com/watch?v=RbfG7NLKDgQ

---

**Project in Progress** 

*Sorry, no functional link for now, please come back next week. Thank you!*

---
## Takeaways
* **When plan A doesn't work, move on to plan B (aka the Backup plan).** Plans don't always go the way we planned.Rather than learning something difficult that exceeds your learning zone, maybe slow down and find something that you're more comfortable to tackle.
---
[Next](entry8.md)

[Previous](entry6.md)

[Table of Contents](../README.md)