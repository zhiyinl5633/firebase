# Entry 6: MVP
Drrrrrrrrrrrrrrrrrum-roll, please.... This week, my classmates and I decided to work together for our final project and we are planning on our MVP. *Wait a minute... doesn't MVP stand for Most Valuable Player??* Well, according to Mr.Mueller's definition, MVP stands for**Minimum Viable Product.**So, let's see what we have planned so far. First of all, since the last thing we learned from the Ruby/Sinatra unit was working with APIs, we decided to find an easier way of working with APIs, which is through Javascript. Through [Daniel Shiffman's Youtube tuorial](https://www.youtube.com/watch?v=ecT42O6I_WI), we have a brief idea of how working with APIs in Javascript is like and we tried it out ourselves by using the previous API that we used for our Sinatra project (as for practice, we used the [**Tvmaze API**](http://www.tvmaze.com/api)). However, the process was not as smooth as we expected. 

### Challenges Encountered
* Since we worked with forms a few years ago, we struggled with storing the user’s input after clicking the submit button into a variable in Javascript. So, I looked back at my old workspace(web-design) on C9 and did tons of googling, I found a [Stackoverflow post](https://stackoverflow.com/questions/17433557/how-to-save-user-input-into-a-variable-in-html-and-js) that explains how to save user input into a variable in HTML and Javascript.

Snippets code that gets and stores the user's input in an variable:

**HTML(index.html)**
```
<input type="text" id="userInput">
```
**Javascript**
``` javascript
input = document.getElementById("userInput").value;
```

* Another challenge we stumbled upon was making the input box and submit button to disappear after the user clicks submit and only left with the image of the show. I did some googling, but couldn't find anything that works the way we wanted. Rather than just removing the input box and submit button, we found [Stackoverflow post](https://stackoverflow.com/questions/3682805/javascript-load-a-page-on-button-click) that shows how to load a new page when the button is clicked. We created a result page that ideally would show the image of the show that the user had inputted.

Snippets of loading a new page:

**HTML(index.html)**
```
<input type="submit" onclick="window.location.href='result.html';result()">
```

* Now we are done. Ha! just kidding. Now that we made a result page, we need to make the show image to show on the result page. In order to do that, we need to grab the image of the show from the index page to show on the result page. There's a [Slackoverflow post](https://stackoverflow.com/questions/27765666/passing-variable-through-javascript-from-one-html-page-to-another-page?noredirect=1&lq=1) that uses ```localStorage``` as the solution.

Snippets of getting the image to show on result page:

**HTML(result.html)**
```
<script>
        window.onload = function() {
            document.getElementById("secImage").src = localStorage.getItem("globalImage");
        }
</script>
```
**Javascript**
```javascript
function gotData(data) {
    image = data.image.medium;
    localStorage.setItem("globalImage", image.toString());
    // console.log(image);
    document.getElementById("showImage").src = image.toString();
}
```

---
### Next Steps
* Last week, I worked on the Friendly Eats codelab. We are hoping to combine the codelab with an API that searches for nearby restaurants.
    * Features we plan to include (so far):
        * Authentication: gets the user's login info
        * Takes in the user's input of a food they want to eat
        * The API returns nearby restaurants
        * Allow the user to rate & add comments to the restaurants
---

### **Link to the (tinker)project:**
https://preview.c9users.io/zhiyinl5633/firebase/learning/04-javascript-api/index.html?_c9_id=livepreview0&_c9_host=https://ide.c9.io

### **Link to Github with the code**
https://github.com/zhiyinl5633/firebase/tree/master/learning/04-javascript-api

---
## Takeaways
* **Google is your BFF.** When you come across anything, yeah literally **ANYTHING**(challenges, things you don't understand, and blah), just google it. Google is there for you. ALSO, **Slackoverflow is your other BFF**. Slackoverflow is a website where people post their questions and there would be solutions to them. This website is very helpful because there are times when I encountered problems that other people may have encountered too and I get to see how they solved their problems.
---
[Next](entry7.md)

[Previous](entry5.md)

[Table of Contents](../README.md)