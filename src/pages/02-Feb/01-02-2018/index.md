---
path: "/Day-29"
date: "2018-02-01T17:12:33.962Z"
title: "Basic Intro to React-Day 29"
---

## 15 min read...

![]()

# Basic Intro to React

Today im gonna take you through a a very basic, entry level introduction to React. Jump on your codepen if you wanna follow along. Youll also have to go to codepen's settings and under Javascript at the bottom of the options you have pulldown menu named Quick-add.To this add  `react` and also add `reactDOM`, and also set the Javascript Preprocessor to `Babel`. Now we're ready to play.

![Pen settings example](https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/28378783_10159965921895117_1859583864089104581_n.jpg?oh=4a7f9840f7a92196a20e9c0c799ce9d6&oe=5B15D020)

lets start with some HTML 

```html
<div class="person">
    <h1>Anai</h1>
    <p>Your Age: 32</p>
</div>

<div class="person">
    <h1>Alex</h1>
    <p>Your Age: 29</p>
</div>
```

and add some CSS

```css
.person {
    display: inline-block;
    margin: 10px;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    width: 200px;
    padding: 20px;
}
```

At this point as you can see we've created a couple of cards, nothing too fancy. The issue here is that to do this we have to replicate the div element for each card we want to make.

We can think of each `div` as a component. And the idea with react is that we'd be able to build one and re-generate it to use in various places within our application.

lets add some JS

```js
function Person() {
    return (
        <div class="person">
            <h1>Anai</h1>
            <p>Your Age: 32</p>
        </div>
    );
}

```
This here, is the equivalent of the card we built with html. As you can see we have a function and that funny syntax inside `return()` is what we call JSX. 

But to make this into React component, we have to use react to render it onto the screen. Theres a couple thing we need to change. 

```html
<div id="p1"></div>
```

```js
function Person() {
    return (
        <div class="person">
            <h1>Anai</h1>
            <p>Your Age: 32</p>
        </div>
    );
}

ReactDOM.render();
```

* first change a div-give it an id eg. `id="p1"`
* in the JS window, underneath the function add `ReactDOM.render();`
* and to apply the css we wrote change the class (which is a keyword in JS) to className

```js
function Person() {
    return (
        <div className="person">
            <h1>Anai</h1>
            <p>Your Age: 32</p>
        </div>
    );
}

ReactDOM.render();
```

The react package we imported is responsible for parsing the JSX code we added inside the function. Although it looks like HTML it is not, and once parsed it is transpiled to javascript. The other package we imported ReactDOM, exposes an object, which has a render method. This method allows us to render a javascript function as a component to the real DOM.

We can render this function by turning it into a html element, using this JSX syntax. eg. `<Person />` A custom self closing html element.

```js
ReactDOM.render(<Person />, document.querySelector('#p1'));
```

ReactDOM.render takes in two arguments, first our custom element. the second argument specifies where to render this element, there we reach out to the document and we use a query selector (normal javascript code) to select any element with the id p1, like so `document.querySelector('#p1')`.

With that im telling react that i want to render this function (the person component) to the div with the id p1.

But its not really reusable yet.


```html
<div id="p1"></div>

<div id="p2"></div>

```
Now lets get rid of the other html div we created at the start and put in another div with an id of p2, like above.
Say we have this second hook p2 in my html file and we wanted to render a different component, a different person. We would have to hard code the values into that and create a new component. with React we can configure them dynamically as we need them.

So what we will do is add an argument to the function called `props`.

















Resources

[Udacity-Version Control with Git ](https://classroom.udacity.com/courses/ud123)

_Soggy Ink- By Anai Araya_<br>
Follow me [@Anaizing](https://twitter.com/Anaizing) <br>
[ANAIZING.DESIGN](https://anaizing.design/)
