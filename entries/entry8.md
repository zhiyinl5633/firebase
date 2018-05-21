# Entry 8: Booklastic
Wow, it's already the last week we will be working on our MVP. I know you are wondering *what's with the title of this week's entry*. Well, it is the title of our final app. *How did we come up with this title?* You see... **Book + Scholastic = Booklastic** Cool huh? Okay... let's talk about how this week went. Well, since it's our final work week, I bet we are all rushing to have this done. Since our initial plan didn't go as expected, we had to move on to our plan B with the short amount of time we have left. Since a lot has happened this week, it's hard for me to explain every single detail, so let me just keep it short and explain the challenges we have encountered this week.

---
*Who goes through a project without encountering any challenges?* Well, surely not us.
Here are some of the challenges we encountered:
* Okay so first, we originally we were making 2 pages(```index.html``` and ```result.html```) where the user types in the title of the book they want to search in the index page and a list of outcomes will be in the result page. Anyways, as always, things don't always go as we wanted. Navigating between two pages and linking the javascript got very complicated and confusing. Therefore, we scratched that plan and our final plan is to just have 1 index page that will include the search and the result so we can just link the Javascript file to the single page. Also, since we couldn't get the app to function the way we wanted with only Javascript, so we also used jQuery.
* To incorporate Firebase components in our app, we decided to include authentication and database. After initializing Firebase in ```index.html``` page(refer to entry 2), we had some trouble with the Google Sign in method. We referenced back to the Friendly Chat codelab and did some googling. We manage to grab the user's authentication with the following code snippet:

```javascript
 var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            userId = user.uid
```

* Let's move to our next struggle, the CSS. At first, we didn't really have a plan of design or template we want our app to be, so I referred to my previous web design projects for reference and just plan as I go. As a person who has a little OCD problem, it always annoys me when I work on the CSS because there's always something that is not aligned with another, which gets me frustrated every time. But anyways, I like working with CSS because I feel satisfied with the result afterward. Some struggles I had with CSS was media query because I have to go through each of the screen sizes and change things according to the size so it doesn't crumble up together when the screen shrinks. So I found the different window sizes on [W3schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) and applied that to the CSS. Here's what we got for our media query:

```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
     #landing h1 {
        font-size: 35px;
    }
    #landing h2 {
        font-size: 15px;
    }
    h1 {
        font-size: 20px;
        padding-left: 10px;
    }
    #landtext {
        padding: 10px;
        padding-top: 100px;
    }
    #title{
        font-size: 15px;
    }
    button{
        font-size:12px;
    }
} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
     #landing h1 {
        font-size: 70px;
    }
    #landing h2 {
        font-size: 20px;
    }
    h1 {
        font-size: 40px;
        padding-left: 30px;
    }
    #landtext {
        padding: 10px;
        padding-top: 100px;
    }
    #title{
        font-size: 15px;
    }
    button{
        font-size:12px;
    }
} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
     #landing h1 {
        font-size: 90px;
    }
    #landing h2 {
        font-size: 20px;

    }
    h1 {
        font-size: 50px;
        padding-left: 35px;
    }
    #landtext {
        padding: 30px;
        padding-top: 100px;
    }
    #title{
        font-size: 20px;
    }
    button{
        font-size:12px;
    }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    #landing h1 {
        font-size: 110px;
    }
    #landing h2 {
        font-size: 40px;
    }
    h1 {
        font-size: 50px;
        padding-left: 40px;
    }
    #landtext {
        padding: 60px;
        padding-top: 100px;
    }
    #title{
        font-size: 20px;
    }
    button{
        font-size:15px;
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    #landing h1 {
        font-size: 155px;
    }
    #landing h2 {
        font-size: 50px;
    }
    h1 {
        font-size: 50px;
        padding-left: 60px;
    }
    #landtext {
        padding: 90px;
        padding-top: 100px;
    }
    #title{
        font-size: 20px;
    }
    button{
        font-size:20px;
    }
}
```

---

### Link to project (Coming soon)
Look forward to our project next week during the presentations

---
## Takeaways
* **Not everything has to be planned, just go with the flow and ideas will start popping up.** For me, sometimes I like planning things out, but when I don't, I would just plan along the way and just go with whatever comes to my mind at that moment.
* **Old but Gold.** Looking back to codes from years ago can be a great help to remind you of concepts that you may have forgotten and it gives you ideas of what you might want to do.

[Next](entry9.md)

[Previous](entry7.md)

[Table of Contents](../README.md)